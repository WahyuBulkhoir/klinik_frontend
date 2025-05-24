<template>
    <div class="relative bg-whites min-h-screen text-[24px] text-[#656565] font-kaushan-script mt-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-5">
            <div class="text-[50px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent md:w-2/3 text-center"
                :style="{ fontFamily: 'Kaushan Script' }">
                Manajemen Praktik dan Jadwal Dokter
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img class="h-[250px] w-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/detail_manage_doctor.png" alt="" />
            </div>
        </div>
        <div class="w-[90%] h-3 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-2"></div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Definisi
                </h2>
                <p>
                    Fitur manajemen dokter adalah layanan digital yang dirancang untuk mempermudah proses pengelolaan
                    praktik dokter.
                    Dengan sistem ini, pengguna dapat mengatur jadwal dokter, membuat konsultasi, serta mengakses data
                    rekam medis pasien
                    dengan lebih praktis dan efisien.
                </p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_doctor1.png" alt="Doctor" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_doctor2.png" alt="Doctor" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Bagaimana Cara Mengelola Praktik Dokter?
                </h2>
                <p>
                    Melalui sistem ini, pihak klinik dapat membuat, memperbarui, dan menghapus jadwal praktik dokter.
                    Selain itu, tersedia fitur konsultasi online, pengelolaan data pasien, serta pemantauan aktivitas
                    dokter secara real-time.
                    Sistem ini juga mendukung integrasi dengan rekam medis untuk proses pemeriksaan yang lebih
                    terstruktur.
                </p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Mengapa Perlu Manajemen Dokter Digital?
                </h2>
                <p>
                    Manajemen digital membantu menghindari jadwal bentrok, mempercepat proses pelayanan pasien,
                    dan meningkatkan efisiensi dalam pengaturan jam praktik dokter. Dengan sistem ini, klinik dan rumah
                    sakit
                    bisa memberikan pelayanan yang lebih profesional dan terorganisir.
                </p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_doctor3.png" alt="Doctor" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20 mb-28">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_doctor4.png" alt="Doctor" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Fasilitas yang Kami Tawarkan
                </h2>
                <ul class="list-disc list-inside">
                    <li>Pembuatan dan Pengelolaan Jadwal Praktik</li>
                    <li>Reservasi Online Konsultasi</li>
                    <li>Integrasi Rekam Medis Digital</li>
                    <li>Pemantauan Aktivitas Dokter</li>
                </ul>
            </div>
        </div>

        <FooterSection id="footer" />
    </div>
</template>

<script setup lang="ts">
import FooterSection from '@/pages/manage_patient/footer.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ManajemenDoctor"
})
</script>
