const modules = [
  {
    id: 'c904770b-e610-4d35-bb3c-ad23d8df2104',
    name: 'Componente',
    description:
      'Nesse módulo será explicado o que é o estado de uma aplicação React',
    content: `
Componentes são a ferramenta mais importante para o desenvolvimento de aplicações React. Para entender o conceito inicial, o componente é um trecho de código que abrange dentro dele estruturas de lógica, renderização e estilização. A parte lógica é criada utilizando o JavaScript, enquanto a parte de renderização é feita utilizando o HTML e JSX. Quando presente, a estilização é feita utilizando CSS.

O que é o JSX?
JSX é um extensão de sintaxe do JavaScript, utilizada dentro das aplicações React para auxiliar o desenvolvimento. Com ele é possível realizar a "mistura" de JavaScript, HTML.

Criando um componente chamado \`FirstComponent\` no  React:
\`\`\`js
import React from  "react";
class FirstComponent extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
\`\`\`

Como é verificado, o componente é criado como uma classe do JavaScript, que extende do \`Reac.Component\`. A classe chama a função \`render()\`, que retorna dentro dela um HTML, que por meio de JSX pode ser alterado.

Um componente pode ser exportado para que seja utilizado em outros locais da aplicação, realizando as alterações necessárias ao utilizar o \`export default\` antes da declaração da classe.

Um componente pode ser uma função, que retornará um conjunto de tags HTML. Esse tipo de componente é chamado de **componente de função**.

Um componente pode abranger outro componente para realizar a renderização, de forma que há um componente pai e um componente filho. O primeiro é o que irá abranger o segundo e passar atributos e valores para ele.

\`\`\`js
import React from "react";
import Child from "./ChildComponent";

class FatherComponent extends  React.Component  {
  render()  {
  return
    <h1>O componente será renderizado a seguir
      <Child>
      </Child>
    </h1>;
  }
}
\`\`\`

`,
    links: `
# Referencias para estudo

Componentes e JSX
[Documentação Componentes](https://reactjs.org/docs/state-and-lifecycle.html)


[Documentação JSX](https://reactjs.org/docs/introducing-jsx.html)


Artigos de Blog
[Rocketseat componentes, propriedades e estado](https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/)

`,
    level_id: '2dc5612e-3c08-11ec-a9e6-57ab74ea2403',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'debdd9a6-3a4e-491e-9770-1a1754c69222',
    name: 'Estado',
    description:
      'Nesse módulo será explicado o que é o estado de uma aplicação React',
    content: `
  O funcionamento de uma aplicação React é baseado em estados. Um estado é uma variável que poderá ser alterada durante o ciclo de execução da aplicação e essa poderá ser utilizada para atualizar a interface do usuário. Exemplificando: a aplicação pode salvar um valor de um input do usuário, como o seu nome, e ao clicar em um botão, o estado pode ser atualizado para mostrar o nome do usuário.

  Para que a aplicação entenda o uso do estado, é necessário utilizar do método
  Apresentando em forma de código:
  `,
    links: `
      [Estado da aplicação](https://reactjs.org/docs/state-and-lifecycle.html)
      `,
    level_id: '2dc5612e-3c08-11ec-a9e6-57ab74ea2403',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'e068b35c-b171-48ac-afed-44adc9a0e406',
    name: 'Imutabilidade',
    description:
      'Nesse módulo será explicado o que é o estado de uma aplicação React',
    content: `
    # Imutabilidade
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc5612e-3c08-11ec-a9e6-57ab74ea2403',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: '032a7d8e-e552-4616-b63b-468f24fa3ae6',
    name: 'Propriedades',
    description:
      'Nesse módulo será explicado o que é o estado de uma aplicação React',
    content: `
    # Propriedades
    -----
    TODO:
    `,
    links: `
      `,
    level_id: '2dc5612e-3c08-11ec-a9e6-57ab74ea2403',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'de39e18a-2f0b-4eef-893c-9813c0c52d93',
    name: 'CSS in JS',
    description: '2',
    content: `
    # CSS in JS
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc56296-3c08-11ec-a9e7-f33da3061a9d',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: '5cc6af26-1731-46f0-ae73-f7475f2313de',
    name: 'Hooks',
    description: '2',
    content: `
    # Hooks
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc56296-3c08-11ec-a9e7-f33da3061a9d',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'f22b1fb3-b778-4731-ac31-3805e2eb42e9',
    name: 'Contexto',
    description: '2',
    content: `
    # Contexto
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc56296-3c08-11ec-a9e7-f33da3061a9d',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'f3f9888d-fbf8-444f-aa1d-232ad919dd12',
    name: 'Navegação',
    description: '2',
    content: `
    # Navegação
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc56296-3c08-11ec-a9e7-f33da3061a9d',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: '9043daa3-5d3f-4f59-ab79-1dde99184b91',
    name: 'Autenticação',
    description: '2',
    content: `
    # Autenticação
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc56296-3c08-11ec-a9e7-f33da3061a9d',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'eca1a6fe-194e-4496-92d8-3a64a9d152d8',
    name: 'Interface declarativa',
    description: '3',
    content: `
    # Interface declarativa
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc562c8-3c08-11ec-a9e8-ab0908853b84',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'd929637a-d4f4-4fda-8907-7c15263c457c',
    name: 'Cache',
    description: '3',
    content: `
    # Performance
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc562c8-3c08-11ec-a9e8-ab0908853b84',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'e52ef1e7-3e11-4c29-91d8-b0f2600cd3be',
    name: 'Performance',
    description: '3',
    content: `
    # Performance
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc562c8-3c08-11ec-a9e8-ab0908853b84',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: '815f3a27-b5d3-40b3-8654-5644629cdfc9',
    name: 'Teste',
    description: '3',
    content: `
    # Teste
    -----
    TODO
    `,
    links: `
      `,
    level_id: '2dc562c8-3c08-11ec-a9e8-ab0908853b84',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
];

export { modules };
