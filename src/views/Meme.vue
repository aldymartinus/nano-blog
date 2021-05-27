<template>
  <div class="container">
    <div class="imageList" v-for="(item,index) in imgUrl" :key="index">
      <img :src=item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meme',
  data(){
    return{
      imgUrl: [],
    }
  },
  async mounted(){
    await axios.get("https://aldymartinus.github.io/cdn/src/meme-collection.json")
    .then(res => this.imgUrl = res.data)
  }
}
</script>

<style scoped>
  .container{
    scroll-snap-type: y mandatory;
    height: 100%;
    scrollbar-width: none;
    overflow: auto;
  }
  .imageList{
     display: flex;
     justify-content: center;
  }
  .imageList img{
    scroll-snap-align: start;
    width: 100%;
    margin: 0.5rem;
  }
  ::-webkit-scrollbar{
    width: 0;
  }
</style>
