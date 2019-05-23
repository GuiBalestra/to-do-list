<template>
  <div class="container">
    <h1>Criar ToDo</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Descrição</label>
          <div class="input-group">
            <input type="text"
                   class="form-control"
                   placeholder="Ex.: Escovar os dentes"
                   v-model="todo.description">

            <div class="input-group-append">
              <button type="button" class="btn btn-secondary" @click="save">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDo from "../models/ToDo";

export default {
  name: "CreateToDo",
  data: () => ({
    todo: new ToDo(),
    database: 'https://vuejs-http-ca04c.firebaseio.com/toDos.json'
  }),
  methods: {
      reset() {
          this.todo = new ToDo();
      },

      save() {
          // salvar o this.todo no firebase e se der certo, resetar.
            this.$http
            .post(this.database, this.todo)
            .then(
              response => {
                console.log(response);
              },
              error => {
                console.log(error);
              }
            );

          this.reset();
          this.$router.replace({ name: 'ToDoList'});
      },
  }
};
</script>

<style>
</style>
