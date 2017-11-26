Vue.component('book-all', {
  template: `
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
      <tr v-for="book in books">
        <td></td>
        <td>{{book.author}}/td>
        <td>{{book.category}}</td>
        <td>$ {{book.harga}}</td>
        <td><a class="btn btn-danger btn-lg" href="#">edit</a></td>
        <td><a class="btn btn-danger btn-lg" href="#">delete</a></td>
      </tr>

    </tbody>
  </table>
  `,

  props:['books']
})
