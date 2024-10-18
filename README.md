
# ModularCard Component

Este projeto implementa um componente modular e dinâmico em React chamado **ModularCard**. O componente permite renderizar diferentes layouts de cartões (cards) com base em dados e configurações fornecidas através de props. Ele é altamente reutilizável e flexível, suportando múltiplos modos e layouts.

## Funcionalidades

- **Modularidade**: O `ModularCard` pode renderizar diferentes layouts de cartão com base nas props fornecidas.
- **Dinamicidade**: Suporta diferentes modos e tipos de layouts, tornando-o adaptável para diferentes necessidades da aplicação.
- **Flexibilidade**: Permite controlar a aparência e o comportamento do cartão através de props como `mode`, `type`, `layout` e `showProgress`.
- **Suporte a Progresso**: O componente pode exibir uma barra de progresso opcional, indicando o progresso de um conteúdo.

## Modos Suportados

O componente suporta quatro modos principais:

- **Card 1**: Exibe título, parágrafo, número de vídeos e barra de progresso.
- **Card 2**: Exibe título, número de vídeos e progresso comparado com o mês anterior.
- **Card 3**: Exibe título, parágrafo e barra de progresso.
- **Card 4**: Exibe título, imagem, categoria, número de vídeos e barra de progresso.

## Props

As seguintes props podem ser passadas para o `ModularCard`:

| Prop          | Tipo                           | Descrição                                                                 | Padrão      |
| ------------- | ------------------------------ | ------------------------------------------------------------------------- | ----------- |
| `components`  | `Card[]`                       | Um array de objetos contendo as informações dos cartões.                  | `[]`        |
| `mode`        | `"card1" | "card2" | "card3" | "card4"` | Define o layout do cartão a ser renderizado.                               | `"card1"`   |
| `type`        | `"desktop" | "mobile"`         | Define o tipo de exibição do cartão, desktop ou mobile.                    | `"desktop"` |
| `layout`      | `"small" | "large"`            | Define o tamanho do layout do cartão.                                      | `"large"`   |
| `showProgress`| `boolean`                      | Define se a barra de progresso será exibida.                               | `false`     |

### Exemplo do Tipo `Card`

O tipo `Card` define a estrutura de dados para cada cartão. Ele é composto pelos seguintes campos:

| Campo       | Tipo     | Descrição                      |
| ----------- | -------- | ------------------------------ |
| `title`     | `string` | O título do cartão.            |
| `paragraph` | `string` | Um parágrafo de descrição.     |
| `videos`    | `number` | O número de vídeos associados. |
| `progress`  | `number` | O progresso percentual.        |
| `category`  | `string` | A categoria do cartão. (opcional) |
| `image`     | `string` | URL de uma imagem associada. (opcional) |

## Exemplo de Uso

Aqui está um exemplo simples de como usar o componente `ModularCard`:

```tsx
import React from 'react';
import ModularCard from './ModularCard';

const App = () => {
  const cards = [
    {
      title: 'Curso de React',
      paragraph: 'Aprenda React do zero ao avançado.',
      videos: 25,
      progress: 70,
      category: 'Desenvolvimento Web',
      image: 'url_da_imagem',
    },
  ];

  return (
    <div className="p-4">
      {/* Aqui, estamos utilizando o modo "card1" */}
      <ModularCard components={cards} mode="card1" showProgress={true} />
    </div>
  );
};

export default App;
```

## Instalação

Siga os passos abaixo para instalar e configurar o projeto:

### Pré-requisitos

- **Node.js** e **npm** ou **yarn** instalados em sua máquina.

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/modular-card-component.git
cd modular-card-component
```

### Instalar Dependências

Com npm:

```bash
npm install
```

Ou com yarn:

```bash
yarn install
```

### Rodar o Projeto

Para rodar o projeto localmente, utilize o comando:

```bash
npm start
```

Ou com yarn:

```bash
yarn start
```

O projeto estará disponível em `(http://localhost:5173)`.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/src
  /components
    ModularCard.tsx      # Componente ModularCard
  App.tsx                # Arquivo principal da aplicação
  index.tsx              # Arquivo de entrada
README.md                # Este arquivo README
package.json             # Configurações do projeto
```

## Contribuição

Se você deseja contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionar minha feature'`).
4. Envie para o branch (`git push origin minha-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
