<template>
  <div class="container">
    <h1>To Do List</h1>
    <to-do-list></to-do-list>
    <div class="col-md-6">
      <div class="form-group">
        <button class="btn btn-primary" @click="navigateToDescription">Mostrar Descrição</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "app",
  components: {
    ToDoList
  },
  methods: {
    navigateToDescription() {
      this.$router.push({ name: "description" });
    }
  }
};
</script>

<style>
</style>
