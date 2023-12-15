const Button = (props) => {
    const color = props.color ? props.color : "primary";
    const ghost = props.ghost ? "btn-outline-" : "btn-";

    return (
        <button onClick={props.action} className={`btn ${ghost}${color} d-flex align-items-center gap-3 justify-content-center`}>
            {props.children}
        </button>
    );
};
export default Button;