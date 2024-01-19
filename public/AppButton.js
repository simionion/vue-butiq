export default {


    template: `
      <button :class="{
		'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': type === 'primary',
        'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded': type === 'danger',
        'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded': type === 'success',
        'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded': type === 'secondary',
        'is-loading bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed': processing,
      }" :disabled="processing">
        <slot/>
      </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },


}
