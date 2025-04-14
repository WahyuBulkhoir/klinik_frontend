<template>
    <div class="relative bg-white h-screen overflow-hidden text-left text-[15px] text-gray-800 font-poppins">
        <!-- Header -->
        <div class="bg-gradient-to-r from-green-500 to-blue-500 w-full h-14 flex items-center px-8 rounded-t-lg">
            <h1 class="text-white text-2xl font-kaushan-script">
                Riwayat Pertemuan dan Medical Checkup Anda
            </h1>
        </div>

        <!-- Container -->
        <div class="mt-6 mx-auto max-w-5xl p-6 bg-white border-2 border-green-500 shadow-md rounded-lg">
            <!-- List Items -->
            <div class="space-y-4">
                <div v-for="(item, index) in history" :key="index"
                    class="p-4 border-2 border-green-500 rounded-lg flex justify-between items-center">
                    <div>
                        <h2 class="text-lg font-bold">{{ item.status }}</h2>
                        <p class="text-sm text-gray-600">Status: {{ item.detail }}</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-gray-500 text-sm">See details</span>
                        <img class="w-5 h-5" :src="item.icon" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Desktop",
    data() {
        return {
            history: [
                { status: 'Diterima', detail: 'Progressive', icon: '/public/img/icon.svg' },
                { status: 'Tidak Diterima', detail: 'Selesai', icon: '/public/img/icon.svg' },
                { status: 'Diterima', detail: 'Progressive', icon: '/public/img/icon.svg' },
                { status: 'Tidak Diterima', detail: 'Selesai', icon: '/public/img/icon.svg' },
                { status: 'Diterima', detail: 'Progressive', icon: '/public/img/icon.svg' }
            ]
        }
    }
})
</script>
