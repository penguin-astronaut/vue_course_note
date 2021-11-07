<template>
  <div class="wrapper">
    <Header title="Vue"/>
    <div class="wrapper-content">
      <div class="container">
       <router-view />
      </div>
      
    </div>
   
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>