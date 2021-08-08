import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      IsDark: true,
      ToDoFilter : 'All',
      TodoList: [
        { order: 1, id: 1, task: "HTML I", IsComplete: true, status : true },
        { order: 2, id: 2, task: "CSS", IsComplete: true, status : true },
        { order: 3, id: 3, task: "Responsive design", IsComplete: true, status : true },
        { order: 4, id: 4, task: "Git", IsComplete: true, status : true },
        { order: 5, id: 5, task: "JavaScript I", IsComplete: true, status : true },
        { order: 6, id: 6, task: "JavaScript II", IsComplete: false, status : true },
        { order: 7, id: 7, task: "Pull from computer 1", IsComplete: false, status : true },
        { order: 8, id: 8, task: "Walk to computer 2", IsComplete: false, status : true },
        { order: 9, id: 9, task: "Save on computer 2", IsComplete: false, status : true },
        { order: 10, id: 10, task: "Sort files", IsComplete: false, status : true },
        { order: 11, id: 11, task: "Plot data", IsComplete: false, status : true },
        { order: 12, id: 12, task: "Clean room", IsComplete: false, status : true },
        { order: 13, id: 13, task: "Get storage unit", IsComplete: false, status : true },
        { order: 14, id: 14, task: "Analysis", IsComplete: false, status : true },
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