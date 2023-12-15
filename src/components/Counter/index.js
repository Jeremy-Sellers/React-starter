import Button from "../Button";
import {useState} from "react";



const Counter = () => {
    const [count,setCount] = useState(0); //first value, name of data/ second value the function name that handles the first value
    const handleDecrement = () =>{
        setCount(count-1);
    }
    const handleIncrement = () => {
        setCount(count+1);
    }

  //  Passes the event handler as a prop to the Button file
  //  Button file handles the onClick functionality utilizing props.action
  return (
      <div className="d-flex align-items-center gap-3">
          <Button action={handleDecrement} ghost={true} color="secondary">-</Button>
          <span>{count}</span>
          <Button action={handleIncrement} ghost={true} color="secondary">+</Button>
      </div>
  );
}

export default Counter;