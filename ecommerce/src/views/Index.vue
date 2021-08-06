<template>
  <div>
    <Logo></Logo>
    <Menu></Menu>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Logo from '../components/Logo.vue';
  import Menu from '../components/Menu.vue';
  import Footer from '../components/Footer.vue';
  export default {
    components: {
      'Logo': Logo,
      'Menu': Menu,
      'Footer': Footer
    },
    name: 'topMenu',
    mounted() {
      if (this.$route.fullPath == "/")
        this.$router.push('/home');
    }
  }
</script>

<style scoped>
</style>
