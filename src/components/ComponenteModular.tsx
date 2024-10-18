import React, { useState } from "react";

// Definir os Tipos para as Props
type Card = {
  title: string;
  paragraph: string;
  videos: number;
  progress: number;
  category?: string;
  image?: string;
};

// Tipo para as Props do Componente Modular
type CardProps = {
  components: Card[];
  mode?: "card1" | "card2" | "card3" | "card4";
  type?: "desktop" | "mobile";
  layout?: "small" | "large";
  onChange?: (index: number) => void;
  showProgress?: boolean;
};

// Criando Componente Modular
const ModularCard: React.FC<CardProps> = ({
  components,
  mode = "card1",
  type = "desktop",
  layout = "large",
  onChange,
  showProgress = false,
}) => {
  // Gerenciando Estado Interno
  const [indexCurrent, setIndexCurrent] = useState(0);

  // Função para me ajudar alternar conteudo
  const toggleComponent = (newIndex: number) => {
    setIndexCurrent(newIndex);
    if (onChange) {
      onChange(newIndex);
    }
  };
  //rederizando os componentes
  const renderComponent = () => {
    const currentCard = components[indexCurrent];

    switch (mode) {
      case "card1":
        return (
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{currentCard.title}</h2>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <p className="text-lg mb-2">{currentCard.paragraph}</p>
            <p className="mb-2">{currentCard.videos} Vídeos</p>
            {showProgress && (
              <div className="bg-blue-300 rounded-full h-2 mt-2">
                <div
                  className="bg-white rounded-full h-2"
                  style={{ width: `${currentCard.progress}%` }}
                ></div>
              </div>
            )}
            <p className="text-sm mt-2">{currentCard.progress}% concluído</p>
          </div>
        );
      case "card2":
        return (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{currentCard.title}</h2>
            <p className="text-4xl font-bold mb-2">{currentCard.videos}</p>
            <p className="text-green-500">
              {currentCard.progress}% comparado com mês anterior
            </p>
          </div>
        );
      case "card3":
        return (
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{currentCard.title}</h2>
            <p className="text-2xl font-bold mb-2">{currentCard.paragraph}</p>
            {showProgress && (
              <div className="bg-blue-300 rounded-full h-2 mt-2">
                <div
                  className="bg-white rounded-full h-2"
                  style={{ width: `${currentCard.progress}%` }}
                ></div>
              </div>
            )}
            <p className="text-sm mt-2">{currentCard.progress}%</p>
          </div>
        );
      case "card4":
        return (
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            {currentCard.image && (
              <img
                src={currentCard.image}
                alt={currentCard.title}
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
            )}
            <p className="text-sm mb-2">Categoria: {currentCard.category}</p>
            <h2 className="text-xl font-bold mb-2">{currentCard.title}</h2>
            <p className="mb-2">{currentCard.videos} Vídeos no total</p>
            {showProgress && (
              <div className="bg-blue-300 rounded-full h-2 mt-2">
                <div
                  className="bg-white rounded-full h-2"
                  style={{ width: `${currentCard.progress}%` }}
                ></div>
              </div>
            )}
            <p className="text-sm mt-2">{currentCard.progress}% concluído</p>
          </div>
        );
    }
  };

  return (
    <div
      className={`${type === "mobile" ? "w-full" : "w-64"} ${
        layout === "small" ? "text-sm" : "text-base"
      }`}
    >
      {renderComponent()}
      <div className="flex space-x-2 mt-4">
        {components.map((_, index) => (
          <button
            key={index}
            onClick={() => toggleComponent(index)}
            className={`px-2 py-1 rounded ${
              indexCurrent === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModularCard;
