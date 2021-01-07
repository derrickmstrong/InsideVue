// New Vue instance
const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello World!',
  },
});

// Bind
const app2 = new Vue({
  el: '#app-2',
  data: {
    title: "Message says 'Hello again'",
  },
});

// Conditionals
const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  },
});

// For Loop
const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{ item: 'Cook' }, { item: 'Clean' }, { item: 'Code' }],
  },
});

// Handling User Input
const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello World',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
});

// Two-way Data Binding
const app6 = new Vue({
  el: '#app-6',
  data: {
    message: '',
  },
});

// Composing with Components
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Buy Milk' },
      { id: 1, text: 'Buy Cake mix' },
      { id: 2, text: 'Buy Eggs' },
    ],
  },
});

const app8 = new Vue({
  el: '#app-8',
  data: {
    workoutRoutine: [
      { id: 0, text: 'Run a mile' },
      { id: 1, text: 'Lift weights' },
      { id: 2, text: 'Situps' },
      { id: 3, text: 'Pushups' },
    ],
  },
});
