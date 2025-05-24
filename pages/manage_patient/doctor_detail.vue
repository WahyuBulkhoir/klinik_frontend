<template>
    <div class="min-h-screen flex flex-col text-gray-600 font-poppins">
        <div class="flex items-center justify-center mt-10 w-full mx-auto gap-20">
            <img class="w-[500px] h-auto object-cover rounded-full cursor-pointer transition-transform transform hover:scale-105"
                alt="Doctor Icon" src="/public/img/icon_doctor.png" />
            <div class="mx-[150px] ml-0 mt-0 cursor-pointer transition-transform transform hover:scale-105">
                <h1 class="text-[40px] font-extrabold">dr. {{ doctor?.name || 'Loading...' }}</h1>
                <h2 class="text-[20px] font-medium text-gray-500">{{ doctor?.email }}</h2>
            </div>
        </div>

        <div class="w-[80%] mt-2 h-2 bg-gradient-to-r from-[#4bb649] to-[#3582d7] mx-auto"></div>

        <div class="flex w-[50%] mx-auto mt-20 mb-20 gap-10 relative">
            <h3 class="absolute top-[-20px] left-0 text-2xl font-bold" :style="{ fontFamily: 'Kaushan Script' }">
                Keahlian
            </h3>
            <div class="w-1/2 bg-white border border-green-500 rounded-[10px] p-6 mt-6">
                <ul class="space-y-2 font-medium text-xl">
                    <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
                </ul>
            </div>

            <h3 class="absolute top-[-20px] left-[53%] text-2xl font-bold" :style="{ fontFamily: 'Kaushan Script' }">
                Jadwal
            </h3>
            <div class="w-1/2 bg-white border border-green-500 rounded-[10px] p-6 mt-6 transition-all duration-300">
                <div v-for="(hours, day) in schedule" :key="day" class="border-b py-2">
                    <div @click="toggleAccordion(day)" class="flex justify-between items-center cursor-pointer">
                        <span class="text-xl font-semibold">{{ day }}</span>
                        <span :class="{ 'rotate-90': openDay === day }" class="transform transition-transform">▶</span>
                    </div>
                    <div :class="{ 'max-h-[300px] overflow-auto': openDay === day, 'max-h-0 overflow-hidden': openDay !== day }"
                        class="transition-all duration-500 ease-in-out">
                        <ul class="mt-2 space-y-1">
                            <li v-for="hour in hours" :key="hour" class="text-lg">
                                • {{ hour }} WIB
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <FooterSection id="footer" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch';
import FooterSection from '@/pages/manage_patient/footer.vue'

const route = useRoute();
const router = useRouter();

const doctor = ref(null);
const skills = ref([]);
const schedule = ref({});
const openDay = ref(null);

const doctorId = ref(route.query.id);
const token = localStorage.getItem('access_token');

let unauthorizedHandled = false;

const handleUnauthorized = () => {
    if (!unauthorizedHandled) {
        unauthorizedHandled = true;
        alert('Sesi login Anda telah berakhir. Silakan login kembali.');
        localStorage.removeItem('access_token');
        router.push('/manage_patient/login');
    }
};

const fetchDoctorProfile = async () => {
    try {
        const res = await useAuthenticatedFetch(`http://localhost:8000/api/doctors/${doctorId.value}/`);
        if (res.status === 401) return handleUnauthorized();
        if (!res.ok) throw new Error("Profil tidak ditemukan");
        const data = await res.json();
        doctor.value = data;
        skills.value = data.skills || [];
    } catch (error) {
        console.error("Gagal ambil profil:", error);
    }
};

const fetchDoctorSchedule = async () => {
    try {
        const res = await useAuthenticatedFetch(`http://localhost:8000/api/doctor-schedule/${doctorId.value}/`);
        if (res.status === 401) return handleUnauthorized();
        if (!res.ok) throw new Error("Gagal ambil jadwal");
        const jadwals = await res.json();

        const grouped = {};
        jadwals.forEach(j => {
            if (!grouped[j.hari]) grouped[j.hari] = [];
            grouped[j.hari].push(j.jam_mulai);
        });
        schedule.value = grouped;
    } catch (error) {
        console.error(error);
    }
};

const toggleAccordion = (day) => {
    openDay.value = openDay.value === day ? null : day;
};

onMounted(() => {
    fetchDoctorProfile();
    fetchDoctorSchedule();
});
</script>

<style scoped>
.rotate-90 {
    transform: rotate(90deg);
}
</style>
