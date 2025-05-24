<template>
    <div class="relative w-full bg-gray-100 overflow-hidden text-left text-[25px] text-black font-jost">
        <div class="flex flex-col items-center bg-gray-100 py-16">
            <div class="w-full max-w-xs text-center">
                <h1 class="text-xl font-bold bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent"
                    :style="{ fontFamily: 'Jost' }">
                    ABOUT
                </h1>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-300 to-green-400 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 w-full max-w-4xl px-4">
                <div v-for="(item, index) in aboutItems" :key="index" class="flex flex-col items-start text-center">
                    <div class="w-[72px] h-[72px] rounded-full flex items-center justify-center border border-[#4bb649] shadow-lg"
                        :class="item.bgColor">
                        <img class="w-[65px] h-[65px] object-cover" alt="" src="/public/img/about_circle.png" />
                    </div>
                    <h2 class="mt-4 font-normal bg-gradient-to-b from-[#3582d7] to-[#4bb649] bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        {{ item.title }}
                    </h2>
                    <p class="text-[15px] font-light font-poppins text-justify w-[90%] break-words whitespace-normal"
                        :style="{ fontFamily: 'Poppins' }">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const aboutItems = [
    {
        title: "Manajemen Pasien",
        text: "Aplikasi ini memudahkan pencatatan dan pengelolaan data pasien, mulai dari biodata lengkap, riwayat kunjungan, hingga administrasi dan rekam medis. Semua data tersimpan dengan aman dan mudah diakses oleh pihak klinik.",
        bgColor: "bg-[#80dabb]"
    },
    {
        title: "Manajemen Obat & Stok",
        text: "Fitur ini memungkinkan staf klinik memantau ketersediaan obat, menambahkan stok baru, serta mencatat distribusi obat yang diberikan kepada pasien. Sistem ini membantu mencegah kehabisan atau penumpukan obat.",
        bgColor: "bg-[#9dd7dd]"
    },
    {
        title: "Manajemen Jadwal Dokter",
        text: "Dengan manajemen jadwal praktik dokter, klinik dapat mengatur jam kerja setiap dokter, menampilkan ketersediaan jadwal ke pasien, serta menghindari benturan jadwal yang tidak diinginkan.",
        bgColor: "bg-[#6adda0]"
    },
    {
        title: "Sistem Terintegrasi",
        text: "Aplikasi ini dirancang dengan sistem terintegrasi antar bagian, sehingga data pasien, jadwal, dan pengobatan saling terhubung. Hal ini mempermudah proses pelayanan dan meningkatkan efisiensi operasional klinik.",
        bgColor: "bg-[#86d9c2]"
    }
];
</script>
