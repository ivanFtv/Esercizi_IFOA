const ButtonFunc = (props) => {

    const customStyle = {
        border: "3px solid black",
        marginBottom: "10px",
    }

    return (
        <button style={{ backgroundColor: props.bgColor || '', ...customStyle }}>{props.buttonText || "Bottone 1"}</button>
    )
}

export default ButtonFunc