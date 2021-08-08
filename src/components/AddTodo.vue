<!-- =========================================================================================
  File Name: AddTodo.vue
  Description: CheckBox to Select All Todos , Add a New Todo
========================================================================================== -->

<template>
    <div>
        
      <div
        class="w-full mx-auto flex flex-row rounded bg-white text-gray-600 dark:text-white  dark:bg-gray-800 shadow-lg p-3 text-gray-800  overflow-hidden"
      >
        <div class="self-center">
          <base-checkbox :val="SelectAll" @UpdateTodo="SelectAllTodoMethod" />
        </div>
        <div class=" w-full">
          <input
            @keyup.enter="AddToTodoList"
            v-model="Todo"
            type="text"
            id="todo"
            class="w-full pl-3 pr-10 py-2 bg-white text-gray-600 dark:text-white  dark:bg-gray-800  hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Create a new todo..."
          />
        </div>
      </div>
      <div class="h-6">
        <div class="bg-gray-600 bg-opacity-50" v-if="show || Todo.length > 2">
          <small class="text-xs text-gray-100" v-if="Todo.length > 2"
            >Press Enter To Submit</small
          >
          <small class="text-xs text-red-800" v-else-if="show"
            >Enter minimum of 3 characters to submit</small
          >
        </div>
      </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'AddTodo',
  data() {
    return {
      show: false,
      SelectAll: false,
      Todo: "",
    };
  },
    methods: {
    ...mapMutations([
      "ToggleTheme",
      "ClearTodoList",
      "AddTodoList",
      "SelectAllTodo",
    ]),

    AddToTodoList() {
      if (this.Todo.length > 2) {
        this.AddTodoList(this.Todo);
        this.Todo = "";
        this.show = false;
      } else {
        this.show = true;
      }
    },
    SelectAllTodoMethod() {
      (this.SelectAll = !this.SelectAll), this.SelectAllTodo(this.SelectAll);
    },
  },
}
</script>