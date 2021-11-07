<template>
  <Form @onSubmit="handleSubmit"/>
  <List :items="notes" @onRemove="handleRemove"/>
</template>

<script>
import Form from "../components/Notes/Form";
import List from "../components/Notes/List";
export default {
  components: {
    Form,
    List
  },
  data() {
    return {
      notes: [
        {
          title: 'Task 1',
          tags: ['tag 1', 'tag 2'],
        },
        {
          title: 'Task 2',
          tags: ['tag 1', 'tag 2'],
        },
        {
          title: 'Task 3'
        }
      ]
    }
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    getNotes() {
    const localNotes = localStorage.getItem("notes");
    if (localNotes) {
      this.notes = JSON.parse(localNotes);
    }
    }
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
}
</script>