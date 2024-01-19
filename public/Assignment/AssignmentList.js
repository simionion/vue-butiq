import Assignment from './Assignment.js';
import AssignmentTags from "./AssignmentTags.js";
import Panel from "../Panel.js";

export default {
    components: { Assignment, AssignmentTags, Panel },
    props: {
        assignments: Array,
        title: String,
        canHide: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            currentTag: 'all',
            show: true,
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(asg => asg.tags.includes(this.currentTag));
        }
    },
    template: `
      <panel class="mt-8 min-w-60 w-full md:max-w-80" v-show="show && assignments.length">
        <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">{{ title }} ({{ assignments.length }})</h2>
          <button v-show="canHide" @click="show = !show" type="button" >&times</button>
        </div>
        <assignment-tags
            :initial-tags="assignments.map(asg => asg.tags)"
            v-model:currentTag="currentTag"
        ></assignment-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-5">
          <assignment v-for="assignment in filteredAssignments" :assignment="assignment" :key="assignment.id"/>
        </ul>
  
         <slot></slot>

      </panel>`,


}
