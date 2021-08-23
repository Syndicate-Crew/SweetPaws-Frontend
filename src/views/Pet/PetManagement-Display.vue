<template>
    <div class="petmanagement">
        <pet-management-display-component/>
    </div>
    
</template>

<script>
import PetManagementDisplayComponent from '../../components/Pet/Pet.Management.Display.Component.vue';
export default {
	name: "petmanagement",
    components:{
        PetManagementDisplayComponent
    }
};
</script>