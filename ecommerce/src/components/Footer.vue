<template>
  <div>
    <footer class="margin">
      <div class="fixed">

        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-auto textMobile">
            LUZ DE GAIA<br>
            <router-link class="routercss" to="/about">Quem Somos</router-link><br>
            <router-link class="routercss" to="/workingon">Informações Úteis</router-link><br>
            <router-link class="routercss" to="/workingon">Tamanhos de Anéis/Colares/Pulseiras</router-link><br>
            <router-link class="routercss" to="/workingon">Prazos de Entrega</router-link><br>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-auto textMobile">
            PRECISA DE AJUDA?<br>
            <router-link class="routercss" to="/workingon">Como Comprar</router-link><br>
            <router-link class="routercss" to="/workingon">Pagamentos</router-link><br>
            <router-link class="routercss" to="/workingon">Política de trocas e Devoluções</router-link><br>
            <router-link class="routercss" to="/workingon">Política de Privacidade</router-link><br>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-auto textMobile">
            SHOPPING<br>
            <router-link class="routercss" to="/workingon">Minha Conta</router-link><br>
            <router-link class="routercss" to="/workingon">Meus Pedidos</router-link><br>
          </div>
        </div><br>

        <div class="d-flex justify-content-center">
          <div class="col-lg-3 col-md-3 col-sm-auto">
            <p>SIGA A LUZ DE GAIA</p>
            <a href="https://www.google.com" target="_blank" class="effects iconColor" title="Instagram"> <i class="fab fa-instagram"></i></a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-auto">
            <p>ENTRE EM CONTATO</p>
            <a href="mailto:teste@hotmail.com" class="effects iconColor" title="Email"> <i class="far fa-envelope"></i></a>&emsp;
            <a href="tel:(16)99910-0000" class="effects iconColor" title="Telefone e WhatsApp"> <i class="fab fa-whatsapp"></i></a>
          </div>
        </div><br>

        <div class="row">
          <div class="col-lg-12">
            FORMAS DE PAGAMENTO<br>
            <img src="https://imgmp.mlstatic.com/org-img/MLB/MP/BANNERS/PSJ/735x40_banner_psj_3x.jpg" alt="Mercado Pago - Meios de pagamento" title="Mercado Pago - Meios de pagamento"
                 width="735" height="40" />
          </div><br>
          <div class="col-lg-12">
            <img src="static/img/Rodape/seguranca.jpg" title="Site seguro, certificado ssl" class="bannerSSL" />
          </div>
        </div>

        <p>
          © 2020 por Luz de Gaia Acessórios. Todos os direitos reservados.<br>
          Horário: Seg - Sex: 8:00h - 18:00h
        </p>
      </div><br>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped>
  .fixed {
    bottom: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: small;
    box-shadow: 0px 1px 10px 1px lightgrey;
    /*background-color: #F8F8FF !important;*/ /*GhostWhite*/
  }

  .bannerSSL {
    width: auto;
    height: 60px;
  }

  .iconColor {
    color: gray;
    font-size: x-large;
  }

    .iconColor:hover {
      color: dodgerblue;
    }

  .effects {
    transition: all 0.5s;
    cursor: pointer;
  }

    .effects:hover {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
      box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
    }

  .margin {
    margin-top: 430px;
  }

  .routercss {
    color: grey !important;
  }

    .routercss:hover {
      color: black !important;
    }

  .row {
    margin-right: 0;    
    margin-left: 0;    
  }

  @media(max-width: 450px) {
    .margin {
      margin-top: 590px;
    }

    .textMobile {
      padding-top: 10px;
    }
  }
</style>
