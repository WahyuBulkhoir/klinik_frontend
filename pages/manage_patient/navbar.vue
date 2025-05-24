<template>
    <div class="bg-gray-100 text-gray-900 relative">
        <header
            :class="['bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-shadow', { 'shadow-lg': isScrolled }]">
            <nav class="flex items-center justify-between p-2 md:px-10 lg:px-20">
                <div class="flex flex-col items-center">
                    <img class="w-16 h-16" src="/img/upper_logo.png" alt="Logo" />
                    <h1 class="text-l font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text tracking-widest"
                        :style="{ fontFamily: 'Jost' }">
                        MANACLIC
                    </h1>
                </div>
                <div class="hidden md:flex space-x-10 text-lg font-reguler" :style="{ fontFamily: 'Koulen' }">
                    <a href="/manage_patient/home" @click.prevent="scrollTo('home')"
                        class="hover:text-blue-700">Home</a>
                    <a href="/manage_patient/services" @click.prevent="scrollTo('services')"
                        class="hover:text-blue-700">Services</a>
                    <a href="/manage_patient/doctor" @click.prevent="scrollTo('doctor')"
                        class="hover:text-blue-700">Doctor</a>
                    <a href="/manage_patient/about" @click.prevent="scrollTo('about')"
                        class="hover:text-blue-700">About</a>
                </div>
                <div class="hidden md:flex space-x-4">
                    <template v-if="isLoggedIn">
                        <button @click="logout" class="px-4 py-2 bg-red-600 text-white rounded-lg">Logout</button>
                    </template>
                    <template v-else>
                        <a href="/manage_patient/login" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</a>
                        <a href="/manage_patient/register"
                            class="px-4 py-2 bg-green-600 text-white rounded-lg">Register</a>
                    </template>
                </div>
                <button class="md:hidden text-xl focus:outline-none">
                    ☰
                </button>
            </nav>
        </header>

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
            isLoggedIn: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.checkLoginStatus();
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
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
        checkLoginStatus() {
            this.isLoggedIn = !!localStorage.getItem('access_token');
        },
        logout() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_role');
            this.checkLoginStatus();
            window.location.href = '/manage_patient';
        }

    },
};
</script>
