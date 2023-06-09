
<template>
  <Base>
  <v-container fill-height fluid>
    <v-container>
      <div class="row no-gutters mx-auto" style="max-width: 900px;">
        <div class="col text-center">
          <h1>Email Signature Generator</h1>
        </div>
        <div class="col">
          <v-btn-toggle v-model="cardType">
            <v-btn @click="cardType = 0">
              MAIN
            </v-btn>
            <v-btn @click="cardType = 1">
              CEMETERY
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
      <EmailCard v-if="cardType == 0" />
      <CemeteryEmailCard v-else />
    </v-container>
  </v-container>
  </Base>
  <!-- <router-view /> -->
</template>

<script>
// import EmailCard from "./components/EmailCard.vue";
import EmailCard from "./components/avelica-email-signature/EmailCard.vue";
import CemeteryEmailCard from "./components/avelica-email-signature/CemeteryEmailCard.vue";
export default {
  name: "EmailSignature",
  data() {
    return {
      cardType: 'main'
    }
  },
  components: {
    EmailCard,
    CemeteryEmailCard,
    Base: () => import("./views/Layout/Base.vue"),
  },
};
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
