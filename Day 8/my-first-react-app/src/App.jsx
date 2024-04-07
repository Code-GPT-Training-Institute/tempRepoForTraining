import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1000) // State hook // count = 0;

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App


// let sayHello = function() {
//   console.log("Hello");
// }

// let executeHello = function(fun) {
//   fun();
// }

// console.log(sayHello);
// console.log(sayHello());
// executeHello(sayHello);
