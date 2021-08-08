<!-- =========================================================================================
  File Name: TodoItem.vue
  Description: Individual Todo Item with Checkbox and Cross
========================================================================================== -->

<template>
    <li class="flex justify-between items-center main-element mt-3">
          <div class="flex items-center" :class="{ 'line-through': false }">
                <base-checkbox  :val.sync="todo.IsComplete" @UpdateTodo="ToggleTodoItem(todo)" />
            <div
              class="
                capitalize
                ml-3
                text-sm 
                font-semibold
              "
              :class="todo.IsComplete ? 'line-through text-gray-300 dark:text-gray-700' : 'text-gray-600 dark:text-gray-400'"
              v-text="todo.task"
            ></div>
          </div>
          <div>
            <button class="show-on-hover" @click="DeleteTodo(todo)" >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </button>
          </div>
        </li>
</template>

<script>
import { mapMutations  } from 'vuex'

export default {
    name:"TodoItem",
    props:{
        todo :{
            type : Object
        },
        id:{
          type : Number
        }
    },
    methods: {
     ...mapMutations (['TodoCompleted','DeleteTodo']),
        ToggleTodoItem(todo){
          this.TodoCompleted(todo)
        },
    },
}
</script>

<style scoped>
 .show-on-hover {
   display : none
 }

.show-on-hover {
   display: none;
 }

 .main-element:hover .show-on-hover {
   display: block;
 }
</style>