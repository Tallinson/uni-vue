<template>
    <h1>Welcome to the list of Univeristies in Nigeria</h1>
    <div v-if="uniList.length">
        <div v-for="uni in uniList" :key="uni.abbreviation" class="uni">
            <router-link :to="{ name: 'UniListDetails', params:{ abbreviation: uni.abbreviation }}">
                <h2>{{ uni.name }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading data...</p>
    </div>
</template>
 
<script>
export default {
    name: 'UniList',
    data(){
        return {
            uniList: []
        }
    },
    mounted() {
        fetch('https://nigeria-uni.herokuapp.com/api/v1')
            .then(res => res.json())
            .then(data => this.uniList = data)
            .catch(err => console.log(err.message))
    }

}
</script>

<style scoped>
    .uni h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .uni h2:hover{
        background: #ddd;
    }
    .uni a{
        text-decoration: none;
    }
</style>