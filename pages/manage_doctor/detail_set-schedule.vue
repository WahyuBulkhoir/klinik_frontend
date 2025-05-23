<template>
    <div class="relative w-full min-h-screen bg-[#FCFDFE] text-gray-800 mb-20" :style="{ fontFamily: 'Poppins' }">
        <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] h-[119px] flex flex-col justify-center items-center">
            <h1 class="text-xl font-bold text-white">SET SCHEDULE</h1>
            <div class="w-40 h-1 bg-white mt-1"></div>
        </div>

        <div class="mt-8 mx-auto w-[90%] max-w-[900px]">
            <div class="grid grid-cols-3 gap-4">
                <button v-for="(day, index) in days" :key="index" @click="selectedDay = day"
                    class="p-4 border-2 border-[#3582d7] rounded-lg text-center font-semibold shadow-md cursor-pointer transition-transform transform hover:scale-105"
                    :class="{ 'bg-blue-500 text-white': selectedDay === day }">
                    {{ day }}
                </button>
            </div>
        </div>

        <div v-if="selectedDay"
            class="mt-8 mx-auto w-[90%] max-w-[900px] text-[#656565] border-2 border-[#3582d7] rounded-lg shadow-md p-6">
            <h2 class="text-center font-bold text-lg mb-4">{{ selectedDay }}</h2>

            <div class="grid grid-cols-3 items-center gap-4 border-t border-blue-400 pt-2">
                <input type="date" v-model="schedules[selectedDay].date" class="border p-2 rounded w-full" />
                <input type="text" v-model="schedules[selectedDay].timeRange" placeholder="10.00 - 16.00 WIB"
                    class="border p-2 rounded w-full" />

                <div class="mt-4">
                    <div v-for="(time, index) in schedules[selectedDay].times" :key="index"
                        class="flex justify-between items-center border-t border-green-400 py-2">
                        <input type="time" v-model="schedules[selectedDay].times[index]"
                            class="border-none focus:ring-0 w-[40%] text-center" />
                        <button @click="removeTime(index)" class="text-red-500">❌</button>
                    </div>
                </div>
            </div>

            <div class="mt-4 flex justify-center">
                <button @click="addTime"
                    class="bg-green-500 text-white px-4 py-2 rounded cursor-pointer transition-transform transform hover:scale-105">
                    + Tambah Jam
                </button>
            </div>

            <div class="mt-6 flex justify-center">
                <button @click="saveSchedule"
                    class="bg-[#3582d7] text-white font-semibold rounded-lg px-6 py-3 shadow-md cursor-pointer transition-transform transform hover:scale-105">
                    Save Schedule
                </button>
            </div>
        </div>
    </div>

    <div
        class="bg-gradient-to-r from-[#3582d7] to-[#AED5F2] h-[10px] w-[60%] mx-auto flex flex-col justify-center items-center">
    </div>

    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import FooterSection from '@/pages/manage_doctor/footer.vue'
</script>

<script lang="ts">
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

export default {
    data() {
        return {
            days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
            selectedDay: null as string | null,
            schedules: {} as Record<string, { date: string; timeRange: string; times: string[] }>
        }
    },
    mounted() {
        this.days.forEach(day => {
            this.schedules[day] = {
                date: "",
                timeRange: "",
                times: []
            }
        })

        this.loadScheduleFromBackend()
    },
    methods: {
        async loadScheduleFromBackend() {
            try {
                const res = await useAuthenticatedFetch("http://localhost:8000/api/doctor-schedule/")

                if (!res.ok) throw new Error("Gagal mengambil jadwal!")

                const data = await res.json()

                this.days.forEach(day => {
                    this.schedules[day] = {
                        date: "",
                        timeRange: "",
                        times: []
                    }
                })

                data.forEach((item: any) => {
                    const day = item.hari

                    if (!this.schedules[day]) {
                        this.schedules[day] = {
                            date: item.tanggal,
                            timeRange: item.time_range_label || "",
                            times: [item.jam_mulai]
                        }
                    } else {
                        if (this.schedules[day].date === item.tanggal) {
                            this.schedules[day].times.push(item.jam_mulai)
                        } else if (!this.schedules[day].date) {
                            this.schedules[day].date = item.tanggal
                            this.schedules[day].timeRange = item.time_range_label || ""
                            this.schedules[day].times = [item.jam_mulai]
                        }
                    }
                })
            } catch (err) {
                console.error("Error loading schedule:", err)
            }
        },

        addTime() {
            if (this.selectedDay && this.schedules[this.selectedDay].times.length < 6) {
                this.schedules[this.selectedDay].times.push("")
            }
        },

        removeTime(index: number) {
            if (this.selectedDay) {
                this.schedules[this.selectedDay].times.splice(index, 1)
            }
        },

        async saveSchedule() {
            try {
                const payload = {
                    schedules: this.schedules
                }

                const res = await useAuthenticatedFetch('http://localhost:8000/api/doctor-schedule/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })

                if (!res.ok) {
                    const errorText = await res.text()
                    throw new Error('Gagal menyimpan jadwal! ' + errorText)
                }

                alert("Jadwal berhasil disimpan!")
                this.$router.push("/manage_doctor")
            } catch (error) {
                console.error(error)
                alert("Terjadi kesalahan saat menyimpan jadwal!")
            }
        }
    }
}
</script>
