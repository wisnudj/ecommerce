Vue.component('create-book', {
  template: `
  <form>
    <div class="form-group">
      <label for="title">title:</label>
      <input type="text" class="form-control" id="title">
    </div>
    <div class="form-group">
      <label for="author">author:</label>
      <input type="text" class="form-control" id="author">
    </div>
    <div class="form-group">
      <label for="category">Category:</label>
      <input type="text" class="form-control" id="category">
    </div>
    <div class="form-group">
      <label for="stok">Stok:</label>
      <input type="text" class="form-control" id="stok">
    </div>
    <div class="form-group">
      <label for="harga">Harga:</label>
      <input type="text" class="form-control" id="harga">
    </div>
    <div class="form-group">
      <label for="urlimage">urlimage:</label>
      <input type="text" class="form-control" id="urlimage">
    </div>
    <button type="submit" class="btn btn-default" @click="tambah">Create</button>
  </form>

  `,

  data: function() {
    return {
      title: '',
      author: '',
      category: '',
      stok: 0,
      harga: 0,
      urlimage: '',
      id: ''
    }
  },

  methods: {
    tambah: function() {
      axios.post('http://localhost:3000/api/book/add', {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        category: document.getElementById('category').value,
        stok: document.getElementById('stok').value,
        harga: document.getElementById('harga').value,
        urlimage: document.getElementById('urlimage').value
      }).then(function(response) {
        console.log(response)
      }).catch(function() {
        console.log(error);
      })
    }
  }

})
