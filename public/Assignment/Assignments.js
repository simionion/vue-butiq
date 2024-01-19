import AssignmentList from './AssignmentList.js';
import AssignmentCreate from "./AssignmentCreate.js";
import {partition} from "../utils.js";

export default {
    components: {AssignmentCreate, AssignmentList},
    template: `
      <section class="flex flex-wrap sm:flex-nowrap justify-evenly gap-4">
        <assignment-list :assignments="filters.inProgress" title="In Progress">
          <assignment-create @add="addAssignment"></assignment-create>
        </assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed" can-hide></assignment-list>

      </section>
    `,

    data() {
        return {
            assignments: [],
            newAssignment: '',
        }
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => this.assignments = assignments)
            .catch(error => console.log(error))
    },

    computed: {
        filters() {
            const [inProgress, completed] = partition(this.assignments, assignment => !assignment.complete);
            return {inProgress, completed}
        }
    },
    methods: {
        addAssignment(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name,
                complete: false,
            });
        }
    }
}
