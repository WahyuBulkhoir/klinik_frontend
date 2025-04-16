<template>
    <div class="min-h-screen p-10">
        <h1 class="text-3xl font-bold mb-6">Pengaturan Profil Dokter</h1>

        <form @submit.prevent="submitSettings" class="space-y-4 max-w-lg">
            <label class="block mb-2 font-semibold">Keahlian</label>
            <input v-model="skillsInput" placeholder="Pisahkan dengan koma"
                class="w-full border border-gray-300 rounded-lg p-2" />

            <!-- Tampilkan skill secara visual -->
            <div class="flex flex-wrap gap-2 mt-2">
                <span v-for="(skill, i) in skillList" :key="i" class="bg-blue-100 px-2 py-1 rounded">
                    {{ skill }}
                </span>
            </div>
            <div>
                <label class="block mb-2 font-semibold">Spesialisasi</label>
                <input v-model="specialty" type="text" placeholder="Contoh: Spesialis Jantung"
                    class="w-full border border-gray-300 rounded-lg p-2" />
            </div>

            <div>
                <label class="block mb-2 font-semibold">Slogan</label>
                <input v-model="slogan" type="text" placeholder="Contoh: Menyembuhkan dengan sepenuh hati"
                    class="w-full border border-gray-300 rounded-lg p-2" />
            </div>

            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Simpan
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const skillsInput = ref("")
const skillList = computed(() => {
    return skillsInput.value.split(',').map(s => s.trim()).filter(Boolean)
})
const slogan = ref('')

const router = useRouter()
const skills = ref<string[]>([])
const specialty = ref('')

const submitSettings = async () => {
    const token = localStorage.getItem('access_token')
    if (!token) {
        alert("Token tidak ditemukan. Silakan login kembali.")
        router.push('/manage_patient/login')
        return
    }

    try {
        const res = await fetch('http://localhost:8000/api/doctor/settings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                skills: skillList.value,
                specialty: specialty.value,
                slogan: slogan.value
            })
        })

        if (res.ok) {
            const data = await res.json()
            skills.value = data.skills
            specialty.value = data.specialty
            slogan.value = data.slogan
        }

        if (!res.ok) {
            const errorData = await res.json()
            console.error("Gagal simpan:", errorData)
            throw new Error("Gagal menyimpan data: " + (errorData?.detail || res.statusText))
        }

        alert("Profil berhasil diperbarui")
        router.push('/manage_doctor')
    } catch (err) {
        alert("Terjadi kesalahan: " + (err as Error).message)
    }
}

onMounted(async () => {
    const token = localStorage.getItem('access_token')
    if (!token) return

    const res = await fetch('http://localhost:8000/api/doctor/settings/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if (res.ok) {
        const data = await res.json()

        skills.value = data.skills || []
        specialty.value = data.specialty || ''
        slogan.value = data.slogan || ''
        skillsInput.value = skills.value.join(', ')
    }
})
</script>