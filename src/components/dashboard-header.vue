<template>
    <header class="main-header">
        <!-- Logo -->
        <a href="index2.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini" v-html="admin_lte.logoMini"></span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg" v-html="admin_lte.logoLG"></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <headerNav />
    </header>
</template>

<script>
  /* eslint-disable */
  import headerNav from '@/components/header-nav.vue'
  export default {
    name: 'dashboard-header',
    components: {
        'headerNav': headerNav,
    }
  }
</script>
