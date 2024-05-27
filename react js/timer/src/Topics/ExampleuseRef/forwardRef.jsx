//wrong way to check comment out l1tol3
import { useRef } from 'react';

function MyInput(props) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />  //this is wrong
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
// This happens because by default React does not let a component access 
// the DOM nodes of other components. Not even for its own children!
//  This is intentional. Refs are an escape hatch that should be used sparingly.
//   Manually manipulating another component’s DOM nodes makes your code even more fragile.

// Instead, components that want to expose their DOM nodes have to opt in to that
//  behavior. A component can specify that it “forwards” its ref to one of its children. 
//  Here’s how MyInput can use the forwardRef API:

///CORRECT WAY TO USE
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
