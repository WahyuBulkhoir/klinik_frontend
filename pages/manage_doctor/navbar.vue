<template>
    <div class="bg-gray-100 text-gray-900 relative">
        <!-- Navbar -->
        <header
            :class="['bg-gradient-to-r from-[#fcfdfe] to-[#3582d7] to-[56.4%] shadow-md fixed top-0 left-0 w-full z-50 transition-shadow', { 'shadow-lg': isScrolled }]">
            <nav class="flex items-center justify-between p-2 md:px-10 lg:px-20">
                <div class="flex flex-col items-center">
                    <img class="w-16 h-16" src="/img/upper_logo.png" alt="Logo" />
                    <h1 class="text-l font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text tracking-widest"
                        :style="{ fontFamily: 'Jost' }">
                        MANACLIC
                    </h1>
                </div>
                <div class="hidden md:flex text-white space-x-10 text-lg" :style="{ fontFamily: 'Koulen' }">
                    <a href="/manage_doctor/home" @click.prevent="scrollTo('home')"
                        class="hover:text-green-400">Home</a>
                    <a href="/manage_doctor/schedule" @click.prevent="scrollTo('schedule')"
                        class="hover:text-green-400">Schedule</a>
                    <a href="/manage_doctor/patient" @click.prevent="scrollTo('patient')"
                        class="hover:text-green-400">Patient</a>
                </div>
                <div class="hidden text-white text-lg md:flex space-x-4 items-center relative"
                    :style="{ fontFamily: 'Koulen' }">
                    <p>Hallo, Doctor!</p>

                    <!-- Accordion Trigger -->
                    <button @click="toggleDropdown"
                        class="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition relative z-10">
                        ☰ Menu
                    </button>

                    <!-- Dropdown Menu -->
                    <div v-if="dropdownOpen"
                        class="absolute top-14 right-0 bg-white text-gray-700 rounded-lg shadow-md w-40 z-20">
                        <a @click="goToSetting" class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Setting</a>
                        <a @click="logout"
                            class="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</a>
                    </div>
                </div>
                <button class="md:hidden text-xl focus:outline-none">
                    ☰
                </button>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto pt-20">
            <slot />
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
            dropdownOpen: false,
        };
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        scrollTo(id) {
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        goToSetting() {
            this.dropdownOpen = false;
            this.$router.push('/manage_doctor/profile-setting');
        },
        logout() {
            localStorage.removeItem("access_token");
            this.$router.push('/manage_patient');
        }
    },
};
</script>
