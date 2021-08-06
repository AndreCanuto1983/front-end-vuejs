<template>
  <div>
    <b-row align-h="end">
      <br>
      <!--<b-col class="col-lg-2 col-md-2 col-sm-auto">
        R${{selectedValue}}
        <b-form-input id="range-1" v-model="selectedValue" type="range" :min="minValue" :max="maxValue" step="1"  class="range"></b-form-input>
      </b-col>-->
      <b-col class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
        <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
      </b-col>
    </b-row><br>

    <div v-if="products.length > 0">
      <b-row>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 cardConfig" v-for="(item, index) in products">
          <div id="card">
            <b-card-group>
              <b-card :img-src="item.img"
                      img-top
                      tag="article"
                      sd="auto"
                      md="3"
                      lg="3"
                      class="shadow">
                <b-form-rating id="rating-sm-no-border" variant="warning" v-model="item.evaluation" no-border size="sm"></b-form-rating>
                <b-card-text class="text-center textConfig">
                  {{item.title}}
                </b-card-text>

                <b-card-text class="text-center textConfig">
                  <b>R$ {{item.price}}</b> <br>
                  <small class="text-muted">{{item.parc}}</small>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>

        </div>
      </b-row>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        products: [
          { id: 1, title: "anel1", description: "Anel de ouro", price: "110,00", parc: "12 x R$32,00", evaluation: 5, img: "static/img/Produtos/anel.jpeg" },
          { id: 2, title: "anel2", description: "Anel de prata", price: "212,00", parc: "12 x R$32,00", evaluation: 4, img: "static/img/Produtos/anel1.jpeg" },
          { id: 3, title: "anel3", description: "Anel de teste", price: "130,00", parc: "12 x R$32,00", evaluation: 3, img: "static/img/Produtos/anel2.jpeg" },
          { id: 4, title: "anel4", description: "Anel de teste", price: "145,12", parc: "12 x R$32,00", evaluation: 2, img: "static/img/Produtos/anel3.jpeg" },
          { id: 5, title: "anel1", description: "Anel de teste", price: "110,00", parc: "12 x R$32,00", evaluation: 1, img: "static/img/Produtos/anel.jpeg" },
          { id: 6, title: "anel2", description: "Anel de teste", price: "212,10", parc: "12 x R$32,00", evaluation: 0, img: "static/img/Produtos/anel1.jpeg" },
          { id: 7, title: "anel3", description: "Anel de teste", price: "130,00", parc: "12 x R$32,00", evaluation: 5, img: "static/img/Produtos/anel2.jpeg" },
          { id: 8, title: "anel4", description: "Anel de teste", price: "145,56", parc: "12 x R$32,00", evaluation: 4, img: "static/img/Produtos/anel3.jpeg" },
          { id: 9, title: "anel1", description: "Anel de ouro", price: "110,00", parc: "12 x R$32,00", evaluation: 3, img: "static/img/Produtos/anel.jpeg" },
          { id: 10, title: "anel2", description: "Anel de prata", price: "212,00", parc: "12 x R$32,00", evaluation: 2, img: "static/img/Produtos/anel1.jpeg" },
          { id: 11, title: "anel3", description: "Anel de teste", price: "130,00", parc: "12 x R$32,00", evaluation: 1, img: "static/img/Produtos/anel2.jpeg" },
          { id: 12, title: "anel4", description: "Anel de teste", price: "145,12", parc: "12 x R$32,00", evaluation: 0, img: "static/img/Produtos/anel3.jpeg" },
          { id: 13, title: "anel1", description: "Anel de teste", price: "110,00", parc: "12 x R$32,00", evaluation: 3, img: "static/img/Produtos/anel.jpeg" },
          { id: 14, title: "anel2", description: "Anel de teste", price: "212,10", parc: "12 x R$32,00", evaluation: 4, img: "static/img/Produtos/anel1.jpeg" },
          { id: 15, title: "anel3", description: "Anel de teste", price: "130,00", parc: "12 x R$32,00", evaluation: 5, img: "static/img/Produtos/anel2.jpeg" },
          { id: 16, title: "anel4", description: "Anel de teste", price: "145,56", parc: "12 x R$32,00", evaluation: 5, img: "static/img/Produtos/anel3.jpeg" }
        ],
        selected: null,
        value:[0,100],
        minValue: "0",
        maxValue: "2500",
        selectedValue: 0,
        options: [
          { value: null, text: 'Selecione uma ordenação' },
          { value: 'a', text: 'Mais novos' },
          { value: 'b', text: 'Maior Preço' },
          { value: 'c', text: 'Menor Preço' },
          { value: 'd', text: 'Nome A-Z' },
          { value: 'e', text: 'Nome Z-A' },
        ]
      };
    },
    mounted() {
      //sobe o scrool para o topo da página após ser redirecionado no flow
      window.scrollTo(0, 0);
    }
    //methods: {
    //  getProducts() {
    //    const productService = new ProductService();

    //    productService.get().then(response => {
    //      this.products = response.data;
    //    }).catch(error => {
    //      window.console.log('Error', error);
    //    });
    //  }
    //},
  };
</script>
<style scoped>
  .body {
    margin: 5px;
  }

  #p {
    text-align: center;
  }

  .btn {
    width: 100%;
  }

  .cardConfig {
    padding-top: 10px;
  }

  .shadow {
    box-shadow: 1px 1px 5px 1px lightgrey;
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

  .textConfig {
    color: gray;
  }
  .range {
    width: 100%;
    height: 1px;
    background: black;
  }

  @media (max-width: 480px) {
    .cardConfig {
      padding-top: 10px;
      max-width: 50%;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
</style>
