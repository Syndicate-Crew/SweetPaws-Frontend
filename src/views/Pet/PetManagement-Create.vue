<template>
  <div>
    <HeaderComponent />
    <PetManagementCreateComponent />
  </div>
</template>
<script>
import HeaderComponent from "../../components/Header/Header.Component.vue";
import PetManagementCreateComponent from "../../components/Pet/Pet.Management.Create.Component.vue";
export default {
  components: { PetManagementCreateComponent, HeaderComponent },
  name: "petmanagement-create",
};
</script>
<style>
</style>