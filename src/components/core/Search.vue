<template>
  <form @submit.prevent="searchHandler" class="form">
    <div>
      <h1 slass="searchHeaderText">Search</h1>
    </div>

    <div>
      <input
        type="text"
        id="inputTags"
        name="tags"
        placeholder="Enter a tag"
        v-model="tags"
        @input="hideChild"
      />
      <label htmlFor="inputCaption">Tag</label>
    </div>

    <button class="btn" type="submit" @click="search">Search</button>
  </form>
  <posts v-if="show" :tagsFromSearch="tags" />
</template>

<script>
import Posts from "../shared/Posts.vue";
export default {
  components: { Posts },
  data() {
    return {
      tags: "",
      show: false,
    };
  },
  methods: {
    search() {
      this.show = true;
    },
    hideChild(){
        this.show = false;
    }
  },
};
</script>

<style>
.searchHeaderText {
  width: 10%;
  margin: auto;
  object-fit: contain;
  display: block;
  font-family: cursive;
}

.btn {
  background-color: #fa8a72;
  color: white !important;
  border-color: #fa8a72 !important;
  border-radius: 10px;
  width: 15%;
  margin: auto;
  object-fit: contain;
  display: block;
}

.form {
  background-color: rgba(255, 255, 255, 0.479);
  padding: 2%;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px !important;
  border: solid;
  border-radius: 1rem;
  border-color: #fa8a72;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.712);

  max-width: 700px;
  margin: auto;
}

input {
  width: 50%;
  margin: auto;
  object-fit: contain;
  display: block;
}

h1 {
  margin-left: 25%;
  margin-bottom: 20px;
}

p,
h1,
label {
  font-family: cursive;
}

form label {
  display: block;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  margin-bottom: 2%;
}
.post {
  max-width: 500px;
  border: 2px solid #eeeeee;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 45px;
}
.postImage {
  width: 100%;
  object-fit: contain;
  border-bottom: 2px solid #eeeeee;
  border-top: 2px solid #eeeeee;
}
.postText {
  font-weight: normal;
  padding: 20px;
  margin: 0%;
}
.username {
  display: flex;
  align-items: center;
  padding: 20px;
}
.avatar {
  margin-right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>