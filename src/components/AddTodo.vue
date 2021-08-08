<!-- =========================================================================================
  File Name: AddTodo.vue
  Description: CheckBox to Select All Todos , Add a New Todo
========================================================================================== -->
<template>
    <div>
        
      <div
        class="w-full mx-auto flex flex-row rounded bg-white  dark:text-white  dark:bg-dark-desaturated-blue shadow-lg p-3   overflow-hidden"
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
            class="py-2 text-sm  bg-white w-full dark:bg-dark-desaturated-blue rounded-md pl-10  focus:outline-none "
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
        this.$emit('ScrollToTop')
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