<template>
    <p> {{photo.Author}}</p>
    <img :src="photo.Cover">
    
</template>

<script>
import axios from "axios";

export default {
    props:{
        id:String
    },
    data(){
        return{
            photo:{

                Author:"",
                Cover:"",
            
            }
        }
    },
    async mounted(){
        
        
        try{
            let url = `https://localhost:3443/api/photo/${this.id}`;
            this.photo = (await axios.get(url)).data;
        } catch (err){
            console.log(err);
        }
    },

}
</script>