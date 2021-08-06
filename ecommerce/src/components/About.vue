<template>
  <div>
    <b-img center :src="banner.img"></b-img><br>

    <div class="d-flex justify-content-center">
      <h4>{{banner.title}}</h4><br>
    </div>
    <div class="d-flex justify-content-center">
        <p class="text-center tam">{{banner.description}}</p>   
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        banner: {
          id: 1,
          img: "static/img/Sobre/mulher_plantas.webp",
          title: "NOSSA HISTÓRIA",
          description: "Fundada em 2019, a loja Luz de Gaia abria suas portas na cidade de São Paulo, com o compromisso de oferecer jóias criadas com o mesmo cuidado com que os antigos ourives faziam peças exclusivas e eternas. Com uma equipe toda dedicada a você, para que esse momento seja único e majestoso!",
          alt: "Banner 1"
        },
      }
    },
    mounted() {
      //sobe o scrool para o topo da página após ser redirecionado no flow
      window.scrollTo(0, 0);
    }
  }
</script>

<style scoped>
  .tam{
    max-width: 60%;
  }
</style>
