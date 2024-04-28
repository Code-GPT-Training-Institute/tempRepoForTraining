import { useEffect } from 'react';
import { useRef } from 'react'
import { useState } from 'react'
import ChildComponent from './ChildComponent';
import AppComponent from './AppComponent';

function App({name}) {
  const [power, setPower] = useState(0)
  const [toggleBoolean, setToggleBoolean] = useState(false)
  let powerInputRef = useRef();

  let handleClickEvent = () => {
    setPower(Number(powerInputRef.current.value))
  }
  
  let onDestory = () => {
    console.log("Component closed...." + name); // component unmount
  }
  let onInit = () => {
    console.log("Component loaded...." + name); // component mount
    // API
    // Cuurent URL
    // Values reset
    // Varibales intialize
    return onDestory;
  }

  useEffect(onInit);

  return (
    <>
      <div>
        <h1>Functional Component</h1>

        <h3> POWER: {power}</h3>

        <button onClick={ () => setPower((power) => power + 10)}>increase power</button>
        <br/>

        <input onChange={ (evt) => setPower(Number(evt.target.value))} type='range' />

        <input ref={ powerInputRef } type='number' />
        <button onClick={ handleClickEvent }>submit</button>

        <button onClick={ () => setToggleBoolean(!toggleBoolean)}>toggle</button>

          { toggleBoolean ? <ChildComponent title="comp1" /> : <ChildComponent title="comp2" /> }
        {/* } */}
        {/* <button onClick={ () => setPower(Number(powerInputRef.current.value))}>submit</button> */}

        <AppComponent power = { power }  toggleBoolean = { toggleBoolean } />
      </div>
    </>
  )
}

export default App
