<template>
    <ul>
      <li>  <router-link to="/"> Додому </router-link></li>
       <li> <router-link to="/about"> Про автора </router-link></li>
       <li> <router-link to="/fetch">Що таке Fetch API </router-link></li>
   </ul>
    <router-view></router-view>
    
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  async mounted() {
  
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cat-fact.herokuapp.com/facts");
    xhr.send();
    xhr.onloadend = () => {
      console.log(xhr);
      if (xhr.status == 200) {
        console.log(xhr.response);
      } else {
        console.log(xhr.statusText);
      }
    };
   
    try {
      let res = await fetch("https://cat-fact.herokuapp.com/facts");
      if (res.ok) {
        let facts = await res.json();
        console.log(facts);
      }
    } catch (err) {
      console.log(err);
    }
   
    try {
      let facts2 = (await axios.get("https://cat-fact.herokuapp.com/facts"))
        .data;
      console.log(facts2);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}

li  {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}


li :hover {
    background-color: #555;
    color: white;
}
</style>