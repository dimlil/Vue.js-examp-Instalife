<template>
  <!-- <button @click="postsShow">click</button> -->
  <div class="post" v-for="(post, i) in posts" v-bind:key="i">
    <div class="username">
      <img class="avatar" src="../../assets/avatar.jpg" alt="avatar" />
      <h3>{{ post.username }}</h3>
    </div>
    <img class="postImage" alt="post-image" :src="post.imgUrl" @click="parseLinkAndRedirect(post.imgUrl)" :style="{cursor: cursorType}"/>
    <h4 class="postText">
      <strong>{{ post.username }}</strong
      >: {{ post.caption }}
    </h4>
  </div>
  <div v-if="postNotFound">
    <h1>
      Nothing Found! To add post:
      <router-link to="/upload">Click Here</router-link>
    </h1>
  </div>
</template>

<script>
import { db } from "../../firebase.js";
export default {
  props: {
    tagsFromSearch: String,
  },
  data() {
    return {
      posts: [
        // {username: 'pesho', caption: 'hey', imgUrl:"asf"}
      ],
      postNotFound: false,
      cursorType: 'pointer',
    };
  },
  methods: {
    postsShow() {
      console.log(this.posts);
    },
    parseLinkAndRedirect(link){
      const ecodedLink=encodeURIComponent(link)
      this.$router.push(`/image/${ecodedLink}`)
    }
  },
  beforeMount: async function () {
    if (window.location.pathname == "/") {
      await db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          this.posts.push(documents);
        });
      //   console.log(this.posts[0]);
      this.posts = this.posts[0];
    }
    if (window.location.pathname == "/profile") {
      const objFromLocalStorageAsAString = localStorage.getItem("user");
      const user = JSON.parse(objFromLocalStorageAsAString);
      await db
        .collection("posts")
        .where("email", "==", user.email)
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          this.posts.push(documents);
        });
      //   console.log(this.posts[0]);
      this.posts = this.posts[0];
    }
  },
  created: async function () {
    if (window.location.pathname == "/search") {
      console.log();
      await db
        .collection("posts")
        .where("tags", "==", this.$parent.tags)
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          console.log(documents);
          this.posts.push(documents);
        });
      this.posts = this.posts[0];
    }
  },
  watch: {
    posts() {
      if (this.posts.length == 0) {
        this.postNotFound = true;
      } else {
        this.postNotFound = false;
      }
    },
  },
};
</script>

<style>
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