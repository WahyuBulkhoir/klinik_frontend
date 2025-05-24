<template>
    <div class="relative w-full max-w-6xl mx-auto text-gray-600 font-rubik space-y-10 p-6 mb-20">
        <div class="relative w-full max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-green-500">
            <div class="bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl p-4 rounded-t-lg mb-6">
                Detail Resep Obat
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <b>Nama Pasien:</b>
                    <div class="border-b border-gray-300 py-2">{{ prescription[0]?.nama_pasien }}</div>
                </div>
                <div>
                    <b>Dokter:</b>
                    <div class="border-b border-gray-300 py-2">{{ prescription[0]?.nama_dokter }}</div>
                </div>
                <div>
                    <b>Tanggal:</b>
                    <div class="border-b border-gray-300 py-2">{{ formatDate(prescription[0]?.created_at) }}</div>
                </div>
                <div>
                    <b>Diagnosa:</b>
                    <div class="border-b border-gray-300 py-2">{{ prescription[0]?.diagnosa }}</div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">Daftar Obat:</h3>
                <div class="border rounded-lg overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 py-2 text-left">Nama Obat</th>
                                <th class="px-4 py-2 text-left">Dosis</th>
                                <th class="px-4 py-2 text-left">Instruksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in prescription" :key="index" class="border-t">
                                <td class="px-4 py-2">{{ item.nama_obat_detail }}</td>
                                <td class="px-4 py-2">{{ item.dosis }}</td>
                                <td class="px-4 py-2">{{ item.instruksi }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-if="persetujuanTindakan" class="bg-white border-2 border-green-500 shadow-lg rounded-lg p-6">
            <div
                class="bg-gradient-to-r from-green-500 to-blue-500 text-white text-2xl font-kaushan-script py-3 px-6 rounded-t-lg">
                Surat Persetujuan Tindakan Medis
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                    <label class="font-semibold">Nama Pasien:</label>
                    <p class="mt-1">{{ persetujuanTindakan.nama_pasien || '-' }}</p>
                </div>
                <div>
                    <label class="font-semibold">Dokter Penanggung Jawab:</label>
                    <p class="mt-1">{{ persetujuanTindakan.dokter_penanggungjawab || '-' }}</p>
                </div>
                <div>
                    <label class="font-semibold">Jenis Tindakan:</label>
                    <p class="mt-1">{{ persetujuanTindakan.jenis_tindakan || '-' }}</p>
                </div>
                <div>
                    <label class="font-semibold">Tanggal Persetujuan:</label>
                    <p class="mt-1">{{ formatDate(persetujuanTindakan.tanggal_persetujuan) || '-' }}</p>
                </div>
            </div>
            <div class="mt-4">
                <span class="px-4 py-2 rounded-full font-medium" :class="{
                    'bg-yellow-100 text-yellow-800': persetujuanTindakan.status === 'menunggu',
                    'bg-green-100 text-green-800': persetujuanTindakan.status === 'disetujui',
                    'bg-red-100 text-red-800': persetujuanTindakan.status === 'ditolak'
                }">
                    Status: {{ getStatusText(persetujuanTindakan.status) }}
                </span>
            </div>
            <div class="mt-6 space-y-4">
                <div v-if="persetujuanTindakan.surat_persetujuan && !persetujuanTindakan.surat_ttd">
                    <button @click="downloadConsent(persetujuanTindakan.id)"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                        <i class="fas fa-download mr-2"></i>Download Surat Persetujuan
                    </button>

                    <p class="mt-2 text-sm text-red-500">
                        Silakan download, tanda tangani, dan unggah kembali surat persetujuan
                    </p>
                </div>
                <div v-if="persetujuanTindakan.status === 'menunggu'">
                    <form @submit.prevent="uploadSignedConsent" class="space-y-4 mt-4">
                        <div>
                            <label class="block font-medium mb-1">Unggah Surat yang Sudah Ditandatangani:</label>
                            <input type="file" ref="signedConsentFile" accept=".pdf" class="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100" required @change="error = null" Reset error saat file dipilih>
                            <p v-if="error" class="mt-2 text-sm text-red-500">{{ error }}</p>
                        </div>
                        <button type="submit"
                            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
                            :disabled="loading">
                            <i class="fas fa-upload mr-2"></i>
                            <span v-if="!loading">Unggah Surat Tandatangan</span>
                            <span v-else>Mengunggah...</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div v-else class="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
            <p class="text-gray-500">Tidak ada persetujuan tindakan medis untuk konsultasi ini.</p>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import FooterSection from '@/pages/manage_patient/footer.vue'

const route = useRoute()
const prescription = ref<any>({})
const persetujuanTindakan = ref<any>(null)
const loading = ref<boolean>(true)
const meetingRequestId = route.query.meeting_request_id as string
const error = ref<string | null>(null)
const signedConsentFile = ref<HTMLInputElement | null>(null)

const formatDate = (dateString: string): string => {
    if (!dateString) return '-'
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

const getStatusText = (status: string): string => {
    const statusMap: Record<string, string> = {
        menunggu: 'Menunggu Persetujuan',
        disetujui: 'Disetujui',
        ditolak: 'Ditolak',
    }
    return statusMap[status] || status
}

const fetchPrescriptionDetail = async () => {
    try {
        const response = await useAuthenticatedFetch(
            `http://127.0.0.1:8000/api/resep-obat/meeting-request/${meetingRequestId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        if (!response.ok) {
            throw new Error('Gagal mengambil data resep.')
        }

        const data = await response.json()
        prescription.value = data
    } catch (err) {
        console.error(err)
        error.value = 'Gagal mengambil data resep.'
    }
}

const fetchPersetujuanTindakan = async () => {
    try {
        const response = await useAuthenticatedFetch(
            `http://127.0.0.1:8000/api/medical-consent/by-meeting/${meetingRequestId}/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || 'Gagal mengambil data persetujuan')
        }

        if (data.success) {
            persetujuanTindakan.value = data.data
            console.log('Data persetujuan:', data.data)
        } else {
            persetujuanTindakan.value = null
        }
    } catch (err) {
        console.error('Error:', err)
        error.value = (err as Error).message || 'Gagal memuat data persetujuan'
        persetujuanTindakan.value = null
    }
}

const downloadConsent = async (id: number) => {
    try {
        const response = await useAuthenticatedFetch(
            `http://127.0.0.1:8000/api/medical-consent/${id}/download/`
        )

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.error || 'Gagal mengunduh dokumen')
        }

        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `persetujuan_tindakan_${id}.pdf`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        setTimeout(() => {
            window.URL.revokeObjectURL(url)
        }, 100)
    } catch (error) {
        console.error('Download error:', error)
        alert((error as Error).message || 'Gagal mengunduh dokumen')
    }
}

const uploadSignedConsent = async () => {
    if (!signedConsentFile.value?.files?.length) {
        alert('Pilih file terlebih dahulu');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('surat_ttd', signedConsentFile.value.files[0]);
        formData.append('persetujuan_id', persetujuanTindakan.value.id);

        const response = await useAuthenticatedFetch(
            'http://127.0.0.1:8000/api/upload-signed-consent/',
            {
                method: 'POST',
                body: formData,
            });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Upload gagal');
        }

        alert('File berhasil diunggah!');
        await fetchPersetujuanTindakan();

    } catch (err) {
        console.error('Error:', err);
        alert(`Gagal: ${(err as Error).message}`);
    }
};

onMounted(async () => {
    if (meetingRequestId) {
        await Promise.all([
            fetchPrescriptionDetail(),
            fetchPersetujuanTindakan(),
        ])
    } else {
        error.value = 'ID meeting tidak ditemukan di URL.'
    }
    loading.value = false
})
</script>
