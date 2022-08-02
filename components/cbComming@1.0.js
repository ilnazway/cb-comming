

const TestComponent = {
  props: ['title'],
  template: `<h4>{{ title }}</h4>`
};

const StyledInput = `
  .title {
    color: red;
  }
`;

const CommingComponent = {
  components: {
    'blog-post': {
      props: ['title'],
      template: `<h4>{{ title }}</h4>`
    }
  },
  
  setup() {
    const inputData = Vue.ref();
    const value2 = Vue.ref();

    return { inputData, value2 }
  },

  template: /*html*/`
    <div>Block</div>
    <blog-post title="Test5"></blog-post>
  `
};

const commingPage = Vue.createApp({
  components: {
    // 'style-test': {
    //   template:`
    //     <style>
    //       .title {
    //         font-size: 30px;
    //       }
    //     </style>
    //   `
    // },
    "styled-input": StyledInput,
    'blog-post': {
      props: ['title'],
      template: `<h4>{{ title || 'Title' }}</h4>`
    },
    'test-block': {
      components: {
        
      },
      props: ['title'],
      template: /*html*/`
      <style>
          .title {
            font-size: 30px;
          }
        </style>
        <styled-input>7</styled-input>
        <h4>{{ title }}</h4>
      `
    }
  },

  setup() {

    return {
      createComponentName: _ => 'blog' + '-post',
    }
  },

  data() {
    return {
      styleCss: {
        color: 'red',
        fontSize: '13px',
      }
    }
  },

  mounted() {
    console.log('ok');

      var css_text = `
        .title{
            color: red;
        }
      `;
      var css = document.createElement('style');
      css.type='text/css';
      css.setAttributeNode( document.createAttribute('scopped') );
      css.appendChild(    document.createTextNode( css_text )     );
      document.querySelector('.title').appendChild(   css     );
  },

  template: /*html*/`
    <div class="title" :class="{styleCss: true}">Block</div>
    <style-test></style-test>

    <component
      :is="createComponentName()"
      title="Title 15"
    ></component>
  `,
  style: /*css*/ `
  .title {
    font-size: 20px;
  }
  `
});
commingPage.component('blog-post', {
  props: ['title'],
  template: `<h4>{{ title }}</h4>`
});
// commingPage.styles.globed(StyledInput);
// commingPage.use(primevue.config.default);
commingPage.mount('#cb-comming1');