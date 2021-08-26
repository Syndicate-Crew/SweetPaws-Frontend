<template>
  <div>
    <HeaderComponent/>
    <PetManagementUpdateComponent />
    <FooterComponent/>
  </div>
</template>
<script>
import FooterComponent from '../../components/Footer/Footer.Component.vue';
import HeaderComponent from '../../components/Header/Header.Component.vue';
import PetManagementUpdateComponent from "../../components/Pet/Pet.Management.Update.Component.vue";
export default {
  components: { PetManagementUpdateComponent, HeaderComponent, FooterComponent },
  name: "petmanagement-update",
};
</script>
<style>
</style>