<template>
  <div class="container">
    <h1>Lista de ToDos</h1>

    <div class="row">
      <div class="col">
        <div class="form-group">
          <button class="btn btn-primary" @click="navigateToCreate">Adicionar ToDo</button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-group">
          <button
            class="btn btn-danger"
            :disabled="!hasSelectedItem"
            @click="deleteSelected"
          >Excluir marcadas</button>
          <br>
          <br>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in toDos" :key="todo.id">
                <td> <input type="checkbox" :value="todo.id" v-model="selected"> {{ todo.id }}</td>
                <td>{{ todo.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDo from "../models/ToDo";
export default {
  name: "ToDotoDos",
  data() {
    return {
      toDos: [],
      selected: [],
      firebase: 'https://vuejs-http-ca04c.firebaseio.com/toDos.json'
    };
  },
  computed: {
    hasSelectedItem() {
      return this.selected.length > 0;
    }
  },
  methods: {
    navigateToCreate() {
      this.$router.replace({ name: "CreateToDo" });
    },
    deleteSelected() {
      // apagar os selecionados no firebase.

      this.selected = [];
      this.fetchToDos();
    },
    fetchToDos() {
      // buscar no firebase os toDos e jogar no this.toDos
      this.$http
        .get(this.firebase)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(new ToDo({ id: key, description: data[key].description }) );
          }
          this.toDos = resultArray;
        });
    }
  },
  beforeMount() {
    this.fetchToDos();
  }
};
</script>

<style>
</style>
