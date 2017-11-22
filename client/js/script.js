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
    password: ''
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },

    halo: function() {
      this.message = 'haloo'
    },

    getBook: function() {
      axios.get('http://localhost:3000/api/book/all')
      .then((data)=>{
        this.books = data.data;
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
      axios.post('http://localhost:3000/api/transaction/beli', {
          customer: "5a13e953fe91b8304aca0341",
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
      axios.post('http://localhost:3000/api/user/signup', {
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
    }
  },

  created () {
    this.getBook()
  }

})
