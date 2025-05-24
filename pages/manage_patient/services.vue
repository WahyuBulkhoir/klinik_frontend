<template>
    <section id="services" class="pt-2">
        <div class="container mx-auto py-10 px-4 sm:px-32">
            <div class="text-center mb-8">
                <h2 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
                    :style="{ fontFamily: 'Jost' }">
                    OUR SERVICES
                </h2>
                <div class="w-40 h-1 bg-green-500 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white shadow-lg rounded-lg p-6 text-center border border-green-500 max-w-sm w-full mx-auto cursor-pointer transition-transform transform hover:scale-105"
                    :style="{ fontFamily: 'Poppins' }">
                    <img src="/img/manajemen_obat_logo.svg" alt="Service Logo" class="w-12 mx-auto mb-3" />
                    <h3 class="text-xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        Manajemen Obat dan Stok
                    </h3>
                    <p class="text-gray-600 mt-2 text-l text-justify">
                        Fitur ini memudahkan pengelolaan data obat, termasuk penambahan, pengeditan, dan penghapusan
                        obat. Anda juga dapat memantau stok secara real-time untuk memastikan ketersediaan obat di
                        klinik tetap terjaga dan tidak terjadi kekurangan.
                    </p>
                    <a href="/manage_patient/detail_manage_medicine"
                        class="mt-3 px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-green-600 justify-center hover:bg-green-600 rounded-lg flex items-center mx-auto text-sm">
                        Detail
                        <img src="/img/icon.svg" alt="icon" class="w-3 ml-2" />
                    </a>
                </div>

                <div class="bg-white shadow-lg rounded-lg p-6 text-center border border-green-500 max-w-sm w-full mx-auto cursor-pointer transition-transform transform hover:scale-105"
                    :style="{ fontFamily: 'Poppins' }">
                    <img src="/img/manajemen_pasien_logo.svg" alt="Service Logo" class="w-12 mx-auto mb-3" />
                    <h3 class="text-xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        Manajemen Pasien
                    </h3>
                    <p class="text-gray-600 mt-2 text-l text-justify">
                        Layanan ini memungkinkan pengelolaan data pasien secara lengkap, mulai dari pendaftaran, riwayat
                        medis, hingga informasi kontak darurat. Sistem dirancang untuk mendukung proses administrasi dan
                        pemeriksaan medis dengan efisien dan akurat.
                    </p>
                    <a href="/manage_patient/detail_manage_patient"
                        class="mt-3 px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-green-600 hover:bg-green-600 rounded-lg flex items-center mx-auto justify-center text-sm">
                        Detail
                        <img src="/img/icon.svg" alt="icon" class="w-3 ml-2" />
                    </a>
                </div>

                <div class="bg-white shadow-lg rounded-lg p-4 text-center border border-green-500 max-w-sm w-full mx-auto cursor-pointer transition-transform transform hover:scale-105"
                    :style="{ fontFamily: 'Poppins' }">
                    <img src="/img/manajemen_dokter_logo.svg" alt="Service Logo" class="w-12 mx-auto mb-3" />
                    <h3 class="text-xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        Manajemen Jadwal Praktek Dokter
                    </h3>
                    <p class="text-gray-600 mt-2 text-l text-justify">
                        Dengan fitur ini, admin dapat mengatur dan memantau jadwal praktek dokter secara fleksibel.
                        Pasien juga dapat melihat jadwal yang tersedia untuk melakukan konsultasi, sehingga mempermudah
                        proses penjadwalan dan pelayanan klinik.
                    </p>
                    <a href="/manage_patient/detail_manage_doctor"
                        class="mt-3 px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-green-600 justify-center hover:bg-green-600 rounded-lg flex items-center mx-auto text-sm">
                        Detail
                        <img src="/img/icon.svg" alt="icon" class="w-3 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ServicesSection"
};
</script>