import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [emotion, setEmotion] = useState("No Game")
  useEffect(() =>{
    console.log(`The User is playing ${emotion} right now`);
  });
  return(
    <>
      <h1>Aryan Singh Malhotra is currently playing {emotion}</h1>
      <button style ={{display: 'flex', justifyContent: 'flex-center'}} onClick={() => setEmotion("Minecraft")}>
        Minecraft
        </button>
        <hr></hr>
      <button style ={{display: 'flex', justifyContent: 'flex-middle'}} onClick={() => setEmotion("CsGo")}>
        CsGo
        </button>
        <hr></hr>
      <button style ={{display: 'flex', justifyContent: 'flex-middle'}} onClick={() => setEmotion("Apex Legends")}>
        Apex Legends
        </button>
        <hr></hr>
      <button style ={{display: 'flex', justifyContent: 'flex-middle'}} onClick={() => setEmotion("Valorant")}>
        Valorant
        </button>
        <hr></hr>
      <button style ={{display: 'flex', justifyContent: 'flex-middle'}} onClick={() => setEmotion("No Game")}>
        Default
        </button>
  

  </>
  );
  }

      


export default App;
