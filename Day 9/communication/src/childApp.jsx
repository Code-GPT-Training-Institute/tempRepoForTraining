let ChildApp = ({power, version, setPower}) => {
    return (
        <>
            <p> Child is loading....</p>

            Power: {power}
            Version: {version}

            <input value = { power } onChange={ (evt) => setPower(Number(evt.target.value))} type="range"/>
        </>
    )
}

export default ChildApp;