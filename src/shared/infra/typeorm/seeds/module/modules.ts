const modules = [
  {
    id: 'c904770b-e610-4d35-bb3c-ad23d8df2104',
    name: 'Componente',
    description:
      'Nesse módulo será explicado o que é e como são usados componentes dentro uma aplicação React',
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

Um componente pode ser uma função, que retornará um conjunto de tags HTML. Esse tipo de componente é chamado de **componente de função**.
Atualmente este é o tipo mais utilizado de componentes dentro do desenvolvimento de aplicações React. Isso se dá principalmente pela chegada de novas funções para manipular os dados da aplicação, como o useCallback, useEffect, useMemo, useRef, useState, etc. Esse tipo de componente não possui estado nem precisa da função \`render()\`.

Apresentando o componente de função:

\`\`\`js
import React from "react";

function ComponenteDeFuncao() {
  return (
    <div class="component">
      <h1>Hello World</h1>
    </div>
  );
}
\`\`\`

`,
    links: `
[Documentação Componentes](https://reactjs.org/docs/state-and-lifecycle.html)

[Documentação JSX](https://reactjs.org/docs/introducing-jsx.html)

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

Em um exemplo mais simples ainda, um relógio, onde o estado é a variável que armazena o tempo atual. A cada minuto, o estado é atualizado e a interface também.

Uma das principais diferenças para aqueles que estão começando a entender React é que o estado é acessível apenas dentro do seu componente. Diferentemente das propriedades, que podem ser passadas seguindo a hierarquia de implementação.

Para que a aplicação entenda o uso do estado, é necessário que o mesmo seja definido. Graças as últimas atualizações da biblioteca, a implementação do estado pode ser feita de diversas formas. Uma das formas de um estado ser definido é realizar a atribuição do estado dentro do construtor de uma classe que extende do componente \`React.Component\`.

Ex retirado da doumentação oficial do [React](https://pt-br.reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class).:

\`\`\`js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
\`\`\`

No componente acima vemos a definição do estado por meio de um objeto, fazendo com que toda vez que o mesmo seja atualizado, somente o seu componente seja renderizado novamente. Componentes de classes devem sempre chamar o construtor com props.

Ao utilizar componentes de função, o estado deverá ser definido usando o método \`useState()\` do "react". Para iniciar a implementação, basta passar o valor inicial do estado, assim como o método que será responsável por alterar o mesmo.

No exemplo abaixo, é criado um array, com o valor e a função, que serão atribuídos a função \`useState()\` que recebe por parâmetro o valor inicial.
\`\`\`js
import React, { useState } from "react";

export function Tabela() {
  const [celula, setCelula] = useState('vazia');

  return (
    <div>
      <h1>Tabela</h1>
      <h2>{celula}</h2>
      <button onClick={() => setCelula('preenchida')}>
        Preencher
      </button>
    </div>
  );
}
\`\`\`

Nesse exemplo, é criado um botão que ao ser acionado, irá chamar a função de atualização do estado, passando o valor \`preenchida\`.

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
      'Nesse módulo será explicado o que é o conceito de Imutabilidade',
    content: `
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
      'Nesse módulo será explicado o que são Propriedades e como são usadas para passar dados de um componente para outro',
    content: `
-----
TODO
    `,
    links: `
      `,
    level_id: '2dc5612e-3c08-11ec-a9e6-57ab74ea2403',
    technology_id: '2dc562f0-3c08-11ec-a9e9-e336ecaf21cf',
  },
  {
    id: 'de39e18a-2f0b-4eef-893c-9813c0c52d93',
    name: 'CSS in JS',
    description:
      'Nesse módulo será explicado como é feito para que seja inserido e utilizado o CSS dentro do JavaScript',
    content: `
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
    description:
      'Nesse módulo serão abordados os conceitos de Hooks, novidade que chegou ao React na versão 16.8.',
    content: `
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
    description:
      'Nesse módulo será explicado como passar dados com o Contexto, sem a necessidade de Propriedades sendo passadas de componente para componente',
    content: `
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
    description:
      'Nesse módulo será explicado como implementar a navegação dentro de uma aplicação React.',
    content: `
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
    description:
      'Nesse módulo serão abordadas formas de implementar conceitos de Autenticação dentro da aplicação, utilizando Contexto e outras práticas.',
    content: `
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
    description:
      'Nesse módulo serão explicados conceitos de Interface Declarativa',
    content: `
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
    description:
      'Nesse módulo será demonstrado como aplicar estratégias de Cache para as aplicações.',
    content: `
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
    description:
      'Nesse módulo serão abordadas práticas para incrementar a Performance da aplicação.',
    content: `
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
    description:
      'Nesse módulo será descrito como realizar Testes de aplicações React.',
    content: `
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
