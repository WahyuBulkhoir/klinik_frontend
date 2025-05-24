<template>
    <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] min-h-screen flex flex-col items-center p-10"
        :style="{ fontFamily: 'Poppins' }">
        <div class="w-full max-w-6xl p-6">
            <h1 class="text-xl font-bold text-center text-white">MEDICAL CONSENT FORM</h1>
            <div class="w-28 h-1 bg-white mt-1 mx-auto mb-10"></div>

            <div class="bg-white shadow-lg border-2 border-[#3582d7] rounded-lg mt-6 p-6">
                <h2 class="text-2xl font-kaushan-script text-[#282828] text-center"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Surat Persetujuan Tindakan Medis
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <div>
                    <h3 class="text-lg font-bold text-[#3582d7]">Data Pasien</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-[#282828]">Nama Pasien</label>
                            <input v-model="formData.nama_pasien" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2" disabled>
                        </div>
                        <div>
                            <label class="block text-[#282828]">Tanggal Lahir</label>
                            <input v-model="formData.tanggal_lahir" type="date"
                                class="w-full border border-[#3582d7] rounded-md p-2" disabled>
                        </div>
                        <div>
                            <label class="block text-[#282828]">Nama Keluarga</label>
                            <input v-model="formData.nama_keluarga" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#282828]">Hubungan dengan Pasien</label>
                            <input v-model="formData.hubungan_dengan_pasien" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <h3 class="text-lg font-bold text-[#3582d7]">Informasi Pemeriksaan</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                            <label class="block text-[#282828]">ID Pemeriksaan Awal</label>
                            <input v-model="formData.pemeriksaan_awal_id" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2 bg-gray-100" readonly>
                        </div>
                        <div>
                            <label class="block text-[#282828]">ID Pemeriksaan Lanjutan</label>
                            <input v-model="formData.pemeriksaan_lanjutan_id" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2 bg-gray-100" readonly>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Detail Operasi</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-[#282828]">Jenis Tindakan</label>
                            <input v-model="formData.jenis_tindakan" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2">
                        </div>
                        <div>
                            <label class="block text-[#282828]">Dokter yang Bertanggung Jawab</label>
                            <input v-model="formData.dokter_penanggungjawab" type="text"
                                class="w-full border border-[#3582d7] rounded-md p-2" disabled>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Pernyataan Persetujuan</h3>
                    <p class="text-[#f03118] italic">
                        Dengan ini saya menyatakan bahwa saya telah menerima informasi mengenai tindakan medis yang akan
                        dilakukan terhadap pasien dan saya memberikan persetujuan untuk pelaksanaan tindakan tersebut.
                    </p>
                </div>

                <div>
                    <h3 class="text-lg font-bold text-[#3582d7] mt-3">Tanggal Persetujuan</h3>
                    <input v-model="formData.tanggal_persetujuan" type="date"
                        class="w-full border border-[#3582d7] rounded-md p-2">
                </div>

                <div class="flex justify-center space-x-4 mt-6">
                    <button @click="submitConsent" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Simpan Persetujuan
                    </button>
                    <button @click="goBack" class="bg-gray-400 text-white px-6 py-2 rounded-md shadow-md">Kembali
                    </button>
                </div>
            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import FooterSection from '@/pages/manage_doctor/footer.vue'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const router = useRouter()
const route = useRoute()
const loading = ref(true)
const error = ref('')

const pemeriksaanLanjutanId = route.query.pemeriksaan_lanjutan_id
const pemeriksaanAwalId = route.query.pemeriksaan_awal_id

const formData = reactive({
    pemeriksaan_awal_id: pemeriksaanAwalId || '',
    pemeriksaan_lanjutan_id: pemeriksaanLanjutanId || '',
    nama_pasien: '',
    tanggal_lahir: '',
    nama_keluarga: '',
    hubungan_dengan_pasien: '',
    jenis_tindakan: '',
    dokter_penanggungjawab: '',
    tanggal_persetujuan: new Date().toISOString().split('T')[0],
    status: 'menunggu'
})

const goBack = () => {
    router.go(-1)
}

const fetchPatientData = async () => {
    try {
        loading.value = true
        error.value = ''

        if (!pemeriksaanLanjutanId) {
            throw new Error('ID Pemeriksaan Lanjutan tidak ditemukan')
        }

        const response = await useAuthenticatedFetch(
            `http://127.0.0.1:8000/api/medical-consent/from-anamnesis/${pemeriksaanLanjutanId}/`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || 'Gagal memuat data')
        }

        if (data.success && data.data) {
            formData.nama_pasien = data.data.pasien.nama_pasien || ''
            formData.tanggal_lahir = data.data.pasien.tanggal_lahir || ''
            formData.dokter_penanggungjawab = data.data.dokter.nama || ''
            formData.pemeriksaan_awal_id = data.data.pemeriksaan_awal_id || ''
            formData.pemeriksaan_lanjutan_id = data.data.pemeriksaan_lanjutan_id || ''
        }

    } catch (err) {
        error.value = (err as Error).message || 'Gagal memuat data'
        console.error('Error:', err)
    } finally {
        loading.value = false
    }
}

const submitConsent = async () => {
    try {
        error.value = ''

        const requiredFields = {
            'nama_keluarga': 'Nama keluarga',
            'hubungan_dengan_pasien': 'Hubungan dengan pasien',
            'jenis_tindakan': 'Jenis tindakan',
            'tanggal_persetujuan': 'Tanggal persetujuan'
        }

        const missingFields = Object.entries(requiredFields)
            .filter(([field]) => !formData[field as keyof typeof formData])
            .map(([_, name]) => name)

        if (missingFields.length > 0) {
            throw new Error(`Harap isi field berikut: ${missingFields.join(', ')}`)
        }

        const payload = {
            nama_keluarga: formData.nama_keluarga,
            hubungan_dengan_pasien: formData.hubungan_dengan_pasien,
            jenis_tindakan: formData.jenis_tindakan,
            tanggal_persetujuan: formData.tanggal_persetujuan
        }

        const response = await useAuthenticatedFetch(
            `http://127.0.0.1:8000/api/medical-consent/${pemeriksaanLanjutanId}/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        )

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || 'Gagal menyimpan persetujuan')
        }

        alert('Persetujuan berhasil dibuat! Pasien perlu menandatangani dokumen.')
        router.push('/manage_doctor')

    } catch (err) {
        error.value = (err as Error).message || 'Terjadi kesalahan saat menyimpan'
        console.error('Submit error:', err)
    }
}

onMounted(() => {
    if (!pemeriksaanLanjutanId || !pemeriksaanAwalId) {
        error.value = 'Parameter URL tidak lengkap'
        router.push('/manage_doctor')
        return
    }

    fetchPatientData()
})
</script>

<style scoped>
input:disabled,
textarea:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
}
</style>
