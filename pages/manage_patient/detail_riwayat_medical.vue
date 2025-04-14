<template>
    <div class="relative w-full max-w-6xl mx-auto text-gray-600 font-rubik space-y-10 p-6 mb-20">
        <!-- Resep Obat Section -->
        <div class="bg-white border-2 border-green-500 shadow-lg rounded-lg p-6">
            <div
                class="bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-kaushan-script py-3 px-6 rounded-t-lg">
                Resep Obat
            </div>
            <div class="flex items-center space-x-4 mt-4">
                <b class="w-1/4">Tanggal Pemeriksaan :</b>
                <span class="w-3/4">Hari / Bulan / Tahun</span>
            </div>
            <div class="flex items-center space-x-4 mt-4">
                <b class="w-1/4">Nama Dokter :</b>
                <span class="w-3/4">dr. Wahyu Bulkhoir</span>
            </div>
            <b class="block mt-6">Berikut adalah daftar obat yang diresepkan oleh dokter :</b>
            <div class="mt-4 border border-green-500 rounded-lg overflow-hidden">
                <div class="grid grid-cols-4 bg-green-500 text-white font-bold py-2 px-4">
                    <div class="text-center border-r border-white">Diagnosa</div>
                    <div class="text-center border-r border-white">Nama Obat</div>
                    <div class="text-center border-r border-white">Dosis</div>
                    <div class="text-center">Instruksi</div>
                </div>
                <div class="border-t border-green-500">
                    <div v-for="(item, index) in 5" :key="index"
                        class="grid grid-cols-4 py-3 px-4 border-b border-green-500">
                        <div class="text-center border-r border-green-500">Diagnosa</div>
                        <div class="text-center border-r border-green-500">Paracetamol</div>
                        <div class="text-center border-r border-green-500">3x1</div>
                        <div class="text-center">Sesudah Makan</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Surat Persetujuan Tindakan Medis Section -->
        <div class="bg-white border-2 border-green-500 shadow-lg rounded-lg p-6">
            <div
                class="bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-kaushan-script py-3 px-6 rounded-t-lg">
                Surat Persetujuan Tindakan Medis
            </div>
            <div class="mt-4">
                <b class="block">Tanggal Pemeriksaan :</b>
                <span>Hari / Bulan / Tahun</span>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <b>Judul :</b>
                    <div class="border-b border-gray-400 py-1">Judulnya</div>
                </div>
                <div>
                    <b>Deskripsi :</b>
                    <div class="border-b border-gray-400 py-1">Deskripsi</div>
                </div>
            </div>
            <div class="mt-4">
                <b>Dokter :</b>
                <span class="ml-2">dr. Wahyu Bulkhoir</span>
            </div>
            <div class="mt-6 text-red-500">
                <p>Berikut adalah surat persetujuan tindakan medis untuk Anda tandatangani sebelum melanjutkan ke proses
                    selanjutnya.</p>
            </div>
            <div class="mt-6">
                <button
                    class="w-64 bg-gray-300 border border-blue-500 rounded-lg px-6 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-80">
                    Download Surat
                </button>
            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import FooterSection from '@/pages/manage_patient/footer.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DetailRiwayatMedical"
});
</script>
