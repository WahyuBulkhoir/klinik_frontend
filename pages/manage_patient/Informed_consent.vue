<template>
    <div
        class="relative w-full max-w-6xl mx-auto p-6 text-gray-600 font-rubik shadow-lg border-2 border-green-500 rounded-lg">
        <!-- Header -->
        <div
            class="bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-kaushan-script py-3 px-6 rounded-t-lg">
            Surat Persetujuan Tindakan Medis
        </div>

        <!-- Tanggal Pemeriksaan -->
        <div class="mt-4">
            <b class="block">Tanggal Pemeriksaan :</b>
            <span>Hari / Bulan / Tahun</span>
        </div>

        <!-- Informasi Judul dan Deskripsi -->
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

        <!-- Informasi Dokter -->
        <div class="mt-4">
            <b>Dokter :</b>
            <span class="ml-2">dr. Wahyu Bulkhoir</span>
        </div>

        <!-- Informasi Persetujuan -->
        <div class="mt-6 text-red-500">
            <p>Berikut adalah surat persetujuan tindakan medis untuk Anda tandatangani sebelum melanjutkan ke proses
                selanjutnya.</p>
        </div>

        <!-- Tombol Download Surat -->
        <div class="mt-6">
            <button
                class="w-64 bg-gray-300 border border-blue-500 rounded-lg px-6 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-80">
                Download Surat
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Frame"
});
</script>
