<template>
  <v-app>
    <TemplateContent/>
  </v-app>
</template>

<script>
require('../src/assets/css/app.css')
import TemplateContent from './components/templates/TemplateContent.vue';

export default {
  name: 'App',

  components: {
    TemplateContent,
  },

  data: () => ({
    //
  }),
};
</script>
