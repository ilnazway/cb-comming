


// import { ref } from 'vue';

const commingPage = {
  setup() {
    const inputData = ref();
    const value2 = ref();

    return { inputData, value2 }
  },

  template: /*html*/`
    <div>
      <h5>Basic</h5>
      <InputText type="text" v-model="inputData" />
      <span :style="{marginLeft: '.5em'}">{{ inputData }}</span>

      <h5>Floating Label</h5>
      <span class="p-float-label">
          <InputText id="username" type="text" v-model="value2" />
          <label for="username">Username</label>
      </span>
    </div>
  `
};

// Vue.createApp(commingPage)
//     .use(primevue.config.default)
//     .mount('#test');