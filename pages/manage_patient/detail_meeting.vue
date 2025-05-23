<template>
    <section id="doctor" class="pt-0">
        <div class="flex flex-col items-center rounded-3xl bg-gradient-to-r from-blue-300 to-green-400 py-10">

            <div class="w-full max-w-xs text-center mt-0">
                <h1 class="text-xl font-bold bg-white bg-clip-text text-transparent" :style="{ fontFamily: 'Jost' }">
                    DOCTOR
                </h1>
                <div class="w-24 h-1 bg-white mx-auto mt-2"></div>
            </div>

            <div class="w-full max-w-3xl mt-6 flex flex-col sm:flex-row gap-4 px-4">
                <input v-model="searchName" type="text" placeholder="Cari nama dokter..."
                    class="flex-1 px-4 py-2 rounded-xl shadow focus:outline-none" />
                <input v-model="searchSpecialty" type="text" placeholder="Cari spesialisasi..."
                    class="flex-1 px-4 py-2 rounded-xl shadow focus:outline-none" />
            </div>

            <div
                class="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 px-4">
                <router-link v-for="doctor in filteredDoctors" :key="doctor.id"
                    :to="`/manage_patient/detail_doctor?id=${doctor.id}`"
                    class="bg-white shadow-lg rounded-xl border border-green-500 p-4 relative cursor-pointer transition-transform transform hover:scale-105">
                    <img class="w-full h-44 rounded-t-xl object-cover" alt="Dokter" src="/img/dokter.png" />
                    <div class="mt-4 text-center">
                        <h3 class="text-lg font-bold">{{ doctor.name }}</h3>
                        <p class="text-gray-600 text-sm">
                            {{ doctor.specialty || 'Spesialisasi belum diisi' }}
                        </p>
                        <p class="text-sm italic text-gray-500 mt-2">
                            "{{ doctor.slogan || 'Belum ada slogan' }}"
                        </p>
                    </div>
                </router-link>
            </div>

            <div v-if="filteredDoctors.length === 0" class="mt-8 text-white">
                Tidak ada dokter yang sesuai dengan kriteria.
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch';

const doctors = ref([])
const searchName = ref('')
const searchSpecialty = ref('')

const fetchDoctors = async () => {
    try {
        const res = await useAuthenticatedFetch('http://localhost:8000/api/doctors/')
        if (!res.ok) throw new Error('Gagal fetch daftar dokter')
        doctors.value = await res.json()
    } catch (error) {
        console.error(error)
    }
}

onMounted(() => {
    fetchDoctors()
})

const filteredDoctors = computed(() => {
    return doctors.value.filter((doctor) => {
        const matchName = doctor.name?.toLowerCase().includes(searchName.value.toLowerCase())
        const matchSpecialty = doctor.specialty?.toLowerCase().includes(searchSpecialty.value.toLowerCase())
        return matchName && matchSpecialty
    })
})
</script>
