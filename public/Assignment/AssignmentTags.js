export default {
    template: `
      <div class="flex gap-2 flex-wrap">
        <button
            :class="{'border-blue-500 text-blue-500': currentTag === tag}"
            :key="tag"
            @click="$emit('update:currentTag', tag)"
            class="border rounded px-1 py-px text-xs"
            v-for="tag in tags"
        >{{ tag }}
        </button>
      </div>

    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return [...new Set(['all', ...this.initialTags.flat()])];
        }
    },
}
