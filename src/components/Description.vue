<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <button
            class="btn btn-danger"
            :disabled="!hasSelectedItem"
            @click="deleteSelected"
          >Excluir marcadas</button>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item active">Descrição</li>
            <li class="list-group-item" v-for="todo in list" :key="todo.id">
              <input type="checkbox" v-model="selected" :value="todo.id">
              {{ todo.id }} {{ todo.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoList from "./ToDoList.vue";
import ToDo from "../models/ToDo";
export default {
  methods: {}
};
</script>

