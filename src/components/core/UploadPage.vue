<template>
  <form class="form" @submit.prevent="uploadHandler">
    <div>
      <h1 class="uploadHeaderText">Upload Image</h1>
    </div>

    <div>
      <input
        type="text"
        id="inputCaption"
        name="caption"
        placeholder="Enter a caption"
        v-model="caption"
      />
      <label htmlFor="inputCaption">Caption</label>
    </div>

    <div>
      <input
        type="text"
        id="inputTags"
        name="tags"
        placeholder="Enter a tags"
        v-model="tags"
      />
      <label htmlFor="inputTags">Tags</label>
    </div>

    <div>
      <input @change="getFile" type="file" id="inputFile" name="fileName" />
      <label htmlFor="inputFile">File</label>
    </div>

    <button class="btn">Upload</button>
  </form>
</template>

<script>
import firebase from 'firebase'
import { db,storage } from "../../firebase.js";
export default {
  data() {
    return {
      caption: "",
      tags: "",
      file: "",
    };
  },
  methods: {
    uploadHandler() {
      const objFromLocalStorageAsAString = localStorage.getItem("user");
      const user = JSON.parse(objFromLocalStorageAsAString);
      //   console.log(this.file);
      //   console.log(this.tags);
      //   console.log(this.caption);
         storage.ref(`images/${this.file.name}`).put(this.file).on(
        "state_changed",
        (snapshot) => {
            console.log(snapshot);
        },
        (err) => {
          console.log(err);
          alert(err.message)
        },
        () => {
          //when that complite that will execute
          storage
            .ref('images')
            .child(this.file.name)
            .getDownloadURL()
            .then((url) => {
              db.collection('posts').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),//upload img in top of db and home page
                caption: this.caption,
                tags: this.tags,
                imgUrl: url,
                username: user.displayName,
                email: user.email
              })
            })
            .then(() => {
              this.$router.push("/")
            })
        }
      )
    },
    getFile(event) {
      if (event.target.files.length == 0) {
        return;
      }
      this.file = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.butn {
  border: 1px solid #fa8a72;
  border-radius: 5px;
  color: #000;
  text-align: center;
  text-decoration: none;
  height: 25px;
  width: 25px;
  background-color: #fa8a72;
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

.uploadHeaderText {
  width: 32%;
  margin: auto;
  object-fit: contain;
  display: block;
  font-family: cursive;
}

input {
  width: 50%;
  margin: auto;
  object-fit: contain;
  display: block;
  margin-top: 3%;
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

.progress {
  width: 50%;
  margin: auto;
  object-fit: contain;
  display: block;
  color: #fa8a72;
}
label {
  margin-left: 45%;
}
</style>