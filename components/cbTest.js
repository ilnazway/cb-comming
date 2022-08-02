const styles = [
/*css*/`
  .cb-test {
    color: red;
    font-weight: 700;
  }
`,
];

const template = /*html*/`
  <span class="cb-test">
    Hello, {{name}}
  </span>
`;



export default Vue.defineCustomElement({
  template,
  styles,
  props: {
    name: String,
  },
  setup(props) {
    const name = Vue.toRef(props, 'name');
    return { name };
  },
})