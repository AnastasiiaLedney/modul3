<template>
  <section class="control">
    Вибрано фото {{ selected }}
     </section>
  <div class="wrap">


    <ul v-if="filtredPhotos.length > 0">
      <photo-template
        v-for="b in filtredPhotos"
        :key="b.Id"
        class="photovie"
        v-on:click="selectPhoto(b._id)"
        v-bind:photo="b"
      >
      </photo-template>
    </ul>
    <p v-if="photos.length == 0">Йде завантаження</p>
  </div>
</template>

<script>
import PhotoTemplate from "./PhotoTemplate.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    PhotoTemplate,
  },
  data() {
    return {
      selected: null,

      Photos: [],
     
    };
  },
  async mounted() {
    try {
      this.photos = (await axios.get("https://localhost:3443/api/photo")).data;


    } catch (err) {
      console.log(err);
    }
  },
  methods: {
  
    sortedPhotosByAuthor()
{ function ComparePhotos(author1,author2){

if(author1.Author>author2.Author){
return 1;
}
if(author1.Author<author2.Author)
 
   return -1;
   
 if(author1.Author>author2.Author)
 
   return 1;
   

 if(author1.Author<author2.Author)
 
   return 1;
 
 
   return 0;
 

}
  
  return [...this.photos].sort(ComparePhotos);
},

  sortPhotosByLikes() {
      this.photos.sort((photo1, photo2) => (photo1.Likes > photo2.Likes ? 1 : -1));
    },

    addComment() {
      this.photo.Comments.push(this.newComment);
    },
    showHideComments() {
      this.showComments = !this.showComments;
    },
    selectPhoto(id) {
      this.selected = id;
    },
   
  },
  computed: {
    sortedPhotos() {
      function ComparePhotos(photo1, photo2) {
        if (photo1.Likes > photo2.Likes) return 1;
        if (photo1.Likes < photo2.Likes) return -1;
        if (photo1.Author > photo2.Author) return 1;
        if (photo1.Author < photo2.Author) return -1;
        return 0;
      }
      return [...this.photos].sort(ComparePhotos);
    },
    
    selectedIndex() {
      if (this.selected)
        return this.photos.findIndex((photo) => photo._id == this.selected);
      return -1;
    },
   
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  position: relative;
}

.wrap {
  position: relative;
}
</style>
