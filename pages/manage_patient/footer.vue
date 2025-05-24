<template>
    <div class="w-full text-left text-[13px] font-[Poppins] text-black py-0 bg-gray-100">
        <div class="w-[60%] h-[10px] bg-gradient-to-r from-[#aed5f2] to-[#4bb649] mx-auto"></div>

        <div class="flex justify-between items-center w-[50%] mx-auto mt-6">
            <div class="flex items-center justify-between space-y-2">
                <img class="w-[150px] h-auto" alt="Logo" src="/public/img/upper_logo.png" />
                <b class="text-[20px] tracking-[0.55em] bg-gradient-to-r from-[#4bb649] to-[#3582d7] bg-clip-text text-transparent"
                    :style="{ fontFamily: 'Jost' }">
                    MANACLIC
                </b>
            </div>

            <div class="flex flex-col items-start text-[15px] space-y-4">
                <div>
                    <h3 class="font-semibold">Kontak</h3>
                    <h6 class="font-medium">Pusat Konsultasi :</h6>
                    <p class="font-light">0812 - 3456 - 7890</p>
                    <h6 class="font-medium">Email Kemitraan :</h6>
                    <p class="font-light">manaclic@gmail.com</p>
                </div>

                <div class="flex space-x-4 items-center">
                    <img class=" h-[30px] object-cover" alt="Instagram" src="/public/img/instagram.svg" />
                    <img class=" h-[30px] object-cover" alt="Facebook" src="/public/img/facebook.svg" />
                    <img class=" h-[30px] object-cover" alt="TikTok" src="/public/img/tiktok.svg" />
                    <img class=" h-[30px] object-cover" alt="YouTube" src="/public/img/youtube.svg" />
                </div>
            </div>
        </div>

        <div class="mx-28 mt-10 py-10 bg-gradient-to-r from-[#aed5f2] to-[#4bb649]">
            <p class="text-[15px] text-white text-center ml-0">@ 2025 GluonIT Software House. All
                Rights
                Reserved</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Footer",
});
</script>
