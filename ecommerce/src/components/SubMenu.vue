<template>
  <div>
    <b-navbar toggleable="lg">
      <!--icone-->
      <b-navbar-brand>
        <img class="img d-inline-block" src="static/img/icones/icon.jpg" alt="Luz de Gaia">
        Luz de Gaia
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="textConfig">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" center>

          <!--login-->
          <div class="userIcon ">
            <b-avatar size="sm"></b-avatar>
          </div>

          <!--Entrar-->
          <b-nav-item-dropdown text="Entrar" right>
            <b-dropdown-form class="login">
              <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
                <b-form-input id="dropdown-form-email"
                              size="sm"
                              placeholder="email@example.com"></b-form-input>
              </b-form-group>

              <b-form-group label="Senha" label-for="dropdown-form-password">
                <b-form-input id="dropdown-form-password"
                              type="password"
                              size="sm"
                              placeholder="Senha"></b-form-input>
              </b-form-group>

              <b-button class="float-right" variant="outline-primary" size="sm">Entrar</b-button>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button class="colorDefault">Cadastrar</b-dropdown-item-button>
            <b-dropdown-item-button class="colorDefault">Esqueceu a senha?</b-dropdown-item-button>
          </b-nav-item-dropdown>

          <!--carrinho-->
          <b-button variant="outline" class="mb-2" title="Carrinho">
            <b-icon icon="cart3" class="colorDefault" aria-hidden="true"> </b-icon>
            <b-badge variant="light">2</b-badge>
          </b-button>

        </b-navbar-nav>

      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
</script>

<style scoped>
  .md-tabs {
    margin-bottom: 10px;
  }

  .fundo {
    background-color: white;
  }

  .img {
    max-width: 100%;
  }

  .colorDefault {
    color: gray;
  }

  .userIcon {
    padding-top: 8px;
  }

  .textConfig {
    text-align: center;
  }

  @media screen and (min-width: 1360px) {
    .login {
      min-width: 195px;
    }

    .userIcon {
      padding-left: 40px;
    }
  }
</style>
