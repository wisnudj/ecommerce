var app = new Vue({
  el: '#app',

  data: {
    message: 'Hello Vue!',
    books: [],
    cart: [],
    checkout: [],
    totalprice: 0,
    username: '',
    email: '',
    password: '',
    transactions: '',
    title: '',
    author: '',
    category: '',
    stok: 0,
    harga: 0,
    urlimage: '',
    history: []
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },

    halo: function() {
      this.message = 'haloo'
    },

    getBook: function() {
      axios.get('http://35.197.130.250/api/book/all')
      .then((data)=>{
        this.books = data.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    getTransaction: function() {
      axios.get('http://35.197.130.250/api/book/all')
      .then((hasil)=>{
        this.transactions = hasil.data
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    addtocart: function(book) {

      function cariIndex(arr) {
        return arr._id == book._id
      }

      var indeks = this.cart.findIndex(cariIndex)

      if(indeks == -1) {
        book.quantity = 1
        book.subtotal = book.harga
        this.cart.push(book)
      }
      else {
        this.cart[indeks].quantity = this.cart[indeks].quantity + 1
        this.cart[indeks].subtotal = this.cart[indeks].harga * this.cart[indeks].quantity
      }

      this.checkout.push(book._id)
      this.totalprice = this.totalprice + book.harga
    },

    checkouttodb: function() {
      axios.post('http://35.197.130.250/api/transaction/beli', {
          customer: "5a15a65243ae782b5576fb96",
          totalprice: this.totalprice,
          book: this.checkout
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })

        this.checkout = []
        this.cart = []
        this.totalprice = 0
    },
    signup: function() {
      axios.post('http://35.197.130.250/api/user/signup', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      console.log(this.username, this.password, this.email);
    },

    createBook: function() {
      axios.post('http://35.197.130.250/api/book/add', {
        title: this.title,
        author: this.author,
        category: this.category,
        stok: this.stok,
        harga: this.harga,
        urlimage: this.urlimage
      }).then(function(response) {
        console.log(response)
      }).catch(function() {
        console.log(error);
      })
    },

    getAllTransaction: function() {
      axios.get('http://35.197.130.250/api/transaction/all')
      .then((hasil)=>{

        var data = hasil.data
        for(var i = 0; i < data.length; i++) {
          var tampungs = []
          for(var j = 0; j < data[i].items.length; j++) {
            function cariIndex(tampung) {
              return tampung._id == data[i].items[j]._id
            }

            var index = tampungs.findIndex(cariIndex)
            console.log(index);

            if(index == -1) {
              data[i].items[j].quantity = 1
              data[i].items[j].tanggal = new Date(data[i].createdAt).toLocaleDateString()
              tampungs.push(data[i].items[j])
            }
            else {
              tampungs[index].quantity++
            }
          }
          this.history.push(...tampungs)
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },

  created () {
    
    this.getBook()
    this.getAllTransaction()
  }

})
