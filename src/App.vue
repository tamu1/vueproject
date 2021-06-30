<template>
  <div id="app">
   <!-- <router-view></router-view>
    <div>{{text}}</div>
    <RootEmit @callParent="parentCalled" />-->
    <div style="display:block; margin:0 auto; text-align:center">
      <a href="/">Class</a> |
      <a href="/root-emit">Root Comp</a> |
      <a href="/hello-world">Hello World</a>
      <router-view></router-view>
      
      </div>

    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import RootEmit from "./components/RootEmit.vue";
import firstMixin from './mixins/firstMixin'


export default {
  name: 'App',
  mixins: [firstMixin],
  components: {
   // RootEmit
   
  //  HelloWorld
  },
  data() {
    return {
      text: ""
    }
  },
  created() {

  },
  mounted() {
    this.$root.$on("anyFunction",this.rootEmitted);
      this.$parent.$on("anyFunction",this.parentEmited);
      
      
      
    
 },
  methods: {
    rootEmitted() {
      alert("Root Emitted!");
    },
    parentEmitted() {
      alert("parent Emitted");
    },
    parentCalled(){
      alert("parent called");

    },

  }
}
</script>


