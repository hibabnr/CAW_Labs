import React from 'react';
import ToggleButton from './ToggleButton'; 
import Main from './main'; 
import Counter from './counter';
import DisplayTab from './displayTab';
import AuthenticationForm from './authentificationForm';
import AddDivForm from './addDivForm';

function App() {

  const table1 = ["hello", "world", "from", "algeria"];
  const colors = ["purple", "blue", "green", "yellow"];

  return (
    <div>

      {/*Exercice 01*/}

      <h1>Exercice 01</h1>
      
      <ToggleButton />
      <Main />
      <Counter />

      {/*Exercice 02*/}
      <h1>Exercice 02</h1>


      <DisplayTab initialTab={table1} /> 
      <DisplayTab initialTab={colors} />

      {/*Exercice 03*/}
      <h1>Exercice 03</h1>

      <AuthenticationForm /> 

      {/*Exercice 04*/}
      <h1>Exercice 04</h1>
      <AddDivForm /> 





    </div>

  );
}

export default App;
