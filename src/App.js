import React from 'react';
import './App.css';
import FilterLeftSide from './components/FilterLeftSide'
import CartBox from './components/CartBox'

export default function App() {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <>
      <div className="main-container">
        <FilterLeftSide />
        <section className="painel-de-videos">
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal">
            <img src="https://picsum.photos/400/400?a=2" alt="" />
            <h4>{titulo}</h4>
          </div>
        </section>
      <CartBox/>

      </div>

    </>
  );
}
