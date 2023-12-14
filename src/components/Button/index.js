const Button = (props) => {
    const color = props.color ? props.color : "primary";
    const ghost = props.ghost ? "btn-outline-" : "btn-";
    const handleButtonClick = (e) => {
        alert('Clicked the button');
    }
    return (
        <button onClick={handleButtonClick} className={`btn ${ghost}${color} d-flex align-items-center gap-3 justify-content-center`}>
            {props.children}
        </button>
    );
};
export default Button;