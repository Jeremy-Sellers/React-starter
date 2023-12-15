import styled from "styled-components";

const BigCircle = (props) => {
    return (
        <OuterCircle style={{
            backgroundColor: props.color
        }}>
            <span>{props.text}</span>
        </OuterCircle>
    )
}

const OuterCircle = styled.div`
    aspect-ratio: 1/1;
    width:150px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    background-color:red;
    border-radius:50%;
    border: 5px solid #ffffff;
    text-transform: uppercase;
    span{
    font-weight:700;
    color:#ffffff;
    font-size: 1.5rem;
    }
`

export default BigCircle;