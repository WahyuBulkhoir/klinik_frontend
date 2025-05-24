<template>
    <div class="relative w-full h-screen bg-gray-50 flex items-center overflow-hidden">
        <nav class="absolute top-0 left-16 p-4">
            <div class="flex flex-col items-center">
                <img class="w-16 h-16" src="/img/upper_logo.png" alt="Logo" />
                <h1 class="text-l font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text tracking-widest"
                    :style="{ fontFamily: 'Jost' }">
                    MANACLIC
                </h1>
            </div>
        </nav>

        <div class="ml-16 flex flex-col w-1/3">
            <form class="space-y-4" @submit.prevent="handleRegister">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Username</label>
                    <input v-model="username" type="text"
                        class="mt-1 block w-full p-2 border border-green-500 rounded-md focus:ring focus:ring-green-300"
                        required />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="email" type="email"
                        class="mt-1 block w-full p-2 border border-green-500 rounded-md focus:ring focus:ring-green-300"
                        required />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="password" type="password"
                        class="mt-1 block w-full p-2 border border-green-500 rounded-md focus:ring focus:ring-green-300"
                        required />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input v-model="confirmPassword" type="password"
                        class="mt-1 block w-full p-2 border border-green-500 rounded-md focus:ring focus:ring-green-300"
                        required />
                </div>
                <button type="submit"
                    class="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">Register</button>
            </form>
            <div v-if="errorMessage" class="text-sm text-red-600 mt-4">{{ errorMessage }}</div>
            <div class="text-sm text-gray-600 mt-4">
                Have an account? <NuxtLink to="/manage_patient/login" class="text-blue-600 hover:underline">Login
                </NuxtLink>
            </div>
        </div>

        <img class="absolute top-24 right-20 w-[800px] object-contain hover:scale-105 transition-transform duration-300"
            src="/img/bg_vector.png" alt="Background" />
        <img class="absolute top-24 right-20 w-[700px] object-contain hover:scale-105 transition-transform duration-300"
            src="/img/picture1.png" alt="Background" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Register',
    setup() {
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const confirmPassword = ref('');
        const errorMessage = ref('');
        const router = useRouter();

        const handleRegister = async () => {
            try {
                if (password.value !== confirmPassword.value) {
                    throw new Error('Passwords do not match');
                }

                const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username.value,
                        email: email.value,
                        password: password.value,
                        confirm_password: confirmPassword.value
                    })
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.confirm_password?.[0] || 'Registration failed');
                }

                router.push('/manage_patient/login');
            } catch (error) {
                errorMessage.value = error instanceof Error ? error.message : String(error);
            }
        };

        return { username, email, password, confirmPassword, errorMessage, handleRegister };
    }
});
</script>
