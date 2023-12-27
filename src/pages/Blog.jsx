import React from 'react';

const Blog = () => {
    return (
        <div className='lg:m-16 p-4'>
            <h2 className='text-2xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components.</h2>
            <p className='text-slate-700'><span className='text-xl font-semibold'>Controlled components:</span>
                In react, a controlled component is a component that is controlled by React state. A controlled component receives its current value and update callback via props, and the parent component manages the state the component. When a user interacts with the component, the parent component updates the component value. In a controlled component form data is handle by a react component.In controlled components Data flows from parent component to component <br />
                <span className='text-xl font-semibold'>Uncontrolled components:</span>Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM.
                An uncontrolled component is a component that maintains its own internal state.An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state.In uncontrolled components Data flows within the component.In uncontrolled component to access any value that has been entered we take the help of refs.
            </p>

            <h2 className='text-2xl font-semibold'>2. How to validate React props using PropTypes</h2>
            <p className='text-slate-700'>Props and PropTypes are important mechanisms for passing read-only attributes between React components.We use React props, short for properties, to send data from one component to another.If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.However, React has an internal mechanism for props validation called PropTypes</p>
            <p className='text-slate-700'> <span className='text-xl font-semibold'>Below are the validators for the basic data types:</span> <br />

                PropTypes.any: The prop can be of any data type <br />
                PropTypes.bool: The prop should be a Boolean <br />
                PropTypes.number: The prop should be a number.<br />
                PropTypes.string: The prop should be a string <br />
                PropTypes.func: The prop should be a function <br />
                PropTypes.array: The prop should be an array <br />
                PropTypes.object: The prop should be an object <br />
                PropTypes.symbol: The prop should be a symbol</p>
            <h2 className='text-2xl font-semibold'>3. Tell us the difference between nodejs and express js.</h2>
            <p className='text-slate-700'>
                <span className='text-xl font-semibold'>Node JS: </span>NodeJS is a JS runtime environment for running JavaScript programs and is used to build server-side applications. NodeJS is a cross-platform, free, and open-source javascript runtime environment that allows clients to quickly build web applications.Node JS is not a framework and it’s not a programming language.It is built on Google’s V8 engine.Written in C, C++, JavaScript.In Node JS Routing is not provided. <br />


                <span className='text-xl font-semibold'>Express JS: </span>Express JS is a Framework for Node with features and tools to simplify the server-side development.It makes it easier to organize your application’s functionality with middleware and routing. In Express JS have More features than Node JS.Express JS also Written in JavaScript.In Express JS Routing is provided.
            </p>
            <h2 className='text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h2>
            <p className='text-slate-700'>
             Custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications.Custom Hooks start with "use".React comes with some built-in hooks, the most commonly used custom hooks are useState, useRef, and useEffect. <br /> We create a custom hook to encapsulate and reuse logic within functional components.Custom hook promotes code reusability, readability, and maintainability by abstracting away complex logic into reusable units. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
            </p>
        </div>
    );
};

export default Blog;