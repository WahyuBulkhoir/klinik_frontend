<template>
    <div class="relative w-full min-h-screen bg-white text-[20px] text-white mb-20" :style="{ fontFamily: 'Poppins' }">
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] h-[119px] flex flex-col justify-center items-center">
            <h1 class="text-xl font-bold">SCHEDULE</h1>
            <div class="w-32 h-1 bg-white mt-1"></div>
        </div>

        <!-- Tombol Set Schedule -->
        <div class="flex justify-center space-x-6 mt-6 cursor-pointer transition-transform transform hover:scale-105">
            <a href="/manage_doctor/detail_set-schedule"
                class="bg-[#3582d7] text-white font-semibold rounded-lg px-6 py-3 shadow-md">
                Set Schedule
            </a>
        </div>

        <!-- Daftar Jadwal (Accordion) -->
        <div class="mt-8 mx-auto w-[90%] max-w-[1259px] text-[#656565]">
            <div v-for="(schedule, index) in schedules" :key="index"
                class="bg-white border border-[#3582d7] rounded-lg shadow-sm mb-4 cursor-pointer transition-transform transform hover:scale-105">
                <!-- Tombol Accordion -->
                <button @click="toggleSchedule(index)"
                    class="w-full px-6 py-4 flex justify-between items-center font-medium text-left focus:outline-none">
                    <span class="text-gray-700 font-semibold">{{ schedule.day }}</span>
                    <span class="text-[#3582d7] font-semibold">{{ schedule.times[0] }} - {{
                        schedule.times[schedule.times.length - 1] }} WIB</span>
                    <svg :class="openIndex === index ? 'rotate-180' : 'rotate-0'"
                        class="w-6 h-6 text-[#3582d7] transition-transform duration-300" fill="none"
                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                <!-- Isi Accordion (Tanggal di kiri, Jam di kanan) -->
                <div v-if="openIndex === index"
                    class="px-6 pb-4 text-[#3582d7] text-sm font-semibold transition-all duration-300">
                    <div class="grid grid-cols-3 gap-2 border-t border-[#3582d7]">
                        <!-- Tanggal di sebelah kiri -->
                        <div class="col-span-1 flex items-center justify-center text-gray-700 font-medium py-2">
                            {{ schedule.date }}
                        </div>

                        <!-- Garis vertikal pemisah -->
                        <div class="w-[2px] bg-[#3582d7]"></div>

                        <!-- Jam di sebelah kanan -->
                        <div class="col-span-1 flex flex-col space-y-2 py-2">
                            <span v-for="(time, idx) in schedule.times" :key="idx"
                                class="text-gray-700 font-medium border-b border-green-300 py-2">
                                {{ time }} WIB
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openIndex: null,
            schedules: [],
        };
    },
    methods: {
        toggleSchedule(index) {
            this.openIndex = this.openIndex === index ? null : index;
        },
        async loadSchedules() {
            try {
                const response = await fetch("http://localhost:8000/api/doctor-schedule/", {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Gagal mengambil jadwal dari server");
                }

                const data = await response.json();

                const groupedSchedules = {};

                data.forEach(jadwal => {
                    if (!groupedSchedules[jadwal.hari]) {
                        groupedSchedules[jadwal.hari] = {
                            day: jadwal.hari,
                            date: jadwal.tanggal,
                            times: [],
                        };
                    }

                    groupedSchedules[jadwal.hari].times.push(jadwal.jam_mulai.slice(0, 5));
                });

                this.schedules = Object.values(groupedSchedules);
            } catch (error) {
                console.error("Error loading schedules:", error);
            }
        }


    },
    mounted() {
        this.loadSchedules();
    }
};
</script>
