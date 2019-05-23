import CreateToDo from './components/CreateToDo.vue';
import ToDoList from "./components/ToDoList.vue";

export const routes = [
    {
        path: '/',
        name: 'ToDoList', 
        component: ToDoList,
    },
    {
        path: '/todo',
        name: 'ToDoList', 
        component: ToDoList,
    },
    {
        path: '/todo/create',
        name: 'CreateToDo', 
        component: CreateToDo,
    }
]