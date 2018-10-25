<template>
    <!-- Check if Menu Item is a header or item -->
    <li :class="{'header' : typeof menu == 'string', 'treeview' : typeof menu != 'string', 'active' : this.$route.path == menu.url }">

        <template v-if="typeof menu == 'string'">
            {{ menu }}
        </template>

        <template v-else>
            
            <router-link :to="{ path: menu.url || '#'  }"> 
                <i :class="'fa fa-fw fa-' + menu.icon "></i>
                <span>{{ menu.text }}</span>
                <span class="pull-right-container" v-if="menu.submenu">
                <i class="fa fa-angle-left pull-right"></i>
                </span>
            </router-link>
            <!-- Loop for Submenu -->
            <ul v-if="menu.submenu" class="treeview-menu" data-widget="tree">
                <sidebar-menu v-for="m in menu.submenu" :menu="m" />
            </ul>

        </template>

    </li>

</template>


<script>
  /* eslint-disable */
  import sidebarMenu from '@/components/sidebar-menu.vue'
export default {
    name: 'sidebar-menu',
    props: ['menu']
}
</script>


