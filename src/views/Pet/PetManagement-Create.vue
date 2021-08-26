<template>
  <div>
    <HeaderComponent />
    <PetManagementCreateComponent />
    <FooterComponent/>
  </div>
</template>
<script>
import FooterComponent from '../../components/Footer/Footer.Component.vue';
import HeaderComponent from "../../components/Header/Header.Component.vue";
import PetManagementCreateComponent from "../../components/Pet/Pet.Management.Create.Component.vue";
export default {
  components: { PetManagementCreateComponent, HeaderComponent, FooterComponent },
  name: "petmanagement-create",
};
</script>
<style>
</style>