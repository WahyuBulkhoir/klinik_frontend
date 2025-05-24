<template>
    <div class="relative w-full min-h-screen bg-gradient-to-r from-blue-100 to-blue-500 p-10 mb-10"
        :style="{ fontFamily: 'Poppins' }">
        <h1 class="text-xl font-bold text-center text-white">PATIENT</h1>
        <div class="w-28 h-1 bg-white mt-1 mx-auto mb-10"></div>
        <div class="max-w-4xl mx-auto bg-white shadow-lg text-[#656565] rounded-lg p-10">
            <h2 class="text-2xl font-kaushan-script text-[#282828] text-center"
                :style="{ fontFamily: 'Kaushan Script' }">
                Formulir Data Administrasi dan Rekam Medis Pasien
            </h2>

            <hr class="border-t-2 border-[#3582d7] my-4" />
            <h3 class="text-xl font-bold text-blue-600 mb-2">Jadwal Request</h3>
            <div class="grid grid-cols-3 gap-4 text-gray-700">
                <div>
                    <p class="font-bold">Hari Konsultasi:</p>
                    <p>{{ detail?.jadwal_detail?.hari }}</p>
                </div>
                <div>
                    <p class="font-bold">Tanggal Konsultasi:</p>
                    <p>{{ detail?.jadwal_detail?.tanggal }}</p>
                </div>
                <div>
                    <p class="font-bold">Jam:</p>
                    <p>{{ detail?.jadwal_detail?.jam_mulai }} WIB</p>
                </div>
            </div>

            <hr class="my-4 border-t-2 border-blue-600">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Identitas Pasien</h3>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                    <p class="font-bold">Nama Lengkap:</p>
                    <p>{{ detail?.rekam_medis_detail?.nama_lengkap }}</p>
                </div>
                <div>
                    <p class="font-bold">Tempat Lahir:</p>
                    <p>{{ detail?.rekam_medis_detail?.tempat_lahir }}</p>
                </div>
                <div>
                    <p class="font-bold">Tanggal Lahir:</p>
                    <p>{{ detail?.rekam_medis_detail?.tanggal_lahir }}</p>
                </div>
                <div>
                    <p class="font-bold">Jenis Kelamin:</p>
                    <p>{{ detail?.rekam_medis_detail?.jenis_kelamin }}</p>
                </div>
                <div>
                    <p class="font-bold">Golongan Darah:</p>
                    <p>{{ detail?.rekam_medis_detail?.golongan_darah }}</p>
                </div>
                <div>
                    <p class="font-bold">Nomor HP:</p>
                    <p>{{ detail?.rekam_medis_detail?.no_hp }}</p>
                </div>
                <div>
                    <p class="font-bold">Email:</p>
                    <p>{{ detail?.rekam_medis_detail?.email }}</p>
                </div>
            </div>

            <hr class="my-4 border-t-2 border-blue-600">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Informasi Pembayaran</h3>
            <div class="grid grid-cols-1 gap-4 text-gray-700">
                <div>
                    <p class="font-bold">Jenis Kepesertaan:</p>
                    <p>{{ detail?.rekam_medis_detail?.jenis_kepesertaan }}</p>
                </div>
                <div>
                    <p class="font-bold">Nomor Kartu (jika ada):</p>
                    <p>{{ detail?.rekam_medis_detail?.nomor_kartu }}</p>
                </div>
            </div>

            <hr class="my-4 border-t-2 border-blue-600">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Kontak Darurat</h3>
            <div class="grid grid-cols-3 gap-4 text-gray-700">
                <div>
                    <p class="font-bold">Nama Kontak Darurat:</p>
                    <p>{{ detail?.rekam_medis_detail?.nama_kontak_darurat }}</p>
                </div>
                <div>
                    <p class="font-bold">Hubungan:</p>
                    <p>{{ detail?.rekam_medis_detail?.hubungan_kontak }}</p>
                </div>
                <div>
                    <p class="font-bold">No. HP Kontak Darurat:</p>
                    <p>{{ detail?.rekam_medis_detail?.no_hp_kontak }}</p>
                </div>
            </div>

            <hr class="my-4 border-t-2 border-blue-600">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Riwayat Kesehatan</h3>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                    <p class="font-bold">Riwayat Penyakit:</p>
                    <p>{{ detail?.rekam_medis_detail?.riwayat_penyakit }}</p>
                </div>
                <div>
                    <p class="font-bold">Alergi:</p>
                    <p>{{ detail?.rekam_medis_detail?.alergi_obat_makanan }}</p>
                </div>
                <div>
                    <p class="font-bold">Riwayat Operasi:</p>
                    <p>{{ detail?.rekam_medis_detail?.riwayat_operasi }}</p>
                </div>
                <div>
                    <p class="font-bold">Riwayat Pengobatan:</p>
                    <p>{{ detail?.rekam_medis_detail?.riwayat_pengobatan }}</p>
                </div>
            </div>

            <hr class="my-4 border-t-2 border-blue-600">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Riwayat Kesehatan</h3>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                    <p class="font-bold">Merokok:</p>
                    <p>{{ detail?.rekam_medis_detail?.merokok }}</p>
                </div>
                <div>
                    <p class="font-bold">Konsumsi Alkohol:</p>
                    <p>{{ detail?.rekam_medis_detail?.konsumsi_alkohol }}</p>
                </div>
            </div>

            <div class="flex items-center gap-10 justify-center mt-10">
                <button @click="onAccept" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    onclick="window.location.href='/manage_doctor'">
                    Accept
                </button>
                <button @click="onCancel" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    onclick="window.location.href='/manage_doctor'">Cancel</button>
            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import FooterSection from '@/pages/manage_doctor/footer.vue'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const route = useRoute()
const id = route.query.id as string

const detail = ref<any>(null)

const fetchDetail = async () => {
    try {
        const res = await useAuthenticatedFetch(
            `http://localhost:8000/api/meeting-request/list-dokter/?id=${id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const response = await res.json()
        console.log('API Response:', response)
        detail.value = response.data[0]
    } catch (error) {
        console.error('Failed to fetch detail:', error)
    }
}

const updateStatus = async (status: string) => {
    try {
        const response = await useAuthenticatedFetch(
            'http://localhost:8000/api/meeting-request/update-status/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    meeting_id: id,
                    status: status
                })
            }
        )

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || 'Failed to update status')
        }

        console.log('Status berhasil diperbarui:', data)
    } catch (error) {
        console.error('Error:', error)
    }
}

const onAccept = () => updateStatus('approved')
const onCancel = () => updateStatus('rejected')
onMounted(fetchDetail)
</script>
