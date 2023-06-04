<template>
  <v-app>
    <v-main>
      <TemplateContent/>
    </v-main>
  </v-app>
</template>

<script>
import TemplateContent from './components/templates/TemplateContent.vue';

export default {
  name: 'App',

  components: {
    TemplateContent
},

  data: () => ({
    //
  }),
}
</script>
