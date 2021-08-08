<!-- =========================================================================================
  File Name: MainPage.vue
  Description: Image Background with Todo Mounted
========================================================================================== -->

<template>
  <div class="flex flex-col justify-center items-center h-screen w-full mx-auto">
    <!-- Show Desktop Background Image -->
    <div  :style="{'background-image': `url(${require(`../assets/${BackGroundImage}`)})`}" class="hidden sm:block bg-gray-300 h-64 w-full  flex-none shadow-md bg-cover bg-center"></div>
    <!-- Show Mobile Background Image -->
    <div :style="{'background-image': `url(${require(`../assets/${BackGroundImageMobile}`)})`}" class="block sm:hidden bg-gray-300 h-64 w-full  flex-none shadow-md bg-cover bg-center"></div>
    <div class="w-11/12 sm:w-4/6 md:w-5/12 -mt-56 rounded-lg flex-grow overflow-hidden">
      <todo-layout />
    </div>
      <div class="flex-none flex justify-center h-16 text-gray-600 dark:text-white">
    <div class="self-center" >Drag and drop to reorder list</div>
  </div>
  </div>
</template>

<script>
import TodoLayout from "./TodoLayout.vue";
export default {
  name :"MainPage",
  components: { TodoLayout },
  computed:{
    BackGroundImage(){
      return this.$store.state.IsDark ? 'bg-desktop-dark.jpg' : 'bg-desktop-light.jpg'
    },
     BackGroundImageMobile(){
      return this.$store.state.IsDark ? 'bg-mobile-dark.jpg' : 'bg-mobile-light.jpg'
    }
  }
};
</script>