Vue.component('book-all', {
  template: `
  <div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>author</th>
          <th>Category</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>

        <!-- TABLE -->
        <tr v-for="(book, index) in books">
          <td>
            <div class="row">
              <div class="col-sm-3">
                <img :src="book.urlimage" class="img-rounded" alt="Cinque Terre" width="100%">
              </div>
              <div class="col-sm-6">
                <p>{{book.title}}</p>
              </div>
            </div>
          </td>
          <td>{{book.author}}</td>
          <td>{{book.category}}</td>
          <td>$ {{book.harga}}</td>
          <td><a class="btn btn-danger btn-lg" href="#" @click="ubah(index)" data-toggle="modal" data-target="#myModal">edit</a></td>
          <td><a class="btn btn-danger btn-lg" href="#" @click="hapus(index)">delete</a></td>
        </tr>

      </tbody>
    </table>
    <!-- modal untuk edit book -->
    
  </div>
  `,

  props:['books'],

  data: function() {
    return {
      nama: "wisnu"
    }
  },

  methods: {
    hapus: function(index) {
      this.$emit('delete-book', index)
    },

    ubah: function(index) {
      this.$emit('edit-book', index)
    }
  }

})
