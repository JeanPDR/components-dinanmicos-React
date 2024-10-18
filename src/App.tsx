import "./App.css";
import ModularCard from "./components/ComponenteModular";

//Exemplo de Uso

// Definindo o tipo Card
type Card = {
  title: string;
  paragraph: string;
  videos: number;
  progress: number;
  category?: string;
  image?: string;
};

const App: React.FC = () => {
  // Dados para os cards
  const cardData: Card[] = [
    {
      title: "Saúde",
      paragraph: "Qualidade do sono",
      videos: 8,
      progress: 20,
      category: "Saúde",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Clientes",
      paragraph: "300",
      videos: 0,
      progress: 8.2,
    },
    {
      title: "Exercícios",
      paragraph: "Rotina diária",
      videos: 12,
      progress: 45,
      category: "Fitness",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Componentes Modular e Dinamico
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModularCard components={cardData} mode="card1" showProgress={true} />

        <ModularCard
          components={cardData}
          mode="card2"
          type="desktop"
          layout="large"
        />

        <ModularCard
          components={cardData}
          mode="card3"
          showProgress={true}
          type="mobile"
        />

        <ModularCard
          components={cardData}
          mode="card4"
          showProgress={true}
          layout="small"
        />
      </div>
    </div>
  );
};

export default App;
