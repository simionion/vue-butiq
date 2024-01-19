export default {
    template: `
      <form @submit.prevent="add">
        <div class="border border-gray-600 text-black grid grid-cols-3">
          <input v-model="newAssignment" type="text" placeholder="New assignment" class="p-2 col-span-2"/>
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },
    emits: ['add'],
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    },
}
