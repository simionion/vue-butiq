import AppButton from "./AppButton.js";
import Assignments from "./Assignment/Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {
        'assignments': Assignments,
        'app-button': AppButton,
        'panel': Panel,
        'app-select-button': {
            emits: ['change'],
            template: `
              <div>
                <label class="w-full m-4 p-4">
                  Select type:
                  <select class="border-2 m-4 p-4" v-model="type" @change="$emit('change', type)">
                    <option value="primary">Primary</option>
                    <option value="danger">Danger</option>
                    <option value="success">Success</option>
                    <option value="secondary">Secondary</option>
                  </select>
                </label>
              </div>
            `,
            data() {
                return {
                    type: 'primary'
                }
            }
        },
        'assignments-list-item': {},
        'accordion': {},
    },
    data() {
        return {
            type: 'primary',
        }
    }
}
