<template>
    <div class="min-h-screen flex flex-col text-gray-600 font-poppins">
        <!-- Background Effect -->
        <div class="absolute top-[703px] left-[-253px] blur-[61.5px] rounded-full w-[46px] h-[314px]"></div>

        <!-- Header -->
        <div class="flex items-center justify-center mt-10 w-[100%] mx-auto gap-20">
            <!-- Doctor Image -->
            <img class="w-[500px] h-auto object-cover rounded-full cursor-pointer transition-transform transform hover:scale-105"
                alt="Doctor Icon" src="/public/img/icon_doctor.png" />
            <!-- Doctor Info -->
            <div class="mx-[150px] ml-0 mt-0 cursor-pointer transition-transform transform hover:scale-105">
                <h1 class="text-[40px] font-extrabold">dr. {{ doctor?.name || 'Loading...' }}</h1>
                <h2 class="text-[20px] font-medium text-gray-500">{{ doctor?.email }}</h2>
            </div>
        </div>

        <!-- Separator Line -->
        <div class="w-[80%] mt-2 h-2 bg-gradient-to-r from-[#4bb649] to-[#3582d7] mx-auto"></div>

        <!-- Content Section -->
        <div class="flex w-[50%] mx-auto mt-20 mb-20 gap-10 relative">
            <!-- Keahlian Title -->
            <h3 class="absolute top-[-20px] left-0 text-2xl font-bold" :style="{ fontFamily: 'Kaushan Script' }">
                Keahlian
            </h3>
            <!-- Keahlian Section -->
            <div class="w-1/2 bg-white border border-green-500 rounded-[10px] p-6 mt-6">
                <ul class="space-y-2 font-medium text-xl">
                    <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
                </ul>
            </div>

            <!-- Jadwal Title -->
            <h3 class="absolute top-[-20px] left-[53%] text-2xl font-bold" :style="{ fontFamily: 'Kaushan Script' }">
                Jadwal
            </h3>
            <!-- Jadwal Section -->
            <div class="w-1/2 bg-white border border-green-500 rounded-[10px] p-6 mt-6 transition-all duration-300">
                <div v-for="(hours, day) in schedule" :key="day" class="border-b py-2">
                    <div @click="toggleAccordion(day)" class="flex justify-between items-center cursor-pointer">
                        <span class="text-xl font-semibold">{{ day }}</span>
                        <span :class="{ 'rotate-90': openDay === day }" class="transform transition-transform">▶</span>
                    </div>
                    <div :class="{ 'max-h-[300px] overflow-auto': openDay === day, 'max-h-0 overflow-hidden': openDay !== day }"
                        class="transition-all duration-500 ease-in-out">
                        <div v-for="hour in hours" :key="hour" class="flex justify-between py-1">
                            <span class="text-lg">{{ hour }} WIB</span>
                            <button @click="selectTime(day, hour)"
                                class="text-green-500 hover:text-green-700 text-xl">+</button>
                        </div>
                    </div>
                </div>
                <div v-if="selectedTimes.length" class="mt-4 p-2 bg-gray-100 rounded">
                    <h4 class="text-xl font-bold">Jam Terpilih:</h4>
                    <ul class="text-xl">
                        <li v-for="(item, index) in selectedTimes" :key="index"
                            class="flex justify-between items-center">
                            {{ item.day }} - {{ item.time }}
                            <button @click="removeTime(index)"
                                class="text-red-500 hover:text-red-700 text-sm">❌</button>
                        </li>
                    </ul>
                    <!-- Tombol Buat Pertemuan -->
                    <button @click="createAppointment"
                        class="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                        Buat Pertemuan
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <FooterSection id="footer" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const doctor = ref(null)
const schedule = ref({})
const selectedTimes = ref([])
const openDay = ref(null)
const selectedDate = ref('')

const doctorId = ref(route.query.id)
const token = localStorage.getItem('access_token')

// Notifikasi agar hanya tampil sekali
let unauthorizedHandled = false

const handleUnauthorized = () => {
    if (!unauthorizedHandled) {
        unauthorizedHandled = true
        alert('Sesi login Anda telah berakhir. Silakan login kembali.')
        localStorage.removeItem('access_token') // opsional, bersihkan token lama
        router.push('/manage_patient/login')
    }
}

const skills = ref([])

const fetchDoctorProfile = async () => {
    try {
        const res = await fetch(`http://localhost:8000/api/doctors/${doctorId.value}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (res.status === 401) return handleUnauthorized()
        if (!res.ok) throw new Error("Profil tidak ditemukan")
        const data = await res.json()
        doctor.value = data
        skills.value = data.skills || []
    } catch (error) {
        console.error("Gagal ambil profil:", error)
    }
}

const fetchDoctorSchedule = async () => {
    try {
        const res = await fetch(`http://localhost:8000/api/doctor-schedule/${doctorId.value}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (res.status === 401) return handleUnauthorized()
        if (!res.ok) throw new Error("Gagal ambil jadwal")
        const jadwals = await res.json()

        const grouped = {}
        jadwals.forEach(j => {
            if (!grouped[j.hari]) grouped[j.hari] = []
            grouped[j.hari].push(j.jam_mulai)
        })
        schedule.value = grouped
    } catch (error) {
        console.error(error)
    }
}

const createAppointment = async () => {
    if (selectedTimes.value.length === 0) {
        alert('Silakan pilih waktu terlebih dahulu');
        return;
    }

    const { day, time } = selectedTimes.value[0];

    try {
        // 1. Get doctor's schedules
        const scheduleRes = await fetch(`http://localhost:8000/api/doctor-schedule/${doctorId.value}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (scheduleRes.status === 401) return handleUnauthorized();
        if (!scheduleRes.ok) throw new Error("Gagal ambil jadwal dokter");

        const schedules = await scheduleRes.json();
        const matchingSchedule = schedules.find(s =>
            s.hari.toLowerCase() === day.toLowerCase() &&
            s.jam_mulai === time
        );

        if (!matchingSchedule) {
            throw new Error("Jadwal tidak ditemukan");
        }

        const res = await fetch('http://localhost:8000/api/meeting-request/', {
            method: 'POST',  // Pastikan metode yang benar
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                dokter: doctorId.value,
                jadwal: matchingSchedule.id,
            })
        });

        // 3. Handle response more flexibly
        if (res.ok) {
            // Success case - don't worry about response format
            alert("Permintaan pertemuan berhasil dibuat!");
            selectedTimes.value = [];
            router.push('/manage_patient');
            return;
        }

        // Error case - try to get error message
        try {
            const errorData = await res.json();
            throw new Error(errorData.detail || "Gagal buat pertemuan");
        } catch (e) {
            // If JSON parsing fails, use status text
            throw new Error(res.statusText || "Terjadi kesalahan pada server");
        }

    } catch (err) {
        console.error("Error:", err);
        // Don't show alert for successful cases
        if (!err.message.includes("Permintaan pertemuan berhasil dibuat")) {
            alert(err.message || "Terjadi kesalahan saat membuat pertemuan.");
        }
    }
}

const toggleAccordion = (day) => {
    openDay.value = openDay.value === day ? null : day
}

const selectTime = (day, time) => {
    if (!selectedTimes.value.some(item => item.day === day && item.time === time)) {
        selectedTimes.value.push({ day, time })
    }
}

const removeTime = (index) => {
    selectedTimes.value.splice(index, 1)
}

onMounted(() => {
    fetchDoctorProfile()
    fetchDoctorSchedule()
});
</script>

<style scoped>
.rotate-90 {
    transform: rotate(90deg);
}
</style>