<template>
    <div>
        <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Add New Books</h3>
        </div>
        <div class="panel-body">
            <form id="form" class="form-inline" v-on:submit.prevent="addBook">
            <div class="form-group">
                <label for="bookTitle">Title:</label>
                <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
            </div>
            <div class="form-group">
                <label for="bookAuthor">Author:</label>
                <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
            </div>
            <div class="form-group">
                <label for="bookUrl">Url:</label>
                <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
            </div>
            <input type="submit" class="btn btn-primary" value="Add Book">
            </form>
        </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>book</h3>
            </div>
            <div class="panel-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in books">
                    <td><a v-bind:href="book.url">{{book.title}}</a></td>
                    <td>{{book.author}}</td>
                    <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
import firebase from "firebase"
import toastr from 'toastr'
var config = {
  apiKey: "AIzaSyA2A9w_7GwwMsRTnKPOIz6SolXiTEIbNfM",
  authDomain: "myblog-api.firebaseapp.com",
  databaseURL: "https://myblog-api.firebaseio.com",
  // projectId: "myblog-api",
  storageBucket: "myblog-api.appspot.com",
  messagingSenderId: "435171214701"
};

let app = firebase.initializeApp(config)
let db = app.database()
let booksRef = db.ref("books")
export default {
    firebase: {
    books: booksRef
  },
  data() {
    return {
      newBook: {
        title: "",
        author: "",
        url: "http://"
      }
    };
  },
  methods: {
    addBook: function() {
      booksRef.push(this.newBook)
      this.newBook.title = ""
      this.newBook.author = ""
      this.newBook.url = "http://"
    },
    removeBook: function(book) {
      booksRef.child(book[".key"]).remove()
      toastr.success("Book removed successfully")
    }
  }
}
</script>

<style>

</style>
