const Button = (props) => {
    const color = props.color ? props.color : "primary";
    let ghost;
    let size;
    let dashed;
    let disabled;

    let icon;

    if (props.icon === "round"){
        icon = "round-icon"
    } else if (props.icon === "square"){
        icon = "square-icon";
    }

    if (props.ghost === "true"){
        ghost = "btn-outline-";
    } else {
        ghost = "btn-";
    }

    if (props.dashed === "true"){
        dashed = "dashed";
    } else {
        dashed = "";
    }

    if (props.disabled === "true"){
        disabled = "disabled";
    } else {
        disabled = "";
    }

    if (props.size === "large"){
         size = "lg";
    } else if (props.size === "small"){
         size = "sm";
    }

    return (
        <button onClick={props.action}
        className={
        `btn ${ghost}${color} ${dashed} 
         btn-${size} ${disabled} ${icon} d-flex align-items-center gap-3
         justify-content-center`}>
            {props.children}
        </button>
    );
};
export default Button;