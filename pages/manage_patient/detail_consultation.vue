<template>
    <div class="relative flex flex-col items-center bg-gray-100 min-h-screen p-4">
        <div ref="warningRef" v-if="formWarning"
            class="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded">
            Mohon lengkapi semua data terlebih dahulu sebelum mengirimkan form.
        </div>
        <div v-if="!hasFilledForm"
            class="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 border border-green-500 mb-10">
            <div class="bg-gradient-to-r from-[#4bb649] to-[#3582d7] text-white text-2xl font-normal p-4 rounded-lg mb-6"
                :style="{ fontFamily: 'Kaushan Script' }">
                Formulir Data Administrasi dan Rekam Medis Pasien
            </div>
            <h1 class="text-xl font-semibold text-green-600 mb-4">Identitas Pasien</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block mb-1">Nama Lengkap</label>
                    <input v-model="form.nama_lengkap" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Tempat Lahir</label>
                    <input v-model="form.tempat_lahir" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Tanggal Lahir</label>
                    <input v-model="form.tanggal_lahir" type="date"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Jenis Kelamin</label>
                    <select v-model="form.jenis_kelamin" class="w-full p-2 border border-green-500 rounded-lg">
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <div>
                    <label class="block mb-1">Golongan Darah</label>
                    <select v-model="form.golongan_darah" class="w-full p-2 border border-green-500 rounded-lg">
                        <option value="">Pilih Gol. Darah</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                </div>
                <div>
                    <label class="block mb-1">Nomor HP</label>
                    <input v-model="form.no_hp" type="number" class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Email</label>
                    <input v-model="form.email" type="email" class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
            </div>

            <div class="w-full h-1 bg-gradient-to-r from-[#4bb649] to-[#3582d7] mx-auto mt-5"></div>
            <h2 class="text-xl font-bold text-green-600 mt-6">Informasi Pembayaran</h2>
            <div class="grid grid-cols-1 gap-4 mt-2">
                <div>
                    <label class="block mb-1">Jenis Kepesertaan</label>
                    <select v-model="form.jenis_kepesertaan" class="w-full p-2 border border-green-500 rounded-lg">
                        <option value="">Pilih Jenis Kepesertaan</option>
                        <option value="kis">KIS</option>
                        <option value="jamkesda">Jamkesda</option>
                        <option value="jknbpjs">JKN - BPJS</option>
                        <option value="bpjsket">BPJS Ketenagakerjaan</option>
                    </select>
                </div>
                <div>
                    <label class="block mb-1">Nomor Kartu</label>
                    <input v-model="form.nomor_kartu" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
            </div>

            <div class="w-full h-1 bg-gradient-to-r from-[#4bb649] to-[#3582d7] mx-auto mt-5"></div>
            <h2 class="text-xl font-bold text-green-600 mt-6">Kontak Darurat</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div>
                    <label class="block mb-1">Nama Kontak Darurat</label>
                    <input v-model="form.nama_kontak_darurat" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Hubungan</label>
                    <select v-model="form.hubungan_kontak" class="w-full p-2 border border-green-500 rounded-lg">
                        <option value="">Pilih Hubungan</option>
                        <option value="suami">Suami</option>
                        <option value="istri">Istri</option>
                        <option value="ayah">Ayah</option>
                        <option value="ibu">Ibu</option>
                        <option value="etc">Lainnya</option>
                    </select>
                </div>
                <div>
                    <label class="block mb-1">No. HP Kontak</label>
                    <input v-model="form.no_hp_kontak" type="number"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
            </div>

            <div class="w-full h-1 bg-gradient-to-r from-[#4bb649] to-[#3582d7] mx-auto mt-5"></div>
            <h2 class="text-xl font-bold text-green-600 mt-6">Riwayat Kesehatan</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                    <label class="block mb-1">Riwayat Penyakit</label>
                    <input v-model="form.riwayat_penyakit" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Alergi</label>
                    <input v-model="form.alergi_obat_makanan" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Riwayat Operasi</label>
                    <input v-model="form.riwayat_operasi" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
                <div>
                    <label class="block mb-1">Riwayat Pengobatan</label>
                    <input v-model="form.riwayat_pengobatan" type="text"
                        class="w-full p-2 border border-green-500 rounded-lg" />
                </div>
            </div>

            <div class="w-full h-1 bg-gradient-to-r from-[#4bb649] to-[#3582d7] mx-auto mt-5"></div>
            <h2 class="text-xl font-bold text-green-600 mt-6">Gaya Hidup</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                    <label class="block mb-1">Merokok</label>
                    <select v-model="form.merokok" class="w-full p-2 border border-green-500 rounded-lg">
                        <option value="">Pilih</option>
                        <option value="Iya">Iya</option>
                        <option value="Tidak">Tidak</option>
                    </select>
                </div>
                <div>
                    <label class="block mb-1">Konsumsi Alkohol</label>
                    <select v-model="form.konsumsi_alkohol" class="w-full p-2 border border-green-500 rounded-lg">
                        <option value="">Pilih</option>
                        <option value="Iya">Iya</option>
                        <option value="Tidak">Tidak</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-center mt-6">
                <button @click="submitForm"
                    class="rounded-lg bg-[#3582d7] text-white px-8 py-3 text-[20px] hover:bg-[#4bb649] transition-colors duration-300 flex items-center">
                    Buat Pertemuan
                    <img class="w-6 h-6 ml-2" src="/public/img/icon.svg" alt="icon" />
                </button>
            </div>
        </div>

        <div v-else
            class="text-green-600 font-bold text-lg w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 border border-green-500 mb-10">
            <div class="bg-gradient-to-r from-[#4bb649] to-[#3582d7] text-white text-2xl font-normal p-4 rounded-lg mb-6"
                :style="{ fontFamily: 'Kaushan Script' }">
                Formulir Data Administrasi dan Rekam Medis Pasien
            </div>
            Anda sudah mengisi formulir ini.
        </div>

        <div class="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 border border-green-500 mb-10">
            <div
                class="bg-gradient-to-r from-[#4bb649] to-[#3582d7] text-white text-2xl font-normal p-4 rounded-lg mb-6">
                Riwayat Pertemuan dan Medical Checkup Anda
            </div>

            <div class="space-y-4">
                <div v-for="(person, index) in people" :key="index"
                    class="flex items-center justify-between bg-[#fcfcfc] border-2 border-[#3582d7] rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
                    <div>
                        <b class="text-lg">{{ person.statusLabel }}</b>
                        <p class="text-sm text-gray-500">Status: {{ person.detailStatus }}</p>
                    </div>
                    <NuxtLink :to="`/manage_patient/detail_riwayat_medical?meeting_request_id=${person.id}`"
                        class="text-gray-600 hover:text-blue-600">
                        See details
                    </NuxtLink>
                </div>
            </div>
        </div>
        <FooterSection id="footer" />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import FooterSection from '@/pages/manage_patient/footer.vue';
import { useAuthenticatedFetch } from '@/utils/useAuthenticatedFetch';

const router = useRouter();
const warningRef = ref<HTMLElement | null>(null);

const form = reactive({
    nama_lengkap: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
    golongan_darah: '',
    no_hp: '',
    email: '',
    jenis_kepesertaan: '',
    nomor_kartu: '',
    nama_kontak_darurat: '',
    hubungan_kontak: '',
    no_hp_kontak: '',
    riwayat_penyakit: '',
    alergi_obat_makanan: '',
    riwayat_operasi: '',
    riwayat_pengobatan: '',
    merokok: '',
    konsumsi_alkohol: ''
});

const formWarning = ref(false);
const hasFilledForm = ref(false);

function isFormComplete() {
    const requiredFields = [
        'nama_lengkap', 'tempat_lahir', 'tanggal_lahir', 'jenis_kelamin', 'golongan_darah',
        'no_hp', 'email', 'jenis_kepesertaan', 'nomor_kartu', 'nama_kontak_darurat',
        'hubungan_kontak', 'no_hp_kontak', 'riwayat_penyakit', 'alergi_obat_makanan',
        'riwayat_operasi', 'riwayat_pengobatan', 'merokok', 'konsumsi_alkohol'
    ];

    return requiredFields.every(field => form[field as keyof typeof form] !== '');
}

const submitForm = async () => {
    if (!isFormComplete() && !hasFilledForm.value) {
        formWarning.value = true;

        await nextTick();
        if (warningRef.value) {
            warningRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
    }

    formWarning.value = false;

    try {
        const response = await useAuthenticatedFetch('http://127.0.0.1:8000/api/rekam-medis/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Gagal menyimpan data.');
        }

        const responseData = await response.json();
        localStorage.setItem('pasien_id', responseData.id);
        alert('Data berhasil disimpan!');

        resetForm();
        hasFilledForm.value = true;

        router.push('/manage_patient/detail_meeting');
    } catch (error) {
        console.error(error);
        alert(`Gagal menyimpan data: ${(error as Error).message}`);
    }
};

const resetForm = () => {
    Object.keys(form).forEach(key => {
        form[key as keyof typeof form] = '';
    });
};

const people = ref<any[]>([]);
const loading = ref(false);

const fetchMeetingRequests = async () => {
    try {
        loading.value = true;

        const res = await useAuthenticatedFetch('http://localhost:8000/api/request/patient/', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) throw new Error('Gagal mengambil data');

        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
            people.value = data.data.map((item: any) => {
                let statusLabel = '';
                let detailStatus = '';

                switch (item.status) {
                    case 'approved':
                        statusLabel = 'Diterima';
                        detailStatus = 'Progressive';
                        break;
                    case 'rejected':
                        statusLabel = 'Tidak Diterima';
                        detailStatus = 'Selesai';
                        break;
                    case 'pending':
                        statusLabel = 'Pending';
                        detailStatus = 'Pending';
                        break;
                    default:
                        statusLabel = 'Tidak Diketahui';
                        detailStatus = 'N/A';
                }

                return {
                    id: item.id,
                    status: item.status,
                    statusLabel,
                    detailStatus,
                };
            });
        }
    } catch (err) {
        console.error('Gagal mengambil data:', err);
    } finally {
        loading.value = false;
    }
};

onMounted(async () => {
    try {
        const response = await useAuthenticatedFetch('http://127.0.0.1:8000/api/check-rekam-medis/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            hasFilledForm.value = data.has_rekam_medis;

            if (data.has_rekam_medis) {
                const reqRes = await useAuthenticatedFetch('http://localhost:8000/api/request/patient/', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (reqRes.ok) {
                    const reqData = await reqRes.json();
                    const allRejected = reqData.data.every((item: any) => item.status === 'rejected');
                    if (allRejected) {
                        hasFilledForm.value = false;
                    }
                }
            }
        } else {
            console.error('Gagal memeriksa apakah user sudah mengisi form.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat memeriksa:', error);
    }

    fetchMeetingRequests();
});
</script>
