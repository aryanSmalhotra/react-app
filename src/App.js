
import './App.css';

function Headers(){
  return(
    <header>
      <h1>Valorant Comes To India</h1>
      <h1>Valorant Ignition India 2021</h1>
    </header>)
 
}
function Main(){
  return(
   <section>
     <p><h2>
       Pick Up Your Phantoms and Vandals because On 21<sup>st</sup> It Starts</h2></p>
   </section>)
 
}
function Footer(){
  return(
   <section>
     <p>Teams Qualified</p>

   </section>)
 
}


function App() {
  return (
    <div className="App">
      <Headers />
      < Main />
      <Footer />

    </div>
  );
}

export default App;
