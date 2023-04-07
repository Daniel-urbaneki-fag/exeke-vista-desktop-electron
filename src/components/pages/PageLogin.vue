<template>
    <div class="page-area">
        <div>
          <img src="../../assets/img/pagina-exeke-5.png" width="250" height="250" alt="Logo">
        </div>
        <div class="container-input-text">
          <div class="input-text">
              <label for="">Login</label>
              <input type="text">
          </div>
          <div class="input-text">
            <label for="">Senha</label>
            <input type="text">
          </div>
          <div class="reset-password">
            <a href="">Esqueceu senha?</a>
          </div>
          <button class="btn-button-logar">LOGAR</button>
        </div>
    </div>
  </template>
  
  <script>
  require('../../assets/css/login.css')
  export default {
    name: 'PageLogin',
  
    components: {
      
    },
  
    data: () => ({
      //
    }),
  };
  </script>
  