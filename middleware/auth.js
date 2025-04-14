export default defineNuxtRouteMiddleware((to, from) => {
    const role = localStorage.getItem('user_role');

    if (to.path.startsWith('/dashboard/doctor') && role !== 'doctor') {
        return navigateTo('/login'); // Redirect jika bukan dokter
    }
    if (to.path.startsWith('/dashboard/patient') && role !== 'patient') {
        return navigateTo('/login'); // Redirect jika bukan pasien
    }
});
