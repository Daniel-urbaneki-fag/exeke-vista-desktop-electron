<template>
    <v-container>
      <PageHome/>
    </v-container>
  </template>
  
  <script>
  require('../../assets/css/content.css')
  import PageHome from '../pages/PageHome.vue';
  export default {
    name: 'TemplateContent',
  
    components: {
      PageHome
    },
  
    data: () => ({
      //
    }),
  };
  </script>
  