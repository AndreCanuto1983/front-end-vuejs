<template>
  <div>
    <b-carousel id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                fade
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333;"
                img-width="800"
                img-height="350"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd" class="shadow">
      <!-- Text slides with image -->
      <b-carousel-slide id="carousel"
                        caption=""
                        text=""
                        img-src="../static/img/Apresentacao/ImagemN.jpg">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide id="carousel"
                        img-src="../static/img/Apresentacao/ImagemO.jpg">
        <!--<h1>Hello world!</h1>-->
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide id="carousel"
                        img-src="../static/img/Apresentacao/ImagemP.jpg"></b-carousel-slide>

      <b-carousel-slide id="carousel"
                        img-src="../static/img/Apresentacao/ImagemU.jpg"></b-carousel-slide>
    </b-carousel><br>


    <div class="d-flex justify-content-center title">
      {{title}}
    </div>
    <b-row>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 cardConfig" v-for="(item, index) in novidades">
        <div id="card" @click="">
          <b-card :img-src="item.img"
                  :img-alt="item.alt"
                  img-top
                  tag="article"
                  sd="auto"
                  md="3"
                  lg="3"
                  class="shadow">
            <b-card-text class="text-center textSize">
              {{item.alt}}
            </b-card-text>
          </b-card>
        </div>

      </div>
    </b-row><br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        title: "Novidades",
        novidades: [
          { id: 1, img: "../static/img/Novidades/novidades1.webp", alt: "Pingente Namastê" },
          { id: 2, img: "../static/img/Novidades/novidades2.webp", alt: "Anel Boho Flecha Regulável" },
          { id: 3, img: "../static/img/Novidades/novidades3.webp", alt: "Pulseira Olho Grego" },
          { id: 4, img: "../static/img/Novidades/novidades4.webp", alt: "Colar" },
          { id: 5, img: "../static/img/Novidades/novidades1.webp", alt: "Pingente Namastê" },
          { id: 6, img: "../static/img/Novidades/novidades2.webp", alt: "Anel Boho Flecha Regulável" },
          { id: 7, img: "../static/img/Novidades/novidades3.webp", alt: "Pulseira Olho Grego" },
          { id: 8, img: "../static/img/Novidades/novidades4.webp", alt: "Colar" }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    mounted() {
      //sobe o scrool para o topo da página após ser redirecionado no flow
      window.scrollTo(0, 0);
    }
  }
</script>

<style scoped>
  .cardConfig {
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    .cardConfig {
      padding-top: 10px;
      max-width: 50%;
      padding-right: 5px;
      padding-left: 5px;
    }
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 801px) {
    #carousel {
      max-height: 330px !important;
    }
  }

  /* Tablet em retrato a paisagem e desktop */
  @media (min-width: 802px) and (max-width: 1399px) {
    #carousel {
      max-height: 380px !important;
    }
  }

  /* Desktop grande */
  @media (min-width: 1400px) {
    #carousel {
      max-height: 570px !important;
    }
  }

  .textSize {
    font-size: small !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #card {
    cursor: pointer;
    transition: all 0.3s;
  }

    #card:hover {
      -webkit-transform: scale(1.02);
      transform: scale(1.02);
      -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
      box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
    }

  .title {
    padding-top: 4%;
    font-size: medium;
    font-weight: bold;
  }

  .shadow {
    box-shadow: 1px 1px 5px 1px lightgrey;
  }
</style>
