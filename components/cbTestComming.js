const template = {
  setup() {

    Vue.onMounted(function() {
      console.log('mountend');
    });

    return {};
  },
}

const cbTestComming = Vue.createApp()