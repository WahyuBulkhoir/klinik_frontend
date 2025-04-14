<template>
  <div>
    <NavbarSection id="navbar" />
    <HomeSection id="home" />
    <ServicesSection id="services" />
    <DoctorSection id="doctor" />
    <AboutSection id="about" />
    <FooterSection id="footer" />
  </div>
</template>

<script setup>
import NavbarSection from '@/pages/manage_patient/navbar.vue';
import HomeSection from '@/pages/manage_patient/home.vue';
import ServicesSection from '@/pages/manage_patient/services.vue';
import DoctorSection from '@/pages/manage_patient/doctor.vue';
import AboutSection from '@/pages/manage_patient/about.vue';
import FooterSection from '@/pages/manage_patient/footer.vue';
</script>
