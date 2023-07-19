Q1 -->

Component:
-a regular component in React.
-always re-renders when its parent updates, regardless of whether props or state have changed.

purecomponent:
-a special type of component in React.
-performs a shallow comparison of props and state before re-rendering.
-avoids unnecessary re-renders when props and state remain the same.

-in simple terms, purecomponent automatically optimizes rendering by preventing unnecessary re-renders, while a regular component always re-renders whenever its parent updates.

example --- consider a todolist app that renders a list of regularcomponent and pureregularcomponent using a parent component. Using component will cause all the regularcomponent instances to re-render whenever any item in the list is updated, even if the updates are unrelated. This results in pointless re-renders and decreased performance.


Q2  -->

it can be dangerous to combine Context and ShouldComponentUpdate in React. Context makes it easier for components to share data, and ShouldComponentUpdate speeds up rendering by avoiding needless re-renders. The risk is from ShouldComponentUpdate's potential ignorance of Context changes, which could result in unforeseen re-renders. If ShouldComponentUpdate prevents a component's rendering, that component may miss important updates. Performance problems, inconsistent UI, and other bugs may result from this. 



q3 -->

Callback functions: By calling a callback function that was handed down from the parent through props, the child component can pass data to its parent. Calling the callback when the child needs to provide data effectively sends the information back to the parent.


Props: A prop may be passed from the parent component to the child, who may then change the value of the prop as required. The information given by the child can be accessed as soon as the parent receives the updated prop.

Context: By utilizing the Context API, the child component can give its parent data without explicitly giving props. The parent uses the given context to retrieve the shared data, facilitating seamless data transfer throughout the component tree.



Q4 -->

shouldComponentUpdate: Using this lifecycle function to determine when a component should update itself. Performance can be optimized by determining whether to permit a re-render or not by comparing the present props and state with the upcoming ones.a

React.memo: Use React.memo to wrap functional components to avoid needless re-renders. React.memo retains the component's properties in memory and only re-renders them when they change. This increases efficiency because you don't have to render the same components using the same props twice.



Q5 -->


a fragment in React allows grouping multiple JSX elements without introducing extra DOM elements. It is necessary when a component can only return a single parent element. Fragments help maintain a clean HTML structure, especially in cases like tables or lists.

However, using fragments carelessly could cause the app to crash. React won't be able to uniquely identify each fragment because fragments are not stable across renderings, which could cause unexpected behavior and possibly app faults. When employing fragments in a list context,we need to make sure to utilize stable and distinct keys to enable appropriate rendering and prevent problems.



Q6 -->

"withAuthentication" HOC: This HOC extends a component's authentication functionality. If the user is not logged in, it leads them to the login page. Components wrapped with "withAuthentication" receive access to authentication data and can implement logic dependent on the authentication status of the user. Such an example i came across when i was working on SSO using AWS Amplify.

"withLoading" HOC: This HOC gives a component a loading state. The component displays a loading spinner when data is being fetched. The loading status is deleted once the data is ready, improving the user experience during data call.

"withErrorHandling" HOC: This HOC provides a component with error handling capabilities. It detects unexpected failures, shows error messages, and gracefully manages errors to keep the app running in the event of an exception.

Q7 -->

Promises: When dealing with promises, you handle exceptions using .catch() method. Promises use .then() to handle successful outcomes and .catch() to catch any errors that occur during the promise execution. If an exception occurs inside the promise, it will reject, and the control will flow to the nearest .catch() block.


fetchData()
  .then(response => {
  })
  .catch(error => {
  });


Callbacks: In callbacks, errors are typically handled as the first argument in the callback function. When a function encounters an error, it passes the error object as the first argument to the callback, allowing you to handle the error accordingly.

function fetchData(callback) {
  if (error) {
    callback(error, null);
  } else {
    callback(null, data);
  }
}

fetchData((error, data) => {
  if (error) {
  } else {
  }
});


Async...await: With async...await, error handling resembles the try...catch block in synchronous code. You place the code that could potentially throw an error inside a try block, and in case of an error, it's caught in the catch block. It allows writing asynchronous code that looks similar to synchronous code with clearer error handling.

async function fetchData() {
  try {
    const response = await fetch(url);
  } catch (error) {
  }
}


Q8 -->

In React, the setState method takes two arguments: an object representing the state changes and an optional callback function that gets executed after the state has been updated and the component has re-rendered.

The reason why setState is asynchronous is to improve performance and prevent unnecessary re-renders. When you call setState, React batches multiple state updates together and then performs a single re-render. This way, if you have multiple setState calls within a single function, they are combined into a single update, avoiding redundant re-renders and optimizing performance.



Q9 -->

Replace extends React.Component with a functional component declaration using the function keyword or the arrow function syntax.

Identify and move the state variables to the top of the function using React's useState hook. Define a state variable for each state property.

Replace lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount, with appropriate hooks. For example, useEffect replaces componentDidMount and componentDidUpdate, while useEffect with a clean-up function can replace componentWillUnmount.

Rewrite any custom methods as separate functions inside the functional component.

Update any event handlers to use the new function syntax.

If the component uses this.props, replace it with the parameter in the functional component.

Return the JSX elements directly from the function instead of using a render() method.


Q10 --> 

CSS Modules: Use CSS Modules to write component-specific styles in separate CSS files and import them into your components. This way, the styles remain scoped to the component, avoiding global style conflicts.

Styled-components: Create styled components using tagged template literals, keeping styles self-contained within the component. Styled-components allow writing CSS directly inside JavaScript files. For example:

Inline CSS : With style object style={{color:"000"}}


Q11 -->

To render an HTML string coming from the server in a React component, we can use the dangerouslySetInnerHTML attribute. However, we should  ensure that the HTML string is safe to render to prevent potential security vulnerabilities such as cross-site scripting (XSS) attacks.