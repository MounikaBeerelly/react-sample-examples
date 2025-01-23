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
    - prevents cross-site scripting.

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

**Props** - Passing argument to a function.

**Config driven UI** - our websites driven by data/config.

**Keys** - keys are unique identifier, which are used to identify the which item is inserted, deleted and updated in an array.
- index: we can use index as key. Its not recommended to use index as keys.
- https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

**State** : 

## React Hooks :
- React is efficient/faster in DOM manipulation.
- React uses virtual DOM.
- Hooks are normal Javascript utility functions, written by facebook developers.
- There are 2 very important hooks:
    - useState() hook
    - useEffect() hook
- **useState hook**: Superpowerful state variables in react
    - It maintains the state of the component.
    - Pass the default value to the variable in the useState hook.
    - Whenever the state variable updates, React re-renders the component.
    - `const [state, setState] = useState()`;
    - Whenever the state variable changes, setState function triggers and updates the component.

**Reconciliation Alogorithm** also known as React Fiber
   - ***VirtualDOM*** is a visual representation of actual DOM. It is kind of a normal JavaScript object.
   - ***Diff Algorithm*** 
    - This new algorithm came in React 16.
    - Whenever there is any change in state variable, React finds the difference between the previous virtualDOM and updated virtualDOM. Then it will calculate the difference and renders the changes.