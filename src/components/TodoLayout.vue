<!-- =========================================================================================
  File Name: TodoLayout.vue
  Description: All Todo Components Displayed from the Main Layout
========================================================================================== -->

<template>
  <div class="flex flex-col h-full">
    <div class="flex-none h-20">
      <div
        class="flex flex-wrap justify-between text-white h-full content-center"
      >
        <div class="text-3xl">TODO</div>
        <div>
          <svg
            @click="ToggleTheme"
            width="26"
            height="26"
            class="cursor-pointer inline-block mb-1"
            v-html="GetMode"
          ></svg>
        </div>
      </div>
    </div>

    <div class="w-full flex-none items-center justify-center">
      <add-todo />
    </div>

    <div class="flex-grow h-40">
      <div class="flex flex-col h-full">
        <div
          class="flex-grow bg-white dark:bg-gray-800 overflow-y-auto hide-scrollbar "
        >
          <TodoDragLayout />
        </div>

        <div
          class="bg-white  dark:bg-gray-800 flex-none h-14 rounded-bl text-gray-500 border-t border-gray-200"
        >
          <div class="grid grid-cols-2 sm:grid-cols-4 h-full gap-4">
            <div
              class="self-center hover:text-gray-700 dark:hover:text-gray-100"
            >
              <todo-count :Count="ToDoLength" />
            </div>

            <div class="col-span-2 self-center hidden sm:block">
                <todo-filter />
            </div>

            <div class="self-center">
              <a
                class="cursor-pointer hover:text-gray-700 dark:hover:text-gray-100"
                @click="ClearTodoList"
                >Clear All</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-none justify-center rounded-md flex-wrap content-center h-10 w-full bg-white block sm:hidden mt-5 dark:bg-gray-800"
    >
    <todo-filter />
    </div>
  </div>
</template>

<script>
import TodoDragLayout from "./TodoDragLayout.vue";
import TodoFilter from "./TodoFilter.vue";
import AddTodo from "./AddTodo.vue";
import TodoCount from "./TodoCount.vue";

import { mapMutations } from "vuex";

export default {
  name:"TodoLayout",
  computed: {
    GetMode() {
      if (this.$store.state.IsDark) {
        return `<path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>`;
      } else {
        return `<path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>`;
      }
    },
    ToDoLength() {
      return this.$store.getters.TodoListLength;
    },
  },
  methods: {
    ...mapMutations([
      "ToggleTheme",
      "ClearTodoList",
    ]),
  },
  components: { 
    TodoDragLayout,
    TodoFilter,
    AddTodo,
    TodoCount
    },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
