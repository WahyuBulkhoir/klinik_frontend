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
                    Formulir Pemeriksaan Awal Pasien
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <!-- Identitas Pasien -->
                <div class="space-y-4 font-normal">
                    <h3 class="text-xl font-bold text-[#3582d7]">Identitas Pasien</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold">Nama Pasien</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Nomor Rekam Medis</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Usia</label>
                            <input type="number" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Jenis Kelamin</label>
                            <select class="w-full border border-[#3582d7] rounded p-2">
                                <option value="">-- Pilih Jenis Kelamin --</option>
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <!-- Pemeriksaan Tanda Vital -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Pemeriksaan Tanda Vital</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block font-semibold">Tekanan Darah (mmHg)</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Suhu Tubuh (°C)</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Denyut Nadi (bpm)</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Laju Pernapasan (rpm)</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Tinggi Badan (cm)</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Berat Badan (kg)</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <!-- Kondisi Umum Pasien -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Kondisi Umum Pasien</h3>
                    <div>
                        <label class="block font-semibold">Tingkat Kesadaran</label>
                        <select class="w-full border border-[#3582d7] rounded p-2">
                            <option value="">-- Pilih Tingkat Kesadaran --</option>
                            <option>Compos Mentis (Sadar)</option>
                            <option>Apatis</option>
                            <option>Delirium</option>
                            <option>Somnolen (Letargi, Obtundasi, Hipersomnia)</option>
                            <option>Stupor</option>
                            <option>Semi Koma</option>
                            <option>Koma</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-semibold">Keluhan Utama</label>
                        <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                    </div>
                    <div>
                        <label class="block font-semibold">Hasil Pemeriksaan Awal</label>
                        <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <!-- Rencana Tindakan -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Rencana Tindakan</h3>
                    <div>
                        <label class="block font-semibold">Tindakan yang di Rekomendasikan</label>
                        <select class="w-full border border-[#3582d7] rounded p-2">
                            <option value="">-- Pilih Tindakan --</option>
                            <option>Anamnesis (Pemeriksaan Lanjutan)</option>
                            <option>Pemberian Obat</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-semibold">Catatan Tambahan</label>
                        <textarea class="w-full border border-[#3582d7] rounded p-2"></textarea>
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
