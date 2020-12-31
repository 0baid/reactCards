import React, {useState}from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function MyCards() {

    const [state, setstate] = useState({
        cvc:"",
        expiry:"",
        name:"",
        number:""
    });

    function handleInputChanges(e){
        setstate({
            ...state,
            [e.target.name]:e.target.value
        })
    };


    return (
        <div id="PaymentForm">
            <Cards
                cvc = {state.cvc}
                expiry = {state.expiry}
                name = {state.name}
                focus = {state.focus}
                number = {state.number}
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
            <form action="">
                <input type="number" name="cvc" placeholder="CVC" onChange={handleInputChanges}/>
                <input type="date" name="expiry" placeholder="Expiry" onChange={handleInputChanges}/>
                <input type="text" name="name" placeholder="Name" onChange={handleInputChanges}/>
                <input type="number" name="number" placeholder="Number" onChange={handleInputChanges}/>
            </form>
        </div>
    )
}

export default MyCards
