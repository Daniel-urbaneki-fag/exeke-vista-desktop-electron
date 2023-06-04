<template>
    <div class="page-area">
        <div>
            <img :src="exekeIcon" width="250" height="250" alt="Logo">
        </div>
        <div class="container-input-text">
            <div class="input-text">
                <label for="">Login</label>
                <input v-model="user.username" type="text">
            </div>
            <div class="input-text">
            <label for="">Senha</label>
            <input v-model="user.password" type="text">
            </div>
            <div class="reset-password">
            <a href="">Esqueceu senha?</a>
            </div>
            <button @click="teste" class="btn-button-logar">LOGAR</button>
        </div>
    </div>
  </template>
  
  <script>
import { ipcRenderer } from "electron";
  require('../../assets/css/login.css')
  export default {
    name: 'PageLogin',
  
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
  