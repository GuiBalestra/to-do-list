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
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck">
        <label class="custom-control-label" for="customCheck">Excluir marcadas</label>
      </div>
    </div>

    <div>
      
    </div>

    <p>{{ textField }}</p>
    <p>{{ list }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textField: '',
      list: []
    };
  },
  methods: {
    addItem() {
      this.list.push(this.textField);
    },
    deleteItem() {

    }
  },
  name: "ToDoList"
};
</script>

<style>

</style>
