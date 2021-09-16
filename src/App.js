import React,{useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import MainBox from "./Components/MainBox/MainBox";
import InfoSection from "./Components/InfoSection/InfoSection";
import CardList from "./Components/Card/CardList";

function App() {
  const [card,setCard] = useState([
    {id: '1', currency:'$', price:'21',  title:'single ticket', subText:'virgin blood cocktail Access the black area pumpkin gift' },
    {id: '2', currency:'$', price:'21',  title:'single ticket', subText:'virgin blood cocktail Access the black area pumpkin gift' },
    {id: '3', currency:'$', price:'21',  title:'single ticket', subText:'virgin blood cocktail Access the black area pumpkin gift' },
  ])

  return (
    <div className="App">
           <MainBox>
              <NavBar/>
              <InfoSection/>
           </MainBox>
           <CardList card={card} title='Tickets'/>
    </div>
  );
}

export default App;
