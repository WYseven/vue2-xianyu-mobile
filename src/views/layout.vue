<template>
   <div>
     <header-search></header-search>
     <home-content></home-content>
     <footer-menu></footer-menu>
   </div>
</template>

<script>
  import Search from 'views/home2/search'
  import Footer from 'views/home2/footer'
  import Content from 'views/home2/content'

  export default {
    name: 'layout',
    components: {
      'header-search': Search,
      'footer-menu': Footer,
      'home-content': Content
    }
  }
</script>

<style>

</style>
