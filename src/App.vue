<template>
  <div id="app">
        <div class="grid-container">
            <div class="banner">
                <span class="title">nano-blog.</span>
                <span class="subtitle">Just for fun</span>
            </div>
            <div class="content">
                <router-view/>
            </div>
            <div class="nav">
                <router-link to="/meme-collection" class="material-icons">collections</router-link>
                <router-link to="/" class="material-icons">code</router-link>
                <router-link to="/tracklist" class="material-icons">audiotrack</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');

#app{
    user-select: none;
    width: 95%; 
    height: 50%;
    margin: 0 auto;  
}
.banner{
    margin-top: 0.5rem;
    font-family: 'Zilla Slab', serif;
}
.title{
    font-size: 2.5rem;
    background-color: #333;
    color: white;
}
.subtitle{
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
    width: fit-content;
    display: block;
    font-size: 1.7rem;
    background-color: #54ffbd;
    color: #333;
}
.content{
    border-radius: 5px;
    margin: 0.5rem 0;
    height: 69vh;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149);
}
.nav{
    display: flex;
    margin: 0.5rem 0;
    height:7vh;
    position: sticky;
    bottom: 0;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149);
}
.nav a{
    cursor: pointer;
    background-color: #54ffbd;
    color: #333;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-grow: 1;
}
.nav a{
  text-decoration: none;
}
.nav :hover{
    background-color: #333;
    color: #54ffbd;
    -webkit-transition: background-color 0.3s ease-in;
    -moz-transition: background-color 0.3s ease-in;
    -o-transition: background-color 0.3s ease-in;
    transition: background-color 0.3s ease-in;
}

@media screen and (min-width:900px) {
    #app{
        width: 30%;
        height: 100%;
        margin: 0 auto;
    }
    .nav{
        margin-top: 0.8rem;
        height:10vh;
    }
    .content{
        height: 70vh;
    }
}

@media screen and (max-width:360px) {
    .content{
        height: 59vh;
    }
    .nav{
        margin-top: 0.8rem;
        height:10vh;
    }
}
</style>
