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
 - Whenever a state variable update, react triggers a reconciliation cycle (re-renders the component)

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
    - Always call the useState hook inside and top of the functional component.
    - Never create useState hook inside the if-else condition and for loops. It will create inconsistency in the program.
- **useEffect hook**:
    - It is a normal function, it contains 2 arguments - callback function and dependency array.
    - once the component rendered, the callback function called.
    - `useEffect( () => { }, []);`
    - ***fetch*** fetch data from api
    - if no dependency array => useEffect is called every render.
    - if dependency array is empty, useEffect is called only initial render (just once).
    - If dependency array contains some state, useEffect is called everytime whenever the state changes.

**Reconciliation Alogorithm** also known as React Fiber
   - ***VirtualDOM*** is a visual representation of actual DOM. It is kind of a normal JavaScript object.
   - ***Diff Algorithm*** 
    - This new algorithm came in React 16.
    - Whenever there is any change in state variable, React finds the difference between the previous virtualDOM and updated virtualDOM. Then it will calculate the difference and renders the changes.

**Routes** : react-router-dom library
- `createBrowserRouter` is the recommended router for all the react applications.
- react-router-dom creates error page by default.
- useRouteError hook is used to give the complete details about error.
- `outlet component` is replaced the component.
- `Link` is wrapper over anchor tag. It is a superpower given by react-router-dom.
- **two types of routing in web apps**
1. Client side routing: 
    - with one page, we can interchange components.
2. Server side routing: Load the component with network call.

## Class Based Components:
 - Never directly update the state variables.
- **Life cycle Methods**:
   -  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    1. Mounting
        - `constructor()` method called first
        - then `render()` method called
        - `ComponentDidMount()` once the component is completely mounted, then ComponentDidMount() method called.
        - ComponentdidMount() is used to make the api calls, .
    2. Updating
    3. UnMounting
        - ComponentWillUnMount() is called when when removing the component

- **Modularity**: Breakdown the code into small pieces of modules.
- Code become readable, reusable and testable
- **Code Splitting/Chunking/Dynamic Bundling/Lazy Loaing**: breakdown the app into smaller chunks. Render the modules whenever it is needed. This is also called on-demand loading.