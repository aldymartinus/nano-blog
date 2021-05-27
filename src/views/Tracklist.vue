<template>
  <div class="container">
    <div class="swipe">
      <p>👈 Swipe to the left</p>
    </div>
    <div v-for="(track,index) in tracklistArr" :key="index">
      <iframe :src="track"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tracklist',
  data(){
    return{
      tracklistArr: [],
    }
  },
  async mounted(){
    await axios.get("https://aldymartinus.github.io/cdn/src/tracklist.json")
    .then(res => this.tracklistArr = res.data);
  }
}
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  .container{
    scroll-snap-type: x mandatory;
    display: grid;
    scrollbar-width: thin;
    scrollbar-color: #54ffbd #333;
    grid-template-columns: repeat(99,100%);
    overflow: auto;
  }
  .container iframe{
    scroll-snap-align: start;
    border: none;
    width: 100%;
    height: 70vh;
  }
  .swipe{
    scroll-snap-align: start;
    font-size: larger;
    display:flex; 
    justify-content:center; 
    align-items:center; 
    font-family: 'Poppins', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 0;
    background: #333;
  }

  ::-webkit-scrollbar-thumb {
    background:#54ffbd;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }
  @media screen and (max-width:800) {
    .container{
    scroll-snap-type: x mandatory;
    display: grid;
    scrollbar-width: 0;
    grid-template-columns: repeat(99,100%);
    overflow: auto;
  }
  }
</style>