<template>
  <div v-if="uni">
    <h1>University Name - {{ uni.name }}</h1>
    <p class="cap">{{ uni.abbreviation }}</p>
    <a :href="uni.websitelink">{{ uni.name }}</a>
  </div>
  <div v-else>
    <p>Loading abeg wait...</p>
  </div>
</template>

<script>
export default {
  name: "UniListDetails",
  props: ["abbreviation"],
  data() {
    return {
      uni: null,
    };
  },
  mounted() {
    fetch("https://nigeria-uni.herokuapp.com/api/v1/" + this.abbreviation)
      .then((res) => res.json())
      .then((data) => (this.uni = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
  .cap{
    text-transform: uppercase;
  }
</style>
