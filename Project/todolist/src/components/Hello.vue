<template>
  <div class="hello">
    {{msg}}
    {{datafromfather}}
    <input v-model="childmsg" v-on:keyup.enter="sendmessage"/>
  </div>
  
</template>

<script>
export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      childmsg:''
    }
  },
  props:['datafromfather'],
  methods:{
     sendmessage(){

        this.$emit('child-message',this.childmsg)
        this.childmsg = ''
     }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
