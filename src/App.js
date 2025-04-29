import React, { useState } from 'react';

function App() {
  // Exemplo simples de estado com useState
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>React Budget App UI (Demonstração)</h1>
      <p>Demonstração básica de React com estado.</p>
      <p>Contador: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default App;
