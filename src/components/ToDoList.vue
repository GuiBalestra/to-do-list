<template>
  <div class="container">
    <h1>To Do List</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Descrição</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Ex.: Escovar os dentes"
              v-model="textField"
            >

            <div class="input-group-append">
              <button type="button" class="btn btn-secondary" @click="addItem">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>

    <div>
      <button
        class="btn btn-danger"
        :disabled="!hasSelectedItem"
        @click="deleteSelected"
      >Excluir marcadas</button>
    </div>
    <br>

    <div>
      <div >
        <ul class="list-group">
        <li class="list-group-item active" color="secondary">Descrição</li>
          <li
            class="list-group-item"
            v-for="todo in list"
            :key="todo.id">
            <input type="checkbox" v-model="selected" :value="todo.id">
            {{ todo.id }} {{ todo.description }}
          </li>
        </ul>
      </div>
    </div>

    <!-- <table class="table table-dark">
      <thead>
        <tr>
          <th colspan="1"></th>
          <th>Descrição</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="todo in list" :key="todo.id">
          <td><input type="checkbox" v-model="selected" :value="todo.id"></td>
          <td>{{ todo.id }} {{ todo.description }}</td>
        </tr>
      </tbody>
    </table> -->

    <br>
    <p>{{ selected }}</p>
    <p>{{ hasSelectedItem ? 'true' : 'false' }}</p>
  </div>
</template>

<script>
import ToDo from "../models/ToDo";

export default {
  data() {
    return {
      textField: "",
      list: [],
      show: false,
      selected: []
    };
  },
  computed: {
    hasSelectedItem() {
      return this.selected.length > 0;
    }
  },
  methods: {
    isValid(item) {
      const isRepeated =
        this.list.filter(i => {
          return i.description === item.description;
        }).length > 0;

      return !isRepeated;
    },
    addItem() {
      const newItem = new ToDo({
        id: Date.now(),
        description: this.textField
      });
      const isValid = this.isValid(newItem);

      if (!isValid) {
        alert("Tem valor repetido!");
        return;
      }

      this.list.push(newItem);
    },
    deleteSelected() {
      this.list = this.list.filter(todo => {
        return !this.selected.includes(todo.id);
      });
      this.selected = [];
    },
    isEmpty() {
      if (list.length == 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  },
  name: "ToDoList"
};
</script>

<style>
</style>
