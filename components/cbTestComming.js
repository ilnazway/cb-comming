const template = {
  setup() {

    Vue.onMounted(function() {
      console.log('mountend');
    });

    const msg = Vue.ref('Тестовое сообщение!');
    const check = Vue.ref(true)

    return { msg, check };
  },
  data() {
    return {
      classObj: {
        display: 'block',
      }
    }
  },
  methods: {
    turnCheck() {
      const condition = !this.check;
      this.check = condition;
    }
  },
  template: /*html*/`
    <h2 :title="msg">{{ msg.toLocaleUpperCase() }}</h2>
    <input v-model="msg">
    <p v-if="check">Many text</p>
    <input :style="classObj" :class="{'di-block': check}" type="checkbox" :checked="check" @click="turnCheck()">
  `,
  styles: /*css*/`
    .di-block {
      display: block;
    }
  `,
}

const cbTestComming = Vue.createApp(template);
cbTestComming.mount('#cb-comming-test');

const app = Vue.createApp({})
app.component('my-component', {
  template: '<p class="foo bar">Привет</p>'
});
app.mount('#cb-comming3');