import { useEffect } from "react";

let ChildComponent = ({title}) => {

    let onDestory = () => {
        console.log("Component closed...." + title); // component unmount
    }
    let onInit = () => {
        console.log("Component loaded...." + title); // component mount
    // API
    // Cuurent URL
    // Values reset
    // Varibales intialize
        return onDestory;
    }

    useEffect(onInit);
    
    return (
        <>
            <p> { title } </p>
        </>
    )
}

export default ChildComponent;