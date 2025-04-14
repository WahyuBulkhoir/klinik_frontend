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
                    Surat Persetujuan Tindakan Medis
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <!-- Data Pasien -->
                <div>
                    <h3 class="text-lg font-bold text-[#3582d7]">Data Pasien</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-[#282828]">Nama Pasien</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#282828]">Tanggal Lahir</label>
                            <input type="date" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#282828]">Nama Keluarga</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#282828]">Hubungan dengan Pasien</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                    </div>
                </div>

                <!-- Detail Operasi -->
                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Detail Operasi</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-[#282828]">Jenis Tindakan</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#282828]">Dokter yang Bertanggung Jawab</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                    </div>
                </div>

                <!-- Pernyataan Persetujuan -->
                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Pernyataan Persetujuan</h3>
                    <p class="text-[#f03118] italic">
                        Dengan ini saya menyatakan bahwa saya telah menerima informasi mengenai tindakan medis yang akan
                        dilakukan terhadap pasien dan saya memberikan persetujuan untuk pelaksanaan tindakan tersebut.
                    </p>
                </div>

                <!-- Data Persetujuan -->
                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Tanggal Persetujuan</h3>
                    <input type="date" class="w-full border border-[#3582d7] rounded-md p-2">
                </div>

                <!-- Tanda Tangan -->
                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Tanda Tangan Keluarga (dengan materai)</h3>
                    <input type="file" class="w-full border border-[#3582d7] rounded-md p-2">
                </div>

                <!-- Buttons -->
                <div class="flex justify-center space-x-4 mt-6">
                    <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        onclick="window.location.href='/manage_doctor'">Simpan Persetujuan</button>
                    <button class="bg-gray-400 text-white px-6 py-2 rounded-md shadow-md">Kembali</button>
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
import { defineComponent } from 'vue'

export default defineComponent({
    name: "PatientForm"
})
</script>