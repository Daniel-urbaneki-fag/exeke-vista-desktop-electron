<template>
    <div class="page-novo-usuario">
        <h2>Novo Usuário</h2>
    </div>
</template>

<script>
import { ipcRenderer } from "electron";
//   require('../../assets/css/home.css')
  export default {
    name: 'PageNovoUsuario',
  
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