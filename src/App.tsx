import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {

  const [textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        "A vida trará coisas boas se tiveres paciência.",
        "O sucesso é uma sequência de pequenos esforços, repetidos diariamente.",
        "Consistência é o caminho para o êxito.",
        "Inovação é a diferença entre quem faz e quem recebe.",
        "O riso é a menor distância entre duas pessoas.",
        "Seja o change que você quer ver no mundo.",
        "Siga os bons e aprenda com eles.",
        "Deixe de lado as preocupações e seja feliz.",
        "Faça o possível para dar o melhor de si.",
        "A maior barreira para o sucesso é o medo do fracasso.",
        "+ Ação é a chave para o sucesso.",
        "+ Ação, - Procastonação.",
        "Constância e Intensidade é melhor que tempo e duração.",
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        "Acabou de acordar? Bom dia!",
        "Acordar é o primeiro passo para o dia ser bom.",
        "Acordar de bom humor é o primeiro passo para um bom dia.",
        "A melhor maneira de começar o dia é dormindo bem.",
        "Escreva em seu coração: todo dia é um novo começo.",
        "Bom dia! Seja feliz!",
        "A melhor forma de acordar é sonhar.",
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);
  }

  return (
    <div className="container">
      <img
        className="logo"
        alt="Logo frases"
        src={logoImg}
      />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? '2px' : '0px',
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && (
        <p className="texto-frase">{textoFrase}</p>
      )}

    </div>
  )
}

export default App
