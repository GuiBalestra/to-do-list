export const mixin = {
    data() {
        return {
          textField: "",
          list: [],
          selected: [],
          requestedItems: []
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
    
          this.$http
            .post("https://vuejs-http-ca04c.firebaseio.com/data.json", newItem)
            .then(
              response => {
                console.log(response);
              },
              error => {
                console.log(error);
              }
            );
        },
        deleteSelected() {
          this.list = this.list.filter(todo => {
            return !this.selected.includes(todo.id);
          });
          this.selected = [];
        }
      },
      fetchData() {
        this.$http
          .get("https://vuejs-http-ca04c.firebaseio.com/data.json")
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.requestedItems = resultArray;
          });
      },
      name: "ToDoList"
}