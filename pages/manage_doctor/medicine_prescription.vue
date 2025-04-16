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
                    Formulir Resep Obat
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <!-- Pasien Section -->
                <div class="mb-6">
                    <h3 class="text-xl text-[#3582d7] font-bold">Pasien</h3>

                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div>
                            <label class="block text-[#656565]">Nama Pasien</label>
                            <input type="text" class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label class="block text-[#656565]">Usia</label>
                                <input type="number" class="w-full border border-[#3582d7] rounded-md p-2">
                            </div>
                            <div>
                                <label class="block text-[#656565]">Jenis Kelamin</label>
                                <select class="w-full border border-[#3582d7] rounded p-2">
                                    <option value="">-- Pilih Jenis Kelamin --</option>
                                    <option>Laki-laki</option>
                                    <option>Perempuan</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[#656565]">Diagnosa</label>
                            <textarea class="w-full border border-[#3582d7] rounded-md p-2 h-20"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Detail Obat Section -->
                <div class="mb-6">
                    <h3 class="text-xl text-[#3582d7] font-bold">Detail Obat</h3>

                    <div v-for="(obat, index) in daftarObat" :key="index"
                        class="grid grid-cols-4 gap-4 mt-4 items-center">
                        <div>
                            <label class="block text-[#656565]">Nama Obat</label>
                            <select v-model="obat.nama" class="w-full border border-[#3582d7] rounded p-2">
                                <option value="">-- Pilih Obat --</option>
                                <option>Obat 1</option>
                                <option>Obat 2</option>
                                <option>Obat 3</option>
                                <option>Obat 4</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[#656565]">Dosis</label>
                            <input v-model="obat.dosis" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#656565]">Instruksi</label>
                            <input v-model="obat.instruksi" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div class="flex justify-center">
                            <button @click="hapusObat(index)" class="text-red-500 text-xl">
                                🗑️
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="grid justify-start items-center mt-6">
                    <button @click="tambahObat"
                        class="bg-white text-[#3582d7] border border-[#3582d7] rounded-md px-6 py-3 font-semibold hover:bg-[#3582d7] hover:text-white mb-3">
                        Tambah Obat
                    </button>
                    <div class="justify-between space-x-5">
                        <button
                            class="bg-white text-[#3582d7] border border-[#3582d7] rounded-md px-6 py-3 font-semibold hover:bg-[#3582d7] hover:text-white mb-3">
                            Simpan Resep
                        </button>
                        <button
                            class="bg-white text-[#3582d7] border border-[#3582d7] rounded-md px-6 py-3 font-semibold hover:bg-[#3582d7] hover:text-white">
                            Reset
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import FooterSection from '@/pages/manage_doctor/footer.vue';

const daftarObat = ref([
    { nama: "", dosis: "", instruksi: "" }
]);

const tambahObat = () => {
    daftarObat.value.push({ nama: "", dosis: "", instruksi: "" });
};

const hapusObat = (index: number) => {
    daftarObat.value.splice(index, 1);
};
</script>
