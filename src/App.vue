<template>
  <div id="app">        
    <app-header/>
      <router-view></router-view>    
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

export default {
  name: 'app',
  components: {    
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style>
/*font*/
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
}

/*base*/
h1, h2{
  font-family: 'Montserrat', sans-serif;
}


*:focus {
    outline: none;
}

input:focus{
    outline: none;
}

ul li {
  list-style: none; 
}

.tick {
  color: #33c801;
}


/*nav*/
.navbar-nav__item{
  margin: 0 20px;
}

/*trade with us*/
.tradewithus{
  padding-top: 50px;
  margin-top: 50px;
}

.tradewithus__item{
   margin-bottom: 20px;
}

.tradewithus__title{
  margin-bottom: 50px;
}
</style>
