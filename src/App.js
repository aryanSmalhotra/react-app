
import './App.css';
import valorant from "./valorant india.webp"



const teams =["Delhi Immortals",
"Gujrat OPs",
"Viva Mumbai",
"Punjab Phantoms"];


function Headers(props){
  return(
    <header>
      <h1 style ={{textDecorationColor:"blue"}} >{props.name} Comes To India</h1>
      <h1>Valorant Ignition India 2021</h1>
      <img src={valorant} height={250} alt ="Valorant is coming to India"/>
    </header>)
 
}
function Main(prop){
  return(
   <section>
     <p><h2  style ={{textDecorationColor:"blue"}}>
       {prop.adjective} Up Your Phantoms and Vandals because On 21<sup>st</sup> It Starts</h2></p>
   </section>)
 
}
function Footer(props){
  return(
   <section>
     <p>{props.qualified}</p>
     <ul style={{textAlign: 'left'}}>
       {props.teams.map((team, i) => 
       (<li key ={i}>{team}</li>))}
       </ul>
     </section>)}
 




function App() {
  return (
    <div className="App">
      <Headers name ="Valorant" />
      < Main  adjective = "Pick"/>
      <Footer qualified = "Teams Qualified" teams={teams} />

    </div>
  );
}

export default App;
