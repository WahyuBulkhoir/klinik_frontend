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
                <!-- Card 1 -->
                <div class="bg-white shadow-lg rounded-lg p-6 text-center border-green-500 max-w-sm w-full mx-auto cursor-pointer transition-transform transform hover:scale-105"
                    :style="{ fontFamily: 'Poppins' }">
                    <img src="/img/manajemen_logo.png" alt="Service Logo" class="w-12 mx-auto mb-3" />
                    <h3 class="text-xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        Manajemen Obat dan Stok
                    </h3>
                    <p class="text-gray-600 mt-2 text-l text-justify">
                        Manajemen Obat dan Stok merupakan salah satu services yang kami sediakan.Manajemen Obat dan Stok
                        merupakan salah satu services yang kami sediakan.Manajemen Obat dan Stok merupakan salah satu
                        services yang kami sediakan.Manajemen Obat dan Stok merupakan salah satu services yang kami
                        sediakan.
                    </p>
                    <a href="/manage_patient/detail_manage_medicine"
                        class="mt-3 px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-green-600 justify-center hover:bg-green-600 rounded-lg flex items-center mx-auto text-sm">
                        Detail
                        <img src="/img/icon.svg" alt="icon" class="w-3 ml-2" />
                    </a>
                </div>

                <!-- Card 2 -->
                <div class="bg-white shadow-lg rounded-lg p-6 text-center border border-green-500 max-w-sm w-full mx-auto cursor-pointer transition-transform transform hover:scale-105"
                    :style="{ fontFamily: 'Poppins' }">
                    <img src="/img/manajemen_logo.png" alt="Service Logo" class="w-12 mx-auto mb-3" />
                    <h3 class="text-xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        Manajemen Pasien
                    </h3>
                    <p class="text-gray-600 mt-2 text-l text-justify">
                        Manajemen Obat dan Stok merupakan salah satu services yang kami sediakan.Manajemen Obat dan Stok
                        merupakan salah satu services yang kami sediakan.Manajemen Obat dan Stok merupakan salah satu
                        services yang kami sediakan.Manajemen Obat dan Stok merupakan salah satu services yang kami
                        sediakan.
                    </p>
                    <a href="/manage_patient/detail_manage_patient"
                        class="mt-3 px-3 py-1 text-white bg-gradient-to-r from-blue-500 to-green-600 hover:bg-green-600 rounded-lg flex items-center mx-auto justify-center text-sm">
                        Detail
                        <img src="/img/icon.svg" alt="icon" class="w-3 ml-2" />
                    </a>
                </div>

                <!-- Card 3 -->
                <div class="bg-white shadow-lg rounded-lg p-4 text-center border border-green-500 max-w-sm w-full mx-auto cursor-pointer transition-transform transform hover:scale-105"
                    :style="{ fontFamily: 'Poppins' }">
                    <img src="/img/manajemen_logo.png" alt="Service Logo" class="w-12 mx-auto mb-3" />
                    <h3 class="text-xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        Manajemen Jadwal Praktek Dokter
                    </h3>
                    <p class="text-gray-600 mt-2 text-l text-justify">
                        Manajemen Obat dan Stok merupakan salah satu services yang kami sediakan.Manajemen Obat dan Stok
                        merupakan salah satu services yang kami sediakan.Manajemen Obat dan Stok merupakan salah satu
                        services yang kami sediakan.Manajemen Obat dan Stok merupakan salah satu services yang kami
                        sediakan.
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