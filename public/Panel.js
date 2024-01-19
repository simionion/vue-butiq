export default {
    template: `
      <div class="p-4 rounded m-1 border"
           :class="{
             'bg-white border-gray-300 text-black': theme === 'white',
             'bg-gray-700  border-gray-600 text-white': theme === 'dark',
		 }">
        <h2 v-if="$slots.heading" class="font-bold mb-2">
          <slot name="heading"></slot>
        </h2>

        <slot></slot>
      </div>
    `,
    props: {
        theme: {
            type: String,
            default: 'dark',
        }
    }
}
