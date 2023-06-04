<template>
    <v-container>
      <PageLogin/>
    </v-container>
  </template>
  
  <script>
  require('../../assets/css/content.css')
  import PageLogin from '../pages/PageLogin.vue';
  export default {
    name: 'TemplateContent',
  
    components: {
      PageLogin
    },
  
    data: () => ({
      //
    }),
  };
  </script>
  