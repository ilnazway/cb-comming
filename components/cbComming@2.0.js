/**
 * Использование primeFlex, primeVue
 */

const CommingComponent = {
  setup() {
    const value1 = Vue.ref('');

    Vue.onMounted(() => {
      
    })

    return { value1 };
  },
  
  data() {
    return {
      img: {
        test: 'pi-check'
      },
      styles: {
        comming: [
          'flex',
          'justify-content-center',
          'flex-column',
          'align-items-center',
          'min-h-screen'
        ],
        input: [
          'w-12',
          'md:w-8',
          'line-height-4'
        ],
        message: [
          'w-12',
          'md:w-8',
        ]
      },
      comming: {
        title: 'Отмечаемся, проходим..',
      },
      message: {
        success: 'Успешно, вы отметились вовремя',
        info: 'Сегодня праздник волшебников',
        warn: 'Зафиксировано опоздание',
        error: 'Произошла ошибка. Ваш приход не отметился'
      }
    }
  },

  methods: {
    focusInput() {
      let input = document.querySelector('#input_code');
      input.focus();

    },
    sendValue() {
      console.log(this.value1);
    }
  },

  mounted() {
    this.focusInput();
  },

  template: /*html*/`
    <div class="comming" :class="styles.comming">
      <h1 class="comming__title">{{ comming.title }}</h1>
      <p-inputtext id="input_code" :class="styles.input" @blur="focusInput" @paste="sendValue()" type="password" v-model="value1"></p-inputtext>
      <p-message :class="styles.message" :life="5000" :sticky="false" severity="success">{{ message.success }}</p-message>
      <p-message :class="styles.message" :icon="'pi-apple'" severity="info">
        {{ message.info }}
      </p-message>
      <p-message :class="styles.message" class="pi pi-check" severity="warn">{{ message.warn }}</p-message>
      <p-message :class="styles.message" :icon="'hidden'" severity="error">{{ message.error }}</p-message>
    </div>
  `,
  components: {
      "p-inputtext": primevue.inputtext,
      "p-message": primevue.message,
  }
}

const commingPage = Vue.createApp(CommingComponent);
commingPage.use(primevue.config.default);
commingPage.mount('#cb-comming2');