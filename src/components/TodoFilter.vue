<!-- =========================================================================================
  File Name: TodoFilter.vue
  Description: Filter Todo List as All , Active and Completed
========================================================================================== -->

<template>
  <div>
    <a
      class="ml-3 text-sm cursor-pointer hover:text-gray-700 dark:hover:text-gray-100"
      :class="ToDoFilter == 'All' ? 'text-blue-300' : ''"
      @click="SetToggleTodoList('All')"
      >All</a
    >
    <a
      class="ml-3 text-sm cursor-pointer hover:text-gray-700 dark:hover:text-gray-100"
      :class="ToDoFilter == 'Active' ? 'text-blue-300' : ''"
      @click="SetToggleTodoList('Active')"
      >Active</a
    >
    <a
      class="ml-3 text-sm cursor-pointer hover:text-gray-700 dark:hover:text-gray-100"
      :class="ToDoFilter == 'Completed' ? 'text-blue-300' : ''"
      @click="SetToggleTodoList('Completed')"
      >Completed</a
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoFilter",
  computed: {
    ToDoFilter() {
      return this.$store.state.ToDoFilter;
    },
  },
  methods: {
    ...mapMutations(["ToggleTodoList"]),

    SetToggleTodoList(el) {
      this.ToggleTodoList(el);
    },
  },
};
</script>
