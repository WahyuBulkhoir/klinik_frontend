<template>
    <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] min-h-screen flex flex-col items-center p-10"
        :style="{ fontFamily: 'Poppins' }">
        <div class="w-full max-w-6xl p-6">
            <h1 class="text-xl font-bold text-center text-white">PATIENT</h1>
            <div class="w-28 h-1 bg-white mt-1 mx-auto mb-10"></div>

            <!-- Form Container -->
            <div class="bg-white shadow-lg border-2 border-[#3582d7] rounded-lg mt-6 p-6">
                <h2 class="text-2xl font-kaushan-script text-[#282828] text-center"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Formulir Anamnesis Pasien
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <!-- Identitas Pasien -->
                <div class="space-y-4 font-normal">
                    <h3 class="text-xl font-bold text-[#3582d7]">Keluhan Utama Pasien</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block">Keluhan Utama</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <!-- Pemeriksaan Tanda Vital -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Penyakit Saat ini</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Sejak Kapan Keluhan Dirasakan ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                        <div>
                            <label class="block ">Faktor yang Meringankan / Memperburuk ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Penyakit Sebelumnya</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block mb-1 text-gray-700 font-medium">Pernah Mengalami Penyakit Serupa
                                ?</label>
                            <select class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Penyakit Kronis yang Dimiliki ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Penyakit Keluarga</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block mb-1 text-gray-700 font-medium">Ada Penyakit Serupa di Keluarga
                                ?</label>
                            <select class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Penyakit yang Diderita Keluarga ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Pengobatan</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Obat yang sedang Dikonsumsi ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Sosial dan Kebiasaan ?</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Merokok ?</label>
                            <select class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Konsumsi Alkohol ?</label>
                            <select class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Pola Makan ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                        <div>
                            <label class="block ">Aktivitas Fisik ?</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Tindakan Dokter</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Rencana Diagnosis</label>
                            <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                        <div>
                            <label class="block ">Tindakan Medis Selanjutnya</label>
                            <select class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Pemberian Resep Obat</option>
                                <option value="tidak">Tindakan Operasi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end space-x-4 mt-6">
                    <button class="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
                    <NuxtLink :to="'/manage_doctor/detail_anamnesis'"
                        class="text-black cursor-pointer hover:text-white p-3 bg-blue-600 rounded-md">
                        Simpan Data
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import FooterSection from '@/pages/manage_doctor/footer.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Desktop"
});
</script>
