import imgSample from "../assets/investment-calculator-logo.png";

export default function Header(){
    return(
        <header id="header">
            <img src={imgSample}/>
            <h1>Investment Calculator</h1>
        </header>
    )
}