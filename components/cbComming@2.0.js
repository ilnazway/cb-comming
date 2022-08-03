/**
 * Использование primeFlex, primeVue
 */

const CommingComponent = {
  setup() {
    // const inputValue = Vue.ref('');

    // return { inputValue };
  },
  
  data() {
    return {
      inputValue: '',
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
          'line-height-3',
          'text-2xl'
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

  mounted() {
    this.focusInput();
    debounceInput: _.debounce(this.sendValue, 250);
    
  },

  methods: {
    focusInput() {
      let input = document.querySelector('#input_code');
      input.focus();
      setInterval(() => {
        if (document.activeElement.tagName == 'BODY') {
          input.focus();
        };
      }, 7000);
    },
    sendValue() {
      // console.log(e.target.value);
      // console.log(event.type + ' - ' + event.clipboardData.getData('text/plain'));
      console.log('ok');
    },
  },

  computed: {
    lookInput() {
      return this.inputValue !== '' ? `Good` : 'Lose';
    }
  },


  template: /*html*/`
    {{ lookInput }}
    <div class="comming" :class="styles.comming">
      <h1 class="comming__title">{{ comming.title }}</h1>
      <p-inputtext id="input_code" :class="styles.input" v-model="inputValue" @input="sendValue" type="password"></p-inputtext>
      <!-- <p-message :class="styles.message" :life="5000" :sticky="false" severity="success">{{ message.success }}</p-message>
      <p-message :class="styles.message" :icon="'pi-apple'" severity="info">
        {{ message.info }}
      </p-message>
      <p-message :class="styles.message" class="pi pi-check" severity="warn">{{ message.warn }}</p-message>
      <p-message :class="styles.message" :icon="'hidden'" severity="error">{{ message.error }}</p-message> -->
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