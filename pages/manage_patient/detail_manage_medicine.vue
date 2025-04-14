<template>
    <div class="relative bg-whites min-h-screen text-[24px] text-[#656565] font-kaushan-script mt-10">
        <!-- Header -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-5">
            <div class="text-[50px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent md:w-2/3 text-center"
                :style="{ fontFamily: 'Kaushan Script' }">
                Manajemen Obat dan Stok
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img class="h-[250px] w-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/detail_manage_medicine.png" alt="" />
            </div>
        </div>
        <div class="w-[90%] h-3 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-2"></div>

        <!-- Section: Definisi -->
        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Definisi
                </h2>
                <p>Manajemen Pasien merupakan salah satu layanan yang kami sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.</p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <!-- Background Ambulance -->
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <!-- Ambulance di atas -->
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine1.png" alt="Ambulance" />
            </div>
        </div>

        <!-- Section: Cara Manajemen Pasien -->
        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <!-- Ambulance di atas -->
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine2.png" alt="Ambulance" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Cara Manajemen Pasien
                </h2>
                <p>Kami menyediakan sistem yang memungkinkan pasien untuk mengatur jadwal, melihat rekam medis, serta
                    mengakses layanan kesehatan dengan lebih mudah.Manajemen Pasien merupakan salah satu layanan yang
                    kami sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.</p>
            </div>
        </div>

        <!-- Section: Mengapa Perlu Manajemen Pasien? -->
        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Mengapa Perlu Manajemen Pasien?
                </h2>
                <p>Kami menyediakan sistem yang memungkinkan pasien untuk mengatur jadwal, melihat rekam medis, serta
                    mengakses layanan kesehatan dengan lebih mudah.Manajemen Pasien merupakan salah satu layanan yang
                    kami sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.Manajemen Pasien merupakan salah satu layanan yang kami
                    sediakan untuk memudahkan pasien dalam
                    mendapatkan pelayanan yang lebih baik.</p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <!-- Background Ambulance -->
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <!-- Ambulance di atas -->
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine3.png" alt="Ambulance" />
            </div>
        </div>

        <!-- Section: Fasilitas yang Kami Tawarkan -->
        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20 mb-28">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <!-- Ambulance di atas -->
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine4.png" alt="Ambulance" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Fasilitas yang Kami Tawarkan
                </h2>
                <ul class="list-disc list-inside">
                    <li>Reservasi Online</li>
                    <li>Akses Rekam Medis</li>
                    <li>Konsultasi dengan Dokter</li>
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
    name: "ManajemenMedicine"
})
</script>
