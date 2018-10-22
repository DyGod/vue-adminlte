<template>
  <div class="wrapper">
    <dashboardHeader />
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
      'dashboardHeader': dashboardHeader,
      'sidebar': Sidebar
    }
  }
</script>

<style>

</style>
