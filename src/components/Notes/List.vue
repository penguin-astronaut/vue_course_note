<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in notes" :key="index">
        <div class="note-header">
          <p>{{ note.title }}</p>
          <span style="cursor: pointer" @click="removeNote(index)">&#10006;</span>
        </div>
        <div v-if="note.tags?.length" class="note-footer">
          <TagsList :items="note.tags" isPreview/>
        </div>
    </div>
  </div>
</template>

<script>
import TagsList from '../UI/TagsList'

export default {
  components: {
    TagsList
  },
  mounted() {
    this.$store.dispatch('loadNotes')
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes
    }
  },
  methods: {
    removeNote(index) {
      this.$store.dispatch('removeNote', index)
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
}
</style>
