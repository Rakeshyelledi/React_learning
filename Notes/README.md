# React Cheatsheet

This cheatsheet provides a quick reference for fundamental React concepts.

-----

## 1\. Introduction to React

**React** is a JavaScript library for building user interfaces, particularly single-page applications where data changes over time. It's declarative, component-based, and efficient, allowing developers to create large web applications that can change data without reloading the page.

-----

## 2\. DOM Disadvantages

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. However, directly manipulating the DOM can be:

  * **Slow:** Frequent direct DOM manipulations are computationally expensive, especially for complex UIs.
  * **Inefficient:** It often leads to unnecessary re-renders of parts of the UI that haven't actually changed.
  * **Complex:** Managing UI updates and states with direct DOM manipulation can become very difficult in large applications.

-----

## 3\. Why Do We Need React?

React addresses the disadvantages of direct DOM manipulation by providing:

  * **Efficiency:** It optimizes UI updates, leading to faster and smoother user experiences.
  * **Declarative Programming:** You describe *what* the UI should look like for a given state, and React figures out *how* to make it happen. This makes code easier to understand and debug.
  * **Component-Based Architecture:** Encourages building UIs from small, isolated, and reusable pieces of code called components.
  * **Virtual DOM:** A key feature that helps achieve efficient updates.

-----

## 4\. Reconcilation

**Reconciliation** is the process by which React updates the actual DOM to match the desired UI output, as described by your components' render methods. When a component's state or props change, React:

1.  Compares the new Virtual DOM tree with the previous one.
2.  Identifies the minimal set of changes needed to update the real DOM.
3.  Applies only those necessary changes to the actual DOM, making updates highly efficient. This process is often called "diffing."

-----

## 5\. JSX

**JSX (JavaScript XML)** is a syntax extension for JavaScript. It allows you to write HTML-like code directly within your JavaScript files.

  * **Benefits:** Makes UI code more readable and intuitive, as it visually represents the structure of your components.
  * **Compilation:** JSX is not standard JavaScript and needs to be transpiled (e.g., using Babel) into regular JavaScript that browsers can understand.
  * **Expressions:** You can embed JavaScript expressions within JSX using curly braces `{}`.

<!-- end list -->

```jsx
// Example JSX
const element = <h1>Hello, {name}!</h1>;
```

-----

## 6\. Props

**Props (short for properties)** are a mechanism for passing data from a parent component to a child component.

  * **Read-Only:** Props are **immutable** within the child component; a child component should never modify its own props.
  * **Flow:** Data flow in React is generally **unidirectional** (from parent to child).
  * **Usage:** Props are used to customize the appearance or behavior of a child component.

<!-- end list -->

```jsx
// Parent Component
function Welcome() {
  return <Greeting name="Alice" />;
}

// Child Component
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

-----

## 7\. Lists

**Lists** in React are used to render collections of data (e.g., an array of items).

  * **Mapping:** You typically use the JavaScript `map()` array method to transform an array of data into an array of React elements.
  * **Keys:** Each item in a list **must have a unique `key` prop**. Keys help React efficiently identify which items have changed, been added, or been removed. They are crucial for performance and preventing rendering issues.

<!-- end list -->

```jsx
// Example List
function ItemList(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

-----

This cheatsheet should be a great resource for your future revisions\! Let me know if you'd like to elaborate on any specific topic.