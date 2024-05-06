import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {onChange} from "react";
// import Textbutton from "./component/button";
// import cardComponent from "./component/cards";

// const cards = [
//   {id: 1, imageUrl:"https://media.istockphoto.com/id/1194502406/photo/closeup-headlights-of-new-shiny-luxury-dark-blue-sports-car-porsche-911-parked-on-street.jpg?s=612x612&w=0&k=20&c=Xu2vB3UBt_FZiRWPuMHeLNmqgkgF8nKHdSZAOgx3oMQ=",  title:"Porshe", description:"Porsche is a renowned German automobile manufacturer with an emphasis in high-performance", price: 990, backgroundColor: "Red"},
//   {id: 2, imageUrl:"https://media.istockphoto.com/id/1194502406/photo/closeup-headlights-of-new-shiny-luxury-dark-blue-sports-car-porsche-911-parked-on-street.jpg?s=612x612&w=0&k=20&c=Xu2vB3UBt_FZiRWPuMHeLNmqgkgF8nKHdSZAOgx3oMQ=",  title:"Porshe", description:"Porsche is a renowned German automobile manufacturer with an emphasis in high-performance", price: 800, backgroundColor: "Red"},
//   {id: 3, imageUrl:"https://media.istockphoto.com/id/1194502406/photo/closeup-headlights-of-new-shiny-luxury-dark-blue-sports-car-porsche-911-parked-on-street.jpg?s=612x612&w=0&k=20&c=Xu2vB3UBt_FZiRWPuMHeLNmqgkgF8nKHdSZAOgx3oMQ=",  title:"Porshe", description:"Porsche is a renowned German automobile manufacturer with an emphasis in high-performance", price: 345, backgroundColor: "Red"},
//   {id: 4, imageUrl:"https://media.istockphoto.com/id/1194502406/photo/closeup-headlights-of-new-shiny-luxury-dark-blue-sports-car-porsche-911-parked-on-street.jpg?s=612x612&w=0&k=20&c=Xu2vB3UBt_FZiRWPuMHeLNmqgkgF8nKHdSZAOgx3oMQ=",  title:"Porshe", description:"Porsche is a renowned German automobile manufacturer with an emphasis in high-performance", price: 450, backgroundColor: "Red"},
//   {id: 5, imageUrl:"https://media.istockphoto.com/id/1194502406/photo/closeup-headlights-of-new-shiny-luxury-dark-blue-sports-car-porsche-911-parked-on-street.jpg?s=612x612&w=0&k=20&c=Xu2vB3UBt_FZiRWPuMHeLNmqgkgF8nKHdSZAOgx3oMQ=",  title:"Porshe", description:"Porsche is a renowned German automobile manufacturer with an emphasis in high-performance", price: 650, backgroundColor: "Red"},
//   {id: 6, imageUrl:"https://media.istockphoto.com/id/1194502406/photo/closeup-headlights-of-new-shiny-luxury-dark-blue-sports-car-porsche-911-parked-on-street.jpg?s=612x612&w=0&k=20&c=Xu2vB3UBt_FZiRWPuMHeLNmqgkgF8nKHdSZAOgx3oMQ=",  title:"Porshe", description:"Porsche is a renowned German automobile manufacturer with an emphasis in high-performance", price: 500, backgroundColor: "Red"}
// ];
//       export default function App() {
//         const cardsItems = cards.map((item) => (
//           <cardComponent
//             key={item.id}
//             image={item.imageUrl}
//             title={item.title}
//             description={item.description}
//             price={item.price}
//             backgroundColor={item.backgroundColor}
//             />
//         ));
//       }


//        let initialstate = 0;

//   function setState{
//     state = state + 1;
//   }


// const [state, setState] = initialstate(0);

// creat and input for with name age and password and something else
// make onclick and on change
// create a button that will console log the value of the 4 inputs

//create an input form email, name,password  with a submit button to display the state value of all 4 inputs



function App() {
    const [inputValues, setInputValues] = useState({
      Name: '',
      email: '',
      Password:''
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value, Password: "123"});
    };
    const handleClick =()=>{
        console.log(inputValues)
    }
  
    return (
      <div>
        <div>
            <p>Name: </p>
            <input
          type="text"
          name="Name"
          value={inputValues.Name}
          onChange={handleChange}
        />
        </div>
        
        
       <div >
            <p>Email:</p>
            <input
          type="text"
          name="email"
          value={inputValues.email}
          onChange={handleChange}
        />
       </div>
        
        <div>
            <p>Password: </p>
            <input
          type="password"
          name="Password"
          value={inputValues.Password}
          onChange={handleChange}
        />
        </div>
        
        <button onClick={handleClick} className='button'>Submit</button>
      </div>
    );
  }
    
export default App;

