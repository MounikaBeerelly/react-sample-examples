1. **CDN Links**: with CDN links, write react in html file
   - core react file
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
   - performing DOM operations
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

- CDN links are not a good way to use in react application.
- React.createElement is used to create React elements. React element is normal JavaScript object.

- **JSX** : JavaScript XML
    - JSX is not HTML inside Javascript. Combination of HTML and JavaScript.
    - JSX is HTML/XML like syntax (looks like HTML).
    - We can build React applications without JSX. But JSX makes developers life easy.
    - JSX transpiled before it reaches the JS engine.
    - Write attributes in JSX as camelcase.
    - If we are writing multiple lines of code, wrap that code with round brackets.
    - prevents cross-side scripting.

- **Babel** :
    - Opensource JavaScript compiler/transpiler.
    - Converts JSX code into react code (browser understandable language).
    - Babel converts JSX into React.creteElement

## Components:
1. **Class Based Components** - Uses JS classes
2. **Functional Components** - USes JS functions
    - Just a normal Javascript function which returns some JSX code (React element).
    - create any component, name it with capital letter.

**Component Composition** : component inside another component
    - Composing one component into another