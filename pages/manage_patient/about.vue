<template>
    <div class="relative w-full bg-gray-100 overflow-hidden text-left text-[25px] text-black font-jost">
        <!-- Bagian About -->
        <div class="flex flex-col items-center bg-gray-100 py-16">
            <div class="w-full max-w-xs text-center">
                <h1 class="text-xl font-bold bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent"
                    :style="{ fontFamily: 'Jost' }">
                    ABOUT
                </h1>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-300 to-green-400 mx-auto mt-2"></div>
            </div>

            <!-- Konten About & Elemen Bulat -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 w-full max-w-4xl px-4">
                <!-- Kolom About -->
                <div v-for="(item, index) in aboutItems" :key="index" class="flex flex-col items-start text-center">
                    <div class="w-[72px] h-[72px] rounded-full flex items-center justify-center border border-[#4bb649] shadow-lg"
                        :class="item.bgColor">
                        <img class="w-[65px] h-[65px] object-cover" alt="" src="/public/img/about_circle.png" />
                    </div>
                    <h2 class="mt-4 font-normal bg-gradient-to-b from-[#3582d7] to-[#4bb649] bg-clip-text text-transparent"
                        :style="{ fontFamily: 'Kaushan Script' }">
                        {{ item.title }}
                    </h2>
                    <p class="text-[15px] font-light font-poppins text-justify w-[90%] break-words whitespace-normal"
                        :style="{ fontFamily: 'Poppins' }">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const aboutItems = [
    {
        title: "About",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        bgColor: "bg-[#80dabb]"
    },
    {
        title: "About",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        bgColor: "bg-[#9dd7dd]"
    },
    {
        title: "About",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        bgColor: "bg-[#6adda0]"
    },
    {
        title: "About",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        bgColor: "bg-[#86d9c2]"
    }
];
</script>
