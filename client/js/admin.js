var app = new Vue({
  el: "#app",

  data: {
    books: [],
    users: [],
    transactions: [],
    halo: 'halo',
    currentView: 'book-all',
    title: '',
    author: '',
    category: '',
    stok: 0,
    harga: 0,
    urlimage: '',
    id: ''
  },

  methods: {
    getBook: function() {
      axios.get('http://35.197.130.250/api/book/all')
        .then((response) => {
          this.books = response.data
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    },

    deleteBook: function(index) {
      axios.delete('http://localhost:3000/api/book/delete/' + this.books[index]._id).then((response) => {

        this.books.splice(index, 1)
      }).catch((err) => {
        console.log(error);
      })
    },

    populateBook: function(index) {
      this.title = this.books[index].title
      this.author = this.books[index].author
      this.category = this.books[index].category
      this.stok = this.books[index].stok
      this.harga = this.books[index].harga
      this.urlimage = this.books[index].urlimage
      this.id = this.books[index]._id
      console.log('yeh');
    },

    editBook: function(index) {
      axios.put('http://localhost:3000/api/book/edit/' + this.id, {
        title: document.getElementById('etitle').value,
        author: document.getElementById('eauthor').value,
        category: document.getElementById('ecategory').value,
        stok: document.getElementById('estok').value,
        harga: document.getElementById('eharga').value,
        urlimage: document.getElementById('eurlimage').value
      }).then(function(response) {
        console.log(response)
      }).catch(function() {
        console.log(error);
      })
    },

    getUser: function() {
      axios.get('http://35.197.130.250/api/book/all')
        .then((response) => {
          this.books = response.data
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },

  created: function() {
    // atur currentView component apakah ingin menampilkan semua buku, transaksi, users

    if(this.currentView == "book-all") {
      this.getBook()
    }

    else if(this.currentView == "user-all") {
      this.getUser()
    }

  }
})
