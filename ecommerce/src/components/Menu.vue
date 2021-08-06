<template>
  <div class="shadow">

    <div class="desktop">
      <div class="row justify-content-center">
        <el-menu default-active="1" mode="horizontal" @select="handleSelect">

          <el-menu-item index="home" @click="home()"><b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon></el-menu-item>

          <el-submenu index="aneis">
            <template slot="title">
              Anéis
            </template>
            <el-menu-item index="aneisComPedra" @click="aneis()">Com Pedra</el-menu-item>
            <el-menu-item index="aneisSemPedra" @click="workingon()">Sem Pedra</el-menu-item>
            <el-menu-item index="falanges" @click="workingon()">Falanges</el-menu-item>
            <el-menu-item index="aliancas" @click="workingon()">Alianças</el-menu-item>
          </el-submenu>

          <el-submenu index="brincos">
            <template slot="title">
              Brincos
            </template>
            <el-menu-item index="brincosComPedra" @click="workingon()">Com Pedra</el-menu-item>
            <el-menu-item index="brincosSemPedra" @click="workingon()">Sem Pedra</el-menu-item>
            <el-menu-item index="argolas" @click="workingon()">Argolas</el-menu-item>
            <el-menu-item index="piercings" @click="workingon()">Pirrcings</el-menu-item>
            <el-menu-item index="earcuff" @click="workingon()">Ear Cuff</el-menu-item>
          </el-submenu>

          <el-submenu index="colares">
            <template slot="title">
              Colares
            </template>
            <el-menu-item index="gargantilhas" @click="workingon()">Gargantilhas</el-menu-item>
            <el-menu-item index="chocker" @click="workingon()">Chocker</el-menu-item>
            <el-menu-item index="escapularios" @click="workingon()">Escapulários</el-menu-item>
            <el-menu-item index="correntes" @click="workingon()">Correntes</el-menu-item>
          </el-submenu>

          <el-submenu index="pulseiras">
            <template slot="title">
              Pulseiras
            </template>
            <el-menu-item index="pulseirasComPedra" @click="workingon()">Com Pedra</el-menu-item>
            <el-menu-item index="pulseirasSemPedra" @click="workingon()">Sem Pedra</el-menu-item>
            <el-menu-item index="braceletes" @click="workingon()">Braceletes</el-menu-item>
          </el-submenu>

          <el-menu-item index="tornozeleiras" @click="workingon()">Tornozeleiras</el-menu-item>
          <el-menu-item index="kit" @click="workingon()">Kits</el-menu-item>
        </el-menu>

        <!--usuário-->
        <b-navbar toggleable="lg" class="desktop">
          <b-collapse id="nav-collapse" is-nav class="textConfig">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" center>

              <!--foto-->
              <div class="userIcon">
                <b-avatar size="sm"></b-avatar>
              </div>

              <!--login-->
              <b-nav-item-dropdown text="Entrar" right>

                <b-dropdown-form class="login">
                  <b-form-group label="Email" label-for="dropdown-form-email">
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

                  <!-- entrar -->
                  <b-button class="float-right"
                            variant="outline-primary"
                            size="sm"
                            @click.prevent>Entrar</b-button>
                </b-dropdown-form>

                <b-dropdown-divider></b-dropdown-divider>

                <b-dropdown-item class="colorDefault">
                  <router-link to="/userregistration">Cadastrar</router-link>
                </b-dropdown-item>

                <b-dropdown-item class="colorDefault">
                  <router-link to="/forgotpassword">Esqueceu a senha?</router-link>
                </b-dropdown-item>

              </b-nav-item-dropdown>

              <!--carrinho-->
              <b-button variant="outline" class="mb-2" title="Carrinho">
                <b-icon icon="cart3" class="colorDefault" aria-hidden="true"></b-icon>
                <b-badge variant="light">0</b-badge>
              </b-button>

            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

      </div>

    </div>

    <div class="mobile">
      <b-navbar toggleable="lg" type="light" class="container">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- usuário mobile -->
        <b-navbar class="mobile">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="mx-auto" center>
            <!--foto-->
            <div class="userIcon">
              <b-avatar size="sm"></b-avatar>
            </div>

            <!--login-->
            <b-nav-item-dropdown text="Entrar" right>

              <b-dropdown-form class="login">

                <b-form-group label="Email" label-for="dropdown-form-email">
                  <b-form-input id="dropdown-form-email-mobile"
                                size="sm"
                                placeholder="email@example.com"></b-form-input>
                </b-form-group>

                <b-form-group label="Senha" label-for="dropdown-form-password">
                  <b-form-input id="dropdown-form-password-mobile"
                                type="password"
                                size="sm"
                                placeholder="Senha"></b-form-input>
                </b-form-group>

                <!-- entrar -->
                <b-button class="float-right"
                          variant="outline-primary"
                          size="sm"
                          @click="">Entrar</b-button>
              </b-dropdown-form>

              <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-item class="colorDefault">
                <router-link to="/userregistration">Cadastrar</router-link>
              </b-dropdown-item>

              <b-dropdown-item class="colorDefault">
                <router-link to="/forgotpassword">Esqueceu a senha?</router-link>
              </b-dropdown-item>

            </b-nav-item-dropdown>

            <!--carrinho-->
            <b-button variant="outline" class="mb-2" title="Carrinho">
              <b-icon icon="cart3" class="colorDefault" aria-hidden="true"></b-icon>
              <b-badge variant="light">0</b-badge>
            </b-button>

          </b-navbar-nav>
        </b-navbar>

        <!-- menu principal -->
        <b-collapse id="nav-collapse" is-nav class="textConfig">

          <b-navbar-nav center class="mx-auto">
            <b-nav-item @click="home()">
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
            </b-nav-item>

            <b-nav-item-dropdown id="aneis" text="Anéis">
              <b-dropdown-item>
                <router-link class="routercss" to="/products">Com pedra</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Sem pedra</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Falanges</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Alianças</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown id="teste" text="Brincos">
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Com pedra</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Sem pedra</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Argolas</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Piercings</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Ear Cuff</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Colares">
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Gargantilhas</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Chocker</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Escapulários</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Correntes</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Pulseiras">
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Com pedra</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Sem pedra</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link class="routercss" to="/workingon">Braceletes</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item>
              <router-link class="routercss" to="/workingon">Tornozeleiras</router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link class="routercss" to="/workingon">Kits</router-link>
            </b-nav-item>

          </b-navbar-nav>

        </b-collapse>

      </b-navbar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      home() {
        if (this.$route.path != "/home")
          this.$router.push("/home");
      },
      aneis() {
        if (this.$route.path != "/products")
          this.$router.push("/products");
      },
      workingon() {
        if (this.$route.path != "/workingon")
          this.$router.push("/workingon");
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  };
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
    font-size: small;
  }

  .userIcon {
    padding-top: 8px;
  }

  .textConfig {
    text-align: center;
  }

  .shadow {
    box-shadow: 0px 4px 5px 0px lightgrey !important;
    margin-bottom: 15px;
  }

  .routercss {
    color: grey !important;
  }

    .routercss:hover {
      color: black !important;
    }

  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  @media(max-width: 800px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block; /* ou inline, inline-block */
    }
  }

  @media screen and (min-width: 1280px) {
    .login {
      min-width: 195px;
    }

    .userIcon {
      padding-left: 30px;
    }
  }
</style>
