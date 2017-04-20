<template>
   <div>
     <header-search></header-search>
     <home-content></home-content>
     <footer-menu></footer-menu>
   </div>
</template>

<script>
  import Search from 'views/home/search'
  import Footer from 'views/home/footer'
  import Content from 'views/home/content'

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
