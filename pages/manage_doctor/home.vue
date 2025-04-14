<template>
    <section id="home" class="pt-2">
        <div class="relative w-full min-h-screen bg-white text-[20px] text-white font-koulen">

            <!-- Main Content -->
            <main class="container mx-auto px-0 py-0 flex flex-col md:flex-row items-center gap-10">
                <!-- Text Section -->
                <div class="flex-1 px-20 space-y-6 text-[#010101]">
                    <h1 class="text-5xl mt-28 space-y-10 md:text-7xl tracking-[0.35em] text-[#282828]"
                        :style="{ fontFamily: 'Jost' }">
                        <span class="block">WELCOME</span>
                        <span class="block">DOCTOR</span>
                    </h1>
                    <p class="text-lg font-poppins max-w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit at nunc
                        facilisis, a
                        pharetra mi consequat.
                    </p>
                    <button
                        class="bg-[#3582d7] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
                        Learn More
                    </button>
                </div>

                <!-- Image Section -->
                <div class="flex-1">
                    <img class="w-full max-w-[100%] rounded-bl-[50%] object-cover" src="/public/img/bg_doctor.png"
                        alt="Doctor Background" />
                </div>
            </main>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Desktop"
})
</script>
