import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      IsDark: true,
      ToDoFilter : 'All',
      TodoList: [
        { order: 1, id: 1, task: "Complete Online Javascript Course", IsComplete: true, status : true },
        { order: 2, id: 2, task: "Jog arounf the park 3X", IsComplete: false, status : true },
        { order: 3, id: 3, task: "10 minutes meditation", IsComplete: false, status : true },
        { order: 4, id: 4, task: "Read for 1 Hour", IsComplete: false, status : true },
        { order: 5, id: 5, task: "Pick up groceries", IsComplete: false, status : true },
        { order: 6, id: 6, task: "Complete Todo app on Frontend Mentor", IsComplete: false, status : true },
      ]
      },
      mutations: {
        ToggleTheme (state) {
          state.IsDark = ! state.IsDark
        },
        ToggleTodoList(state,data){
          state.ToDoFilter = data
        },
        UpdateTodoList(state,data){
          state.TodoList = data
        },
        ClearTodoList(state){
          state.TodoList = []
        },
        TodoCompleted(state,data){
          var todo =  state.TodoList.find(el => el.id == data.id)
          Vue.set(todo,'IsComplete', !todo.IsComplete)
        },
        DeleteTodo(state,data){
          var todo =  state.TodoList.find(el => el.id == data.id)
          Vue.set(todo,'status', false)
        },
        AddTodoList(state,data){
          var Todo = {
            order: state.TodoList.length + 1,
            id: state.TodoList.length + 1,
            task:data,
            IsComplete : false,
            status : true
          }
          state.TodoList.unshift(Todo)
        },
        SelectAllTodo(state , data){
          state.TodoList.map(el => el.IsComplete = data)

        }
      },
      actions: {
      
      },
      getters:{
        TodoListLength(state) {
          return state.TodoList.filter(el => !el.IsComplete && el.status).length
        },
        FilteredTodoList(state) {
          return state.TodoList.filter(el => el.status)
        }
      }
})