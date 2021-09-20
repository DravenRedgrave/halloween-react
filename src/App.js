import React,{useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import MainBox from "./Components/MainBox/MainBox";
import InfoSection from "./Components/InfoSection/InfoSection";
import CardList from "./Components/Card/CardList";
import SponsorList from "./Components/Sponsor/SponsorList";
import About from "./Components/About/About";

function App() {
  const [card,setCard] = useState([
    {id: '1', currency:'$', price:'21',  title:'single ticket', subText:'virgin blood cocktail Access the black area pumpkin gift' },
    {id: '2', currency:'$', price:'21',  title:'single ticket', subText:'virgin blood cocktail Access the black area pumpkin gift' },
    {id: '3', currency:'$', price:'21',  title:'single ticket', subText:'virgin blood cocktail Access the black area pumpkin gift' },
  ])

  const [about,setAbout] = useState([
    {id: '1', title:'About party', subText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', img:'https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/src/assets/Party logo.png' },
  ])

  const [sponsor,setSponsor] = useState([
    {id:1,img:"https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/assets/Layer 10.png"},
    {id:2,img:'https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/assets/Layer 11.png'},
    {id:3,img:'https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/assets/Layer 5.png'},
    {id:4,img:'https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/assets/Layer 7.png'},
    {id:5,img:'https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/assets/Layer 8.png'},
    {id:6,img:'https://raw.githubusercontent.com/DravenRedgrave/halloween-react/main/assets/Layer 9.png'},
  ])

  return (
    <div className="App">
           <MainBox>
              <NavBar/>
              <InfoSection/>
           </MainBox>
           <About about={about}/>
           <SponsorList sponsor={sponsor} title='Sponsors'/>
           <CardList card={card} title='Tickets'/>
    </div>
  );
}

export default App;
