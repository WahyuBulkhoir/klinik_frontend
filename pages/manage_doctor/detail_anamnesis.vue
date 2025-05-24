<template>
    <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] min-h-screen flex flex-col items-center p-10"
        :style="{ fontFamily: 'Poppins' }">
        <div class="w-full max-w-6xl p-6">
            <h1 class="text-xl font-bold text-center text-white">PATIENT</h1>
            <div class="w-28 h-1 bg-white mt-1 mx-auto mb-10"></div>

            <div class="bg-white shadow-lg border-2 border-[#3582d7] rounded-lg mt-6 p-6">
                <h2 class="text-2xl font-kaushan-script text-[#282828] text-center"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    formDataulir Anamnesis Pasien
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <div class="space-y-4 font-normal">
                    <h3 class="text-xl font-bold text-[#3582d7]">Keluhan Utama Pasien</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block">Keluhan Utama</label>
                            <textarea v-model="formData.keluhan_utama"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Penyakit Saat ini</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Sejak Kapan Keluhan Dirasakan ?</label>
                            <textarea v-model="formData.sejak_kapan_keluhan"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                        <div>
                            <label class="block ">Faktor yang Meringankan / Memperburuk ?</label>
                            <textarea v-model="formData.faktor_meringankan_memperburuk"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
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
                            <select v-model="formData.pernah_mengalami_serupa"
                                class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Penyakit Kronis yang Dimiliki ?</label>
                            <textarea v-model="formData.penyakit_kronis"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
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
                            <select v-model="formData.ada_penyakit_keluarga"
                                class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Penyakit yang Diderita Keluarga ?</label>
                            <textarea v-model="formData.penyakit_keluarga"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Pengobatan</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Obat yang sedang Dikonsumsi ?</label>
                            <textarea v-model="formData.obat_dikonsumsi"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Riwayat Sosial dan Kebiasaan ?</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Merokok ?</label>
                            <select v-model="formData.merokok" class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Konsumsi Alkohol ?</label>
                            <select v-model="formData.alkohol" class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="iya">Iya</option>
                                <option value="tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block ">Pola Makan ?</label>
                            <textarea v-model="formData.pola_makan"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                        <div>
                            <label class="block ">Aktivitas Fisik ?</label>
                            <textarea v-model="formData.aktivitas_fisik"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Tindakan Dokter</h3>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label class="block ">Rencana Diagnosis</label>
                            <textarea v-model="formData.rencana_diagnosis"
                                class="w-full border border-[#3582d7] rounded p-2"></textarea>
                        </div>
                        <div>
                            <label class="block ">Tindakan Medis Selanjutnya</label>
                            <select v-model="formData.tindakan_medis_selanjutnya"
                                class="w-full p-2 border border-[#3582d7] rounded">
                                <option value="">Pilih</option>
                                <option value="resep_obat">Pemberian Resep Obat</option>
                                <option value="operasi">Tindakan Operasi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end space-x-4 mt-6">
                    <button class="bg-gray-400 text-white px-4 py-2 rounded" @click="resetformData">Reset</button>
                    <button @click="submitAnamnesis"
                        class="text-white cursor-pointer hover:text-white p-3 bg-blue-600 rounded-md">
                        Simpan Data
                    </button>
                </div>
            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>


<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import FooterSection from '@/pages/manage_doctor/footer.vue'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const router = useRouter()
const route = useRoute()
const pemeriksaanAwalId = route.query.id
const pemeriksaanLanjutanId = route.query.pemeriksaan_lanjutan_id

const resetformData = () => {
    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
        formData[key] = ''
    })
}

const formData = reactive({
    keluhan_utama: '',
    sejak_kapan_keluhan: '',
    faktor_meringankan_memperburuk: '',
    pernah_mengalami_serupa: '',
    penyakit_kronis: '',
    ada_penyakit_keluarga: '',
    penyakit_keluarga: '',
    obat_dikonsumsi: '',
    merokok: '',
    alkohol: '',
    pola_makan: '',
    aktivitas_fisik: '',
    rencana_diagnosis: '',
    tindakan_medis_selanjutnya: '',
})

const submitAnamnesis = async () => {
    try {
        if (!formData.tindakan_medis_selanjutnya) {
            alert('Silakan pilih tindakan medis selanjutnya')
            return
        }

        const response = await useAuthenticatedFetch(
            'http://127.0.0.1:8000/api/anamnesis-check/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    pemeriksaan_awal_id: pemeriksaanAwalId
                }),
            }
        )

        const responseData = await response.json()

        if (!response.ok) {
            console.error('Gagal:', responseData)
            alert(responseData.error || 'Gagal menyimpan data anamnesis')
            return
        }

        alert('Data anamnesis berhasil disimpan!')

        if (formData.tindakan_medis_selanjutnya === 'resep_obat') {
            router.push(`/manage_doctor/medicine_prescription?id=${pemeriksaanAwalId}`)
        } else if (formData.tindakan_medis_selanjutnya === 'operasi') {
            if (responseData.data && responseData.data.id) {
                await router.push({
                    path: '/manage_doctor/detail_medical_action',
                    query: {
                        pemeriksaan_lanjutan_id: responseData.data.id,
                        pemeriksaan_awal_id: pemeriksaanAwalId
                    }
                })
            } else {
                console.error('Struktur response tidak valid:', responseData)
                throw new Error('ID pemeriksaan lanjutan tidak ditemukan dalam respons.data')
            }
        }
    } catch (error) {
        console.error('Error:', error)
        alert((error as Error).message || 'Terjadi kesalahan saat menyimpan data')
        router.push('/manage_doctor')
    }
}

onMounted(() => {
    console.log('Query params:', route.query)
    console.log('Pemeriksaan Lanjutan ID:', route.query.pemeriksaan_lanjutan_id)
})
</script>
