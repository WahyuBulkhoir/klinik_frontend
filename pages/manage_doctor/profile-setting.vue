<template>
    <div class="min-h-screen bg-gradient-to-b from-[#EFF5FC] to-[#3582D7] p-4 sm:p-10">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Pengaturan Profil Dokter</h1>

            <form @submit.prevent="submitSettings" class="space-y-6">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Keahlian</label>
                    <input v-model="skillsInput" placeholder="Pisahkan dengan koma (misal: USG, EKG, Bedah)"
                        class="w-full border border-gray-300 focus:ring-2 focus:ring-[#3582D7] focus:outline-none rounded-lg p-3 transition duration-200" />
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span v-for="(skill, i) in skillList" :key="i"
                            class="bg-[#EFF5FC] text-[#3582D7] text-sm font-medium px-3 py-1 rounded-full border border-[#3582D7]">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Spesialisasi</label>
                    <input v-model="specialty" type="text" placeholder="Contoh: Spesialis Jantung"
                        class="w-full border border-gray-300 focus:ring-2 focus:ring-[#3582D7] focus:outline-none rounded-lg p-3 transition duration-200" />
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Slogan</label>
                    <input v-model="slogan" type="text" placeholder="Contoh: Menyembuhkan dengan sepenuh hati"
                        class="w-full border border-gray-300 focus:ring-2 focus:ring-[#3582D7] focus:outline-none rounded-lg p-3 transition duration-200" />
                </div>

                <div class="flex justify-end">
                    <button type="submit"
                        class="bg-gradient-to-r from-[#3582D7] to-blue-600 hover:opacity-90 active:scale-95 transition transform text-white font-semibold px-6 py-2 rounded-lg shadow-lg">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const skillsInput = ref("")
const skillList = computed(() => {
    return skillsInput.value.split(',').map(s => s.trim()).filter(Boolean)
})
const slogan = ref('')
const router = useRouter()
const skills = ref<string[]>([])
const specialty = ref('')

const submitSettings = async () => {
    try {
        const res = await useAuthenticatedFetch('http://localhost:8000/api/doctor/settings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

            alert("Profil berhasil diperbarui")
            router.push('/manage_doctor')
        } else {
            const errorData = await res.json()
            console.error("Gagal simpan:", errorData)
            throw new Error("Gagal menyimpan data: " + (errorData?.detail || res.statusText))
        }
    } catch (err) {
        alert("Terjadi kesalahan: " + (err as Error).message)
    }
}

onMounted(async () => {
    try {
        const res = await useAuthenticatedFetch('http://localhost:8000/api/doctor/settings/')

        if (res.ok) {
            const data = await res.json()
            skills.value = data.skills || []
            specialty.value = data.specialty || ''
            slogan.value = data.slogan || ''
            skillsInput.value = skills.value.join(', ')
        } else {
            console.warn("Gagal mengambil data pengaturan dokter.")
        }
    } catch (err) {
        console.error("Terjadi kesalahan saat fetch:", (err as Error).message)
    }
})
</script>
