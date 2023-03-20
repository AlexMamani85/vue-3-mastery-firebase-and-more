<script>
import BaseCheckbox from "./BaseCheckbox.vue";

export default {
  props: {
    task: {
      type: Object,
      required: true,
      // validator(value) {
      //   return "Okay" === value;
      // }
    },
    done: Boolean,
    priority: Boolean,
    // id: {
    //   required: false,
    //   type: Number,
    //   validator(value) {
    //     return value >= 1 && value <= 100;
    //   },
    //   // default() {
    //   //   return [];
    //   // }
    // }
  },
  emits: ["update:done", "update:priority"],
  components: { BaseCheckbox },
};
</script>

<template>
  <div
    class="bg-white shadow-sm rounded-md text-gray-700 p-4"
    :class="{ 'opacity-25 line-through': task.done }"
  >
    <div>{{ task.description }}</div>
    <div class="py-4 bg-white">
      <BaseCheckbox
        class="mb-2"
        @update:model-value="$emit('update:done', $event)"
        :model-value="done"
        >Done
      </BaseCheckbox>

      <BaseCheckbox
        @update:model-value="$emit('update:priority', $event)"
        :model-value="priority"
        >Prioritized
      </BaseCheckbox>
    </div>
  </div>
</template>

<style></style>
