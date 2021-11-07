<template>
  <div class="note-form-wrapper">
   <form class="note-form" @submit.prevent="onSubmit">
      <textarea 
        type="text" 
        v-model="value" 
        placeholder="Type note" 
        required />
      <TagsList :items="tags" :activeItems="activeTags" @onItemClick="handleTagClick"/>
      <button class="btn btnPrimary">Add Task</button>
    </form>
  </div>
 
</template>

<script>
import TagsList from '../UI/TagsList'

export default {
  components: {
    TagsList
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      activeTags: new Set()
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', {
        title: this.value,
        tags: Array.from(this.activeTags)
      })
      this.value = ''
      this.activeTags.clear()
    },
    handleTagClick(item) {
      this.activeTags.has(item) ? this.activeTags.delete(item) : this.activeTags.add(item);
    }
  }
}
</script>

<style lang="scss">
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin: 0;
  }
}
.note-form-wrapper {
  display: flex;
  justify-content: center;
}
</style>