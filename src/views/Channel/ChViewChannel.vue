<template>
  <div>
    <Navbar />
    <ChHeader title="Channel Your Pet" />
    <b-container fluid="sm">
      <b-container class="bv-example-row">
        <b-row>
          <b-col><ChCard btntitle="Channel"/></b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChCard from "../../components/Channel/Ch_Card.vue";

export default {
  name: "ChViewChannel",
  components: {
    Navbar,
    ChHeader,
    ChCard,
  },

  props: {
    title: String,
  },
};
</script>

<style></style>
