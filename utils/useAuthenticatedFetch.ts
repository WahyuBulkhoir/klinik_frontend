export async function useAuthenticatedFetch(url: string, options: RequestInit = {}) {
    let accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')

    if (!accessToken || !refreshToken) {
        throw new Error('No tokens available, please login again.')
    }

    const fetchWithToken = async (token: string) => {
        const headers = new Headers(options.headers || {})
        headers.set('Authorization', `Bearer ${token}`)
        if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
            headers.set('Content-Type', 'application/json')
        }

        return await fetch(url, {
            ...options,
            headers,
        })
    }

    let response = await fetchWithToken(accessToken)

    if (response.status === 401) {
        const refreshResponse = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: refreshToken }),
        })

        if (refreshResponse.ok) {
            const data = await refreshResponse.json()
            accessToken = data.access
            if (typeof accessToken === 'string') {
                localStorage.setItem('access_token', accessToken)
                response = await fetchWithToken(accessToken)
            } else {
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                throw new Error('Failed to refresh access token. Please login again.')
            }
        } else {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            window.location.href = 'manage_patient/login'
            throw new Error('Session expired. Please login again.')
        }
    }

    return response
}
