<template>
    <div class="page-home">
        <aside class="box-aside-home">
            <div class="box-button-home">
                <div>
                    <router-link class="router-link button-orange" to="/">Solicitações</router-link>
                </div>
                <div>
                    <router-link class="router-link" to="/novo-usuario">Novo usuário</router-link>
                    <router-link class="router-link" to="/">Editar usuário</router-link>
                </div>
                <div>
                    <router-link class="router-link" to="/">Nova empresa</router-link>
                    <router-link class="router-link" to="/">Editar empresa</router-link>
                </div>
            </div>
        </aside>
        <section class="box-section-home">
            <router-view/>
        </section>
    </div>
</template>

<script>
import { ipcRenderer } from "electron";
  require('../../assets/css/home.css')
  export default {
    name: 'PageHome',
  
    components: {
      
    },
  
    data: () => ({
        exekeIcon: require('@/assets/img/pagina-exeke-5.png'),
        user: {
            username: "",
            password: ""
        }
    }),
    methods: {
        teste() {
            ipcRenderer.send("teste", JSON.stringify(this.user))
            // console.log(this.username)
        }
    }
  };
  </script>