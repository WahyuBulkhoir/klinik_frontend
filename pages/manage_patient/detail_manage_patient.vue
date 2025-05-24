<template>
    <div class="relative bg-whites min-h-screen text-[24px] text-[#656565] font-kaushan-script p-0 mt-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-5">
            <div class="text-[50px] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent md:w-2/3 text-center"
                :style="{ fontFamily: 'Kaushan Script' }">
                Manajemen Pasien
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img class="h-[250px] w-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/detail_manage_patient.png" alt="" />
            </div>
        </div>
        <div class="w-[90%] h-3 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-2"></div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Definisi
                </h2>
                <p>
                    Manajemen Pasien merupakan salah satu layanan yang kami sediakan untuk memudahkan pasien
                    dalam mendapatkan pelayanan yang lebih baik. Dengan layanan ini, pasien dapat dengan
                    mudah mengakses berbagai informasi dan fasilitas kesehatan, sehingga proses administrasi
                    dan penanganan menjadi lebih efisien dan cepat.
                </p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_pasien1.png" alt="Ambulance" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_pasien2.png" alt="Ambulance" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-4"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Cara Manajemen Pasien
                </h2>
                <p>
                    Kami menyediakan sistem yang memungkinkan pasien untuk mengatur jadwal kunjungan,
                    melihat rekam medis, serta mengakses layanan kesehatan secara online. Proses ini
                    dilakukan melalui antarmuka yang ramah pengguna sehingga pasien tidak perlu lagi
                    mengalami kesulitan saat ingin mendapatkan layanan kesehatan.
                </p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl" :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-2"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Mengapa Perlu Manajemen Pasien?
                </h2>
                <p>
                    Manajemen pasien sangat penting untuk meningkatkan efisiensi layanan kesehatan. Dengan
                    sistem yang terintegrasi, pasien dapat memperoleh informasi secara real-time, mengurangi
                    waktu tunggu, dan mendapatkan perawatan yang lebih cepat dan tepat sasaran.
                </p>
            </div>
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_pasien3.png" alt="Ambulance" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center mt-12 gap-x-20">
            <div class="md:w-auto flex justify-center relative">
                <img class="w-[180px] h-auto hover:scale-105 transition-transform duration-300"
                    src="/public/img/bg-ambulance.png" alt="Background Ambulance" />
                <img class="w-[150px] h-auto hover:scale-105 transition-transform duration-300 absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-7"
                    src="/public/img/img_pasien4.png" alt="Ambulance" />
            </div>
            <div class="md:w-3/5 text-left md:text-justify max-w-2xl order-1 md:order-2"
                :style="{ fontFamily: 'Poppins' }">
                <h2 class="text-[30px] bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-4"
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

        <div class="flex justify-center mt-16 mb-28">
            <a href="/manage_patient/detail_consultation"
                class="rounded-lg bg-[#3582d7] text-white px-8 py-3 text-[20px] hover:bg-[#4bb649] transition-colors duration-300 flex items-center">
                Konsultasi Sekarang
                <img class="w-6 h-6 ml-2" src="/public/img/icon.svg" alt="Icon" />
            </a>
        </div>

        <FooterSection id="footer" />
    </div>
</template>
