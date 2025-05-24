<template>
    <div class="bg-gradient-to-r from-[#eff5fc] to-[#3582d7] min-h-screen flex flex-col items-center p-10"
        :style="{ fontFamily: 'Poppins' }">
        <div class="w-full max-w-6xl p-6">
            <h1 class="text-xl font-bold text-center text-white">PATIENT</h1>
            <div class="w-28 h-1 bg-white mt-1 mx-auto mb-10"></div>

            <div class="bg-white shadow-lg border-2 border-[#3582d7] rounded-lg mt-6 p-6">
                <h2 class="text-2xl font-kaushan-script text-[#282828] text-center"
                    :style="{ fontFamily: 'Kaushan Script' }">
                    Formulir Resep Obat
                </h2>
                <hr class="border-t-2 border-[#3582d7] my-4" />

                <div class="mb-6">
                    <h3 class="text-xl text-[#3582d7] font-bold">Pasien</h3>

                    <div class="grid grid-cols-1 gap-4 mt-4">
                        <div>
                            <label class="block text-[#656565]">Nama Pasien</label>
                            <input type="text" v-model="pasienData.nama" readonly
                                class="w-full border border-[#3582d7] rounded-md p-2 bg-gray-100">
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label class="block text-[#656565]">Usia</label>
                                <input type="number" v-model="pasienData.usia" readonly
                                    class="w-full border border-[#3582d7] rounded-md p-2 bg-gray-100">
                            </div>
                            <div>
                                <label class="block text-[#656565]">Jenis Kelamin</label>
                                <input type="text" v-model="pasienData.jenis_kelamin" readonly
                                    class="w-full border border-[#3582d7] rounded-md p-2 bg-gray-100">
                            </div>
                        </div>
                        <div>
                            <label class="block text-[#656565]">Diagnosa</label>
                            <textarea v-model="pasienData.diagnosa"
                                class="w-full border border-[#3582d7] rounded-md p-2 h-20"></textarea>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <h3 class="text-xl text-[#3582d7] font-bold">Detail Obat</h3>

                    <div v-for="(obat, index) in daftarObat" :key="index"
                        class="grid grid-cols-4 gap-4 mt-4 items-center">
                        <div>
                            <label class="block text-[#656565]">Nama Obat</label>
                            <select v-model="obat.nama_obat_id" class="w-full border border-[#3582d7] rounded p-2"
                                @change="updateNamaObat(index)">
                                <option value="">-- Pilih Obat --</option>
                                <option v-for="obatOption in obatOptions" :key="obatOption.id" :value="obatOption.id">
                                    {{ obatOption.nama_obat }}
                                </option>
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

                <div class="grid justify-start items-center mt-6">
                    <button @click="tambahObat"
                        class="bg-white text-[#3582d7] border border-[#3582d7] rounded-md px-6 py-3 font-semibold hover:bg-[#3582d7] hover:text-white mb-3">
                        Tambah Obat
                    </button>
                    <div class="justify-between space-x-5">
                        <button @click="submitResep" :disabled="isLoading"
                            class="bg-white text-[#3582d7] border border-[#3582d7] rounded-md px-6 py-3 font-semibold hover:bg-[#3582d7] hover:text-white mb-3">
                            {{ isLoading ? 'Menyimpan...' : 'Simpan Resep' }}
                        </button>
                        <button @click="resetForm"
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FooterSection from '@/pages/manage_doctor/footer.vue'
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch'

const route = useRoute()
const router = useRouter()
const pemeriksaanAwalId = route.query.id as string

const isLoading = ref(false)
const pasienData = ref({
    nama: '',
    usia: '',
    jenis_kelamin: '',
    diagnosa: ''
})

const obatOptions = ref<{ id: string; nama_obat: string }[]>([])
const daftarObat = ref([
    { nama_obat_id: '', nama_obat: '', dosis: '', instruksi: '' }
])

const updateNamaObat = (index: number) => {
    const selectedObat = obatOptions.value.find(obat => obat.id == daftarObat.value[index].nama_obat_id)
    if (selectedObat) {
        daftarObat.value[index].nama_obat = selectedObat.nama_obat
    }
}

const tambahObat = () => {
    daftarObat.value.push({ nama_obat_id: '', nama_obat: '', dosis: '', instruksi: '' })
}

const hapusObat = (index: number) => {
    if (daftarObat.value.length > 1) {
        daftarObat.value.splice(index, 1)
    }
}

const resetForm = () => {
    daftarObat.value = [{ nama_obat_id: '', nama_obat: '', dosis: '', instruksi: '' }]
}

const submitResep = async () => {
    isLoading.value = true
    try {
        if (!pasienData.value.diagnosa) {
            alert('Harap isi diagnosa')
            return
        }

        const hasEmptyFields = daftarObat.value.some(obat =>
            !obat.nama_obat_id || !obat.dosis || !obat.instruksi
        )

        if (hasEmptyFields) {
            alert('Harap lengkapi semua field obat')
            return
        }

        const payload = {
            pemeriksaan_awal_id: pemeriksaanAwalId,
            diagnosa: pasienData.value.diagnosa,
            obat_list: daftarObat.value.map(obat => ({
                nama_obat_id: obat.nama_obat_id,
                dosis: obat.dosis,
                instruksi: obat.instruksi
            }))
        }

        const response = await useAuthenticatedFetch(
            'http://127.0.0.1:8000/api/medicine-prescription/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        )

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.error || 'Gagal menyimpan resep')
        }

        const data = await response.json()
        alert('Resep berhasil disimpan!')
        router.push('/manage_doctor')

    } catch (error) {
        console.error('Error:', error)
        alert('Gagal menyimpan resep: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
        isLoading.value = false
    }
}

onMounted(async () => {
    try {
        const response = await useAuthenticatedFetch(
            `http://127.0.0.1:8000/api/medicine-prescription/from-initial-check/${pemeriksaanAwalId}/`
        )

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || 'Gagal memuat data')
        }

        console.log('Data obat:', data.obat_list)

        pasienData.value = {
            nama: data.pasien.nama,
            usia: data.pasien.usia,
            jenis_kelamin: data.pasien.jenis_kelamin,
            diagnosa: ''
        }

        obatOptions.value = data.obat_list
    } catch (error) {
        console.error('Error:', error)
        alert('Terjadi kesalahan saat memuat data obat: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
})
</script>
