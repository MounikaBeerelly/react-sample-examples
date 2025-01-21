import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  => object => HTMLElement(render)

// react element
const jsxHeading = (
  <h1 is="heading" tabIndex="5">
    This is a JSX heading
  </h1>
);

const Title = () => {
  return (
    <h1 id="heading">This is a Title Component</h1>
  )
}

const number = 9234453;

// Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <Title /> {/* Component Composition */}
      <h1>This is a Functional Component</h1>
      {jsxHeading} {/* returning react element inside component */}
      {number}
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// render react element
root.render(jsxHeading);

// render react component
root.render(<HeadingComponent />);