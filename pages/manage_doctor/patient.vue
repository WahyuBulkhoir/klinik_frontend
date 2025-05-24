<template>
    <div class="w-full h-[750px] bg-gradient-to-r from-[#eff5fc] to-[#3582d7] overflow-hidden text-left text-[15px] text-[#282828] flex flex-col items-center"
        :style="{ fontFamily: 'Poppins' }">
        <h1 class="mt-14 text-xl font-bold text-white">PATIENT</h1>
        <div class="w-28 h-1 bg-white mt-1"></div>

        <div class="flex gap-10 mt-20 w-[90%] justify-center max-w-[1400px]">
            <div class="shadow-lg rounded-lg bg-white border-2 border-[#3582d7] w-[572px] p-6">
                <h2 class="text-xl font-bold tracking-wider">Patient Meeting Request</h2>

                <div class="mt-5 space-y-4">
                    <div v-for="(person, index) in people" :key="index"
                        class="flex items-center justify-between bg-[#fcfcfc] border-2 border-[#3582d7] rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
                        <b class="text-lg">{{ person.nama_lengkap }}</b>
                        <NuxtLink :to="`/manage_doctor/detail_meet-request?id=${person.id}`"
                            class="text-gray-600 hover:text-blue-600">
                            See details
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="!loading && people.length === 0" class="text-center text-gray-500 mt-4">
                    No meeting requests found.
                </div>
            </div>

            <div class="shadow-lg rounded-lg bg-white border-2 border-[#3582d7] w-[572px] p-6">
                <h2 class="text-xl font-bold tracking-wider">Meeting Accepted</h2>

                <div class="mt-5 space-y-4">
                    <div v-for="(person, index) in acceptedMeetings" :key="index"
                        class="flex items-center justify-between bg-white border-2 border-[#3582d7] rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
                        <div>
                            <b class="text-lg">{{ person.nama_lengkap }}</b>
                            <p class="text-gray-600">Status: {{ person.status }}</p>
                        </div>
                        <NuxtLink :to="`/manage_doctor/detail_initial_inspection?id=${person.id}`"
                            class="text-blue-500 hover:text-blue-700">
                            See details
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="!loading && acceptedMeetings.length === 0" class="text-center text-gray-500 mt-4">
                    No meeting accepted found.
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const people = ref<any[]>([])
const loading = ref(false)
const acceptedMeetings = ref<any[]>([])
const error = ref<string | null>(null)

const fetchMeetingRequests = async () => {
    loading.value = true
    error.value = null

    try {
        const res = await useAuthenticatedFetch('http://localhost:8000/api/meeting-request/list-dokter/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()

        people.value = data.data
            .filter((item: any) => item.status === 'pending')
            .map((item: any) => ({
                id: item.id,
                nama_lengkap: item.rekam_medis_detail?.nama_lengkap || 'Tanpa Nama'
            }))

        acceptedMeetings.value = data.data
            .filter((item: any) => item.status === 'approved')
            .map((item: any) => ({
                id: item.id,
                nama_lengkap: item.rekam_medis_detail?.nama_lengkap || 'Tanpa Nama',
                status: item.status
            }))
    } catch (err: any) {
        console.error('Failed to fetch meeting requests:', err)
        error.value = err.message || 'Something went wrong'
    } finally {
        loading.value = false
    }
}

onMounted(fetchMeetingRequests)
</script>
