<template>
  <div v-if="uniList">
    <h1>{{ uniList.name }}</h1>
    <p>{{ uniList.abbreviation }}</p>
    <p>{{ uniList.websiteLink }}</p>
  </div>
</template>

<script>
export default {
    name: 'UniListDetails',
    props: ['abbreviation'],
    data(){
      return {
        uniList: null
      }
    },
    mounted() {
        fetch('http://localhost:8000/api/' + this.abbreviation)
            .then(res => res.json())
            .then(data => this.uniList = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>