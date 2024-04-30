import { useParams } from "react-router-dom";

let Employee = () => {

    let pathValues = useParams(); // pathvalues = { employeeId: 12 }
    return (
        <>
            <h1>Employee Component loaded.... {pathValues.employeeId || 0}</h1>
        </>
    )
}

export default Employee;