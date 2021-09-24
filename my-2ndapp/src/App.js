import './App.css';

function SecretFunction(){
  return(
  <h1>Secret Mouse In Pizza Recipe</h1>)
};

function RegularComponents(){
  return(
  <h1>Everyone Can See This</h1>
  )
};

function App(props) {
  return(
    <>
      {props.authorized ? <SecretFunction />:  <RegularComponents />} 
  

  </>
  );
  }

      


export default App;
