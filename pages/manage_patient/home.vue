<template>
  <section id="home" class="pt-2">
    <div class="relative">
      <!-- Background Gradient -->
      <div
        class="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-r from-blue-300 to-green-400 rounded-t-[100%]">
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md"
        :style="{ fontFamily: 'Koulen' }">
        <a href="#" class="text-lg font-reguler hover:text-blue-800">Home</a>
        <a href="#" class="text-lg font-reguler hover:text-blue-800">Services</a>
        <a href="#" class="text-lg font-reguler hover:text-blue-800">Doctor</a>
        <a href="#" class="text-lg font-reguler hover:text-blue-800">About</a>
        <button class="w-32 px-4 py-2 bg-blue-600 text-white rounded-lg">Login</button>
        <button class="w-32 px-4 py-2 bg-green-600 text-white rounded-lg">Register</button>
      </div>

      <!-- Hero & Feature Section -->
      <div class="grid grid-cols-3 items-center justify-center px-6 md:px-20 py-10 gap-6 mt-20">

        <!-- Left Feature -->
        <div class="flex flex-col items-center space-y-6 mt-60 z-[7]">
          <div class="w-20 h-20 md:w-28 md:h-28 bg-white shadow-lg rounded-full flex items-center justify-center">
            <img src="/public/img/1.png" alt="Feature" class="w-16 md:w-24" />
          </div>
          <div class="w-20 h-20 md:w-28 md:h-28 bg-white shadow-lg rounded-full flex items-center justify-center">
            <img src="/public/img/2.png" alt="Feature" class="w-16 md:w-24" />
          </div>
        </div>

        <!-- Tengah (Judul + Gambar) -->
        <div class="flex flex-col items-center text-center space-y-12 mt-20 z-[7]">
          <h1
            class="text-7xl font-bold relative text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text mb-20"
            :style="{
              fontFamily: 'Jost',
              letterSpacing: '40px',
              textShadow: '8px 8px 12px rgba(0, 0, 0, 0.3)' /* Efek bayangan 3D */
            }">
            MANACLIC
          </h1>
          <img src="/img/mid_logo.png" alt="Hero Image" class="w-72 md:w-96 lg:w-[200px]" />
          <h1 class="text-4xl text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text"
            :style="{ fontFamily: 'Kaushan Script' }">
            Manage Your Clinic
          </h1>
        </div>

        <!-- Right Feature -->
        <div class="flex flex-col items-center space-y-6 mt-60 z-[7]">
          <div class="w-20 h-20 md:w-28 md:h-28 bg-white shadow-lg rounded-full flex items-center justify-center">
            <img src="/public/img/4.png" alt="Feature" class="w-16 md:w-24" />
          </div>
          <div class="w-20 h-20 md:w-28 md:h-28 bg-white shadow-lg rounded-full flex items-center justify-center">
            <img src="/public/img/5.png" alt="Feature" class="w-16 md:w-24" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
