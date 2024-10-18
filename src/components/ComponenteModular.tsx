import React from "react";

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
  showProgress?: boolean;
};

// Modelando Componente
const ModularCard: React.FC<CardProps> = ({
  components,
  mode = "card1",
  type = "desktop",
  layout = "large",
  showProgress = false,
}) => {
  const currentCard = components[0];

  const renderComponent = () => {
    switch (mode) {
      case "card1":
        return (
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{currentCard.title}</h2>
              {/* Ícone */}
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
      default:
        return null;
    }
  };

  return (
    <div
      className={`${type === "mobile" ? "w-full" : "w-64"} ${
        layout === "small" ? "text-sm" : "text-base"
      }`}
    >
      {renderComponent()}
    </div>
  );
};

export default ModularCard;
