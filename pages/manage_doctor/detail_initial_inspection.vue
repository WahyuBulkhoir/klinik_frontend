<template>
    <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] min-h-screen flex flex-col items-center p-10"
        :style="{ fontFamily: 'Poppins' }">
        <div class="w-full max-w-6xl p-6">
            <h1 class="text-xl font-bold text-center text-white">PATIENT</h1>
            <div class="w-28 h-1 bg-white mt-1 mx-auto mb-10"></div>

            <div class="bg-white shadow-lg border-2 border-[#3582d7] rounded-lg mt-6 p-6">
                <h2 class="text-2xl font-kaushan-script text-[#282828] text-center"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Formulir Pemeriksaan Awal Pasien
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <div class="space-y-4 font-normal">
                    <h3 class="text-xl font-bold text-[#3582d7]">Identitas Pasien</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block font-semibold">Nama Pasien</label>
                            <input type="text" v-model="formData.nama_pasien"
                                class="w-full border border-[#3582d7] rounded p-2 bg-gray-100 cursor-not-allowed"
                                readonly />
                        </div>
                        <div>
                            <label class="block font-semibold">Nomor Rekam Medis</label>
                            <input type="text" v-model="formData.nomor_rekam_medis"
                                class="w-full border border-[#3582d7] rounded p-2 bg-gray-100 cursor-not-allowed"
                                readonly />
                        </div>
                        <div>
                            <label class="block font-semibold">Usia</label>
                            <input type="number" v-model="formData.usia"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Jenis Kelamin</label>
                            <input type="text" v-model="formData.jenis_kelamin"
                                class="w-full border border-[#3582d7] rounded p-2 bg-gray-100 cursor-not-allowed"
                                readonly />
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Pemeriksaan Tanda Vital</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block font-semibold">Tekanan Darah (mmHg)</label>
                            <input type="text" v-model="formData.tekanan_darah"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Suhu Tubuh (°C)</label>
                            <input type="text" v-model="formData.suhu_tubuh"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Denyut Nadi (bpm)</label>
                            <input type="text" v-model="formData.denyut_nadi"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Laju Pernapasan (rpm)</label>
                            <input type="text" v-model="formData.laju_pernapasan"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Tinggi Badan (cm)</label>
                            <input type="text" v-model="formData.tinggi_badan"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                        <div>
                            <label class="block font-semibold">Berat Badan (kg)</label>
                            <input type="text" v-model="formData.berat_badan"
                                class="w-full border border-[#3582d7] rounded p-2" />
                        </div>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Kondisi Umum Pasien</h3>
                    <div>
                        <label class="block font-semibold">Tingkat Kesadaran</label>
                        <select v-model="formData.tingkat_kesadaran" class="w-full border border-[#3582d7] rounded p-2">
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
                        <textarea v-model="formData.keluhan_utama"
                            class="w-full border border-[#3582d7] rounded p-2"></textarea>
                    </div>
                    <div>
                        <label class="block font-semibold">Hasil Pemeriksaan Awal</label>
                        <textarea v-model="formData.hasil_pemeriksaan_awal"
                            class="w-full border border-[#3582d7] rounded p-2"></textarea>
                    </div>
                </div>

                <hr class="border-t-2 border-[#3582d7] my-6" />

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#3582d7]">Rencana Tindakan</h3>
                    <div>
                        <label class="block font-semibold">Tindakan yang di Rekomendasikan</label>
                        <select v-model="formData.tindakan_rekomendasi"
                            class="form-select w-full border border-[#3582d7] rounded p-2">
                            <option disabled value="">Pilih tindakan</option>
                            <option>Anamnesis (Pemeriksaan Lanjutan)</option>
                            <option>Pemberian Obat</option>
                        </select>

                    </div>
                    <div>
                        <label class="block font-semibold">Catatan Tambahan</label>
                        <textarea v-model="formData.catatan_tambahan"
                            class="w-full border border-[#3582d7] rounded p-2"></textarea>
                    </div>

                    <div class="flex justify-end space-x-4 mt-6">
                        <button type="button" class="bg-gray-400 text-white px-4 py-2 rounded"
                            @click="resetForm">Reset</button>
                        <button type="button" @click="submitForm" :disabled="isAlreadyFilled"
                            class="text-black cursor-pointer hover:text-white p-3 bg-blue-600 rounded-md disabled:opacity-50">
                            Simpan Data
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterSection id="footer" />
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FooterSection from '@/pages/manage_doctor/footer.vue'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const router = useRouter()
const route = useRoute()
const isAlreadyFilled = ref(false)

let meetingId = route.query.id as string

const resetForm = () => {
    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
        formData[key] = ''
    })
}

const formData = reactive({
    nama_pasien: '',
    nomor_rekam_medis: '',
    usia: '',
    jenis_kelamin: '',
    tekanan_darah: '',
    suhu_tubuh: '',
    denyut_nadi: '',
    laju_pernapasan: '',
    tinggi_badan: '',
    berat_badan: '',
    tingkat_kesadaran: '',
    keluhan_utama: '',
    hasil_pemeriksaan_awal: '',
    tindakan_rekomendasi: '',
    catatan_tambahan: ''
})

const fetchInitialData = async () => {
    try {
        const res = await useAuthenticatedFetch(`http://127.0.0.1:8000/api/initial-check/from-meeting/${meetingId}/`, {
            method: 'GET'
        })

        if (res.status === 200) {
            const result = await res.json()
            const data = result.data

            if (data && data.is_filled) {
                alert("Formulir sudah pernah diisi untuk pasien ini.")
                router.push("/manage_doctor")
                return
            }

            formData.nama_pasien = data?.nama_lengkap || '-'
            formData.jenis_kelamin = data?.jenis_kelamin || '-'
            formData.nomor_rekam_medis = data?.nomor_rekam_medis || '-'
        } else {
            const err = await res.json()
            console.error("Gagal mengambil data:", err)
        }
    } catch (error) {
        console.error("Error fetch initial data:", error)
    }
}

const checkIfAlreadyFilled = async () => {
    try {
        const res = await useAuthenticatedFetch(`http://127.0.0.1:8000/api/initial-check/${meetingId}/`, {
            method: 'GET'
        })

        if (res.status === 404) {
            isAlreadyFilled.value = false
        } else if (res.ok) {
            isAlreadyFilled.value = true
        } else {
            console.warn("Gagal mengecek status form:", await res.json())
        }
    } catch (error) {
        console.error("Error saat cek form:", error)
    }
}

onMounted(() => {
    fetchInitialData()
    checkIfAlreadyFilled()
})

const submitForm = async () => {
    if (isAlreadyFilled.value) {
        alert("Kamu sudah pernah mengisi form Pemeriksaan Awal Pasien untuk meeting ini.")
        return
    }

    try {
        const payload = {
            meeting_request_id: meetingId,
            usia: formData.usia,
            tekanan_darah: formData.tekanan_darah,
            suhu_tubuh: formData.suhu_tubuh,
            denyut_nadi: formData.denyut_nadi,
            laju_pernapasan: formData.laju_pernapasan,
            tinggi_badan: formData.tinggi_badan,
            berat_badan: formData.berat_badan,
            tingkat_kesadaran: formData.tingkat_kesadaran,
            keluhan_utama: formData.keluhan_utama,
            hasil_pemeriksaan_awal: formData.hasil_pemeriksaan_awal,
            tindakan_rekomendasi: formData.tindakan_rekomendasi,
            catatan_tambahan: formData.catatan_tambahan
        }

        console.log('Payload yang dikirim:', payload)

        const res = await useAuthenticatedFetch('http://127.0.0.1:8000/api/initial-check/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const result = await res.json()
        console.log('Hasil response:', result)

        if (!res.ok) {
            console.error('Error detail:', result.errors || result)
            throw new Error('Gagal mengirim data')
        }

        alert('Data berhasil dikirim!')
        const pemeriksaanId = result.id

        if (formData.tindakan_rekomendasi === 'Anamnesis (Pemeriksaan Lanjutan)') {
            router.push(`/manage_doctor/detail_anamnesis?id=${pemeriksaanId}`)
        } else if (formData.tindakan_rekomendasi === 'Pemberian Obat') {
            router.push(`/manage_doctor/medicine_prescription?id=${pemeriksaanId}`)
        }

    } catch (error) {
        alert('Kamu sudah pernah mengisi form Pemeriksaan Awal Pasien untuk meeting ini.')
        router.push('/manage_doctor/detail_anamnesis')
        console.error('Catch error:', error)
    }
}

watch(
    () => route.query.id,
    (newMeetingId) => {
        if (newMeetingId) {
            meetingId = newMeetingId as string
            fetchInitialData()
        } else {
            console.warn("meetingId belum tersedia")
        }
    },
    { immediate: true }
)
</script>
