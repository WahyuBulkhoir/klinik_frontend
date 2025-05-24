<template>
    <div class="relative bg-whites min-h-screen text-[24px] text-[#656565] font-kaushan-script mt-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-5">
            <div class="text-[50px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent md:w-2/3 text-center"
                :style="{ fontFamily: 'Kaushan Script' }">
                Manajemen Obat dan Stok
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img class="h-[250px] w-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/detail_manage_medicine.png" alt="Ilustrasi Manajemen Obat" />
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
                    Manajemen Obat dan Stok adalah sistem yang dirancang untuk memastikan ketersediaan obat secara
                    efisien,
                    akurat, dan tepat waktu. Sistem ini membantu staf klinik dalam mencatat, mengelola, dan memantau
                    persediaan
                    obat sehingga pelayanan medis dapat berjalan tanpa kendala.
                </p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine1.png" alt="Ilustrasi Obat 1" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine2.png" alt="Ilustrasi Obat 2" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Cara Manajemen Obat
                </h2>
                <p>
                    Pengelolaan obat dilakukan melalui sistem yang terintegrasi, mulai dari pencatatan masuk-keluar
                    stok,
                    pengingat stok menipis, hingga pelacakan obat kadaluarsa. Hal ini bertujuan untuk menjaga
                    ketersediaan dan
                    kualitas obat secara konsisten.
                </p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Mengapa Perlu Manajemen Obat?
                </h2>
                <p>
                    Tanpa manajemen obat yang baik, risiko kekurangan stok, kelebihan pembelian, dan penggunaan obat
                    kadaluarsa
                    akan meningkat. Sistem manajemen ini juga membantu dalam pengambilan keputusan berbasis data untuk
                    efisiensi
                    anggaran dan pelayanan.
                </p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine3.png" alt="Ilustrasi Obat 3" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20 mb-28">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_medicine4.png" alt="Ilustrasi Obat 4" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Fasilitas yang Kami Tawarkan
                </h2>
                <ul class="list-disc list-inside">
                    <li>Pengelolaan Stok Obat</li>
                    <li>Notifikasi Obat Habis</li>
                    <li>Pelaporan Otomatis</li>
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
    name: 'ManajemenMedicine'
})
</script>
