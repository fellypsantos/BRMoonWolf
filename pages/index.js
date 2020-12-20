import {useState} from 'react';

function Home() {
  return (
    <div>
      <h2>Hello Home</h2>
      <Contador />
    </div>
  )

}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Atual: {contador}</p>
      <button onClick={adicionarContador} >Adicionar</button>
    </div>
  );
}

export default Home;
