<template>
    <div class="container">
      <div v-for="(project,index) in urlArr" :key="index" class="item-container">
        <a :href="project.url" target="_blank">
          <span class="item">
            <img :src="project.icon">
            <p>{{project.title}}</p>
          </span>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Code',
  data(){
    return{
      urlArr: [],
    }
  },
  async mounted(){
    await axios.get("https://aldymartinus.github.io/cdn/src/project-list.json")
    .then(res => this.urlArr = res.data);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  .container{
    scroll-snap-type: y mandatory;
    height: 100%;
    scrollbar-width: none;
    overflow: auto;
  }
  .item-container a{
    scroll-snap-align: start;
    text-decoration: none;
    color: #333;
  }
  .item{
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149);
    margin: 0.8rem;
    display: flex;
    flex-direction: row;
    transition: transform ease-in 0.2s;
  }
  .item:hover{
    transform: scale(1.1);
  }
  .item img{
    width: 40px;
    margin-left: 2rem;
  }
  .item p{
    font-size: medium;
    margin: auto auto;
    font-family: 'Poppins', sans-serif;
  }
</style>