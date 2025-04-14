<template>
    <div>
        <NavbarSection id="navbar" />
        <HomeSection id="home" />
        <ScheduleSection id="schedule" />
        <PatientSection id="patient" />
        <FooterSection id="footer" />
    </div>
</template>

<script setup>
import NavbarSection from '@/pages/manage_doctor/navbar.vue';
import HomeSection from '@/pages/manage_doctor/home.vue';
import ScheduleSection from '@/pages/manage_doctor/schedule.vue';
import PatientSection from '@/pages/manage_doctor/patient.vue';
import FooterSection from '@/pages/manage_doctor/footer.vue';
</script>