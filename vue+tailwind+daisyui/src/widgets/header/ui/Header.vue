<template>
  <header>
    <div class="container flex items-center justify-between py-5">
      <h2 class="xl:text-4xl xl:font-bold">Todo List</h2>
      <div class="flex items-center">
        <label class="input input-bordered flex items-center gap-2">
          <input
            v-model="search"
            type="text"
            class="grow"
            placeholder="Search"
          />
          <button
            @click="
              () => {
                console.log(search);
              }
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </label>
      </div>
      <button class="btn btn-primary items-center font-medium text-white">
        Add
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const search = ref<string>("");
</script>
