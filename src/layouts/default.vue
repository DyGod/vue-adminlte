<template>
  <div class="wrapper">
    <dashboard-header />
    <sidebar />
    <div class="content-wrapper">
    <router-view />
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import dashboardHeader from '@/components/dashboard-header.vue'
  import Sidebar from '@/components/sidebar.vue'

  export default {
    name: 'default',
    components: {
      'dashboard-header': dashboardHeader,
      'sidebar': Sidebar
    }
  }
</script>

<style>

</style>
