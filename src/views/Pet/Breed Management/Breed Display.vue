<template>
  <div>
    <HeaderComponent />
    <BreedDisplayComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import BreedDisplayComponent from "../../../components/Pet/Breed Management/Breed Display Component.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    BreedDisplayComponent,
  },
  name: "breeddisplay",
};
</script>
<style>
</style>