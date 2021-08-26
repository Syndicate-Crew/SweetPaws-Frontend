<template>
  <div class="petmanagement">
    <HeaderComponent />
    <PetManagementDisplayComponent />
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '../../components/Footer/Footer.Component.vue';
import HeaderComponent from "../../components/Header/Header.Component.vue";
import PetManagementDisplayComponent from "../../components/Pet/Pet.Management.Display.Component.vue";
export default {
  name: "petmanagement",
  components: {
    PetManagementDisplayComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>