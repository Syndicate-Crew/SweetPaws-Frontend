<template>
  <div>
    <HeaderComponent/>
    <PetDisplayComponent />
    <FooterComponent/>
  </div>
</template>
<script>
import FooterComponent from '../../components/Footer/Footer.Component.vue';
import HeaderComponent from '../../components/Header/Header.Component.vue';
import PetDisplayComponent from "../../components/Pet/Pet.Display.component.vue";
export default {
  components: { PetDisplayComponent,HeaderComponent, FooterComponent },
  name: "petdisplay",
}
</script>
<style>
</style>