// debdd9a6-3a4e-491e-9770-1a1754c69222  id modulo de Estado - React - junior
// 6bcdcaaf-845f-426e-b020-68e849c21887  id modulo react pleno
// 1128b93e-08a0-448b-b8c7-694eb24b4bca  id modulo react senior

export const questions = [
  /* -------- ESTADO --------- */
  {
    id: '74c0fc12-66b9-4810-b797-28b7244231c8',
    text: 'Qual a forma correta de se criar um estado na aplicação react?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'const [item, setItem] = useState();',
        correct_answer: true,
      },
      {
        text: 'const [ item, setItem ] = useEstado();',
        correct_answer: false,
      },
      {
        text: 'const item = useState();',
        correct_answer: false,
      },
      {
        text: 'useState(item, setItem);',
        correct_answer: false,
      },
    ],
  },
  {
    id: 'ba261074-c2e9-409a-8f23-d96e41a2e7c3',
    text: 'Qual a forma correta de se mudar o valor de um estado na aplicação react?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'setItem("Novo Estado")',
        correct_answer: true,
      },
      {
        text: 'const setItem("Novo Estado")',
        correct_answer: false,
      },
      {
        text: 'item = setItem("Novo Estado");',
        correct_answer: false,
      },
      {
        text: 'item = "Novo estado"',
        correct_answer: false,
      },
    ],
  },
  {
    id: '20ea6b07-0e0c-4363-ae54-08efcf1606e4',
    text: 'Os estados do react utilizam-se dos conceitos de:',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'Imutabilidade',
        correct_answer: true,
      },
      {
        text: 'Randomicidade',
        correct_answer: false,
      },
      {
        text: 'Aleatoriedade',
        correct_answer: false,
      },
      {
        text: 'Mutabilidade',
        correct_answer: false,
      },
    ],
  },
  {
    id: '18cf635a-751a-4983-816a-f5069d208ca7',
    text: 'Qual dessas assertivas está correta?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'Para criar um estado é preciso importar o useState da lib do react',
        correct_answer: true,
      },
      {
        text: 'Para criar um estado é preciso importar o useState da lib do state',
        correct_answer: false,
      },
      {
        text: 'Para criar um estado é preciso importar o useState da lib do state-react',
        correct_answer: false,
      },
      {
        text: 'Para criar um estado é preciso importar o useState da lib do react-state',
        correct_answer: false,
      },
    ],
  },
  {
    id: '89263566-1b5b-4391-aaf2-351cdb999bc3',
    text: 'Quando um estado é definido, também é criada uma função que tem por responsabilidade acessar e alterar o seu valor. Um estado foi definido para alterar o valor de uma cor após o pressionamento de um botão. Analise os seguintes trechos e selecione a forma correta de alterar o valor do estado.',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: '<button onClick={() => setCor("blue")}>',
        correct_answer: true,
      },
      {
        text: '<button onClick={() => cor("blue")}>',
        correct_answer: false,
      },
      {
        text: '<button onClick={() => cor.state("blue")}>',
        correct_answer: false,
      },
      {
        text: '<button onClick={() => state={cor: "blue"}}>',
        correct_answer: false,
      },
    ],
  },
  {
    id: 'd1d35399-b748-4e45-88d1-0dc428bed92d',
    text: 'Considerando um componente de classe: Qual função a seguir tem sua chamada obrigatória dentro do construtor ao utilizar o estado?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'return(props)',
        correct_answer: false,
      },
      {
        text: 'super(props)',
        correct_answer: true,
      },
      {
        text: 'state(props)',
        correct_answer: false,
      },
      {
        text: 'props(state)',
        correct_answer: false,
      },
    ],
  },
  {
    id: '0030ebe2-5fbf-4bc0-aea4-b595935c1225',
    text: 'Qual das formas abaixo é a correta para definir um estado em um componente de classe?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'Dentro do construtor.',
        correct_answer: false,
      },
      {
        text: 'Dentro do método render().',
        correct_answer: false,
      },
      {
        text: 'Antes do construtor ser definido.',
        correct_answer: true,
      },
      {
        text: 'Dentro da interface da classe.',
        correct_answer: false,
      },
    ],
  },
  {
    id: '4a407093-1cff-471f-9939-583a4c63f901',
    text: 'Para que o useState seja utilizado, além da sua importação, é necessário que seja criado um array contendo:',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'Uma variável que recebe o valor inicial do estado e uma função que apenas lê esse valor.',
        correct_answer: false,
      },
      {
        text: 'Uma variável que recebe null como valor inicial e uma função que acessa e altera esse valor.',
        correct_answer: false,
      },
      {
        text: 'Um array que recebe cada valor do estado e uma função que acessa e altera esse valor.',
        correct_answer: false,
      },
      {
        text: 'Uma variável que recebe o valor do estado e uma função que altera esse valor.',
        correct_answer: true,
      },
    ],
  },
  {
    id: '5fc83097-ea4c-4a1f-b502-11bd8ca15dc3',
    text: 'Selecione a afirmação correta sobre estado de componentes.',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'Um componente só pode possuir uma variável para armazenar o seu estado.',
        correct_answer: false,
      },
      {
        text: 'Um componente deve possuir ao menos uma variável de estado.',
        correct_answer: false,
      },
      {
        text: 'Um componente pode ou não ter variáveis de estado para diferentes objetivos.',
        correct_answer: true,
      },
      {
        text: 'Um componente deve sempre utilizar props para armazenar o estado.',
        correct_answer: false,
      },
    ],
  },
  {
    id: '3d5970fb-7bce-45a0-91de-8a59f346b772',
    text: 'Sobre estados, selecione a alternativa correta.',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222', // id modulo de Estado - React - junior
    options: [
      {
        text: 'Uma variável de estado deve armazenar uma string.',
        correct_answer: false,
      },
      {
        text: 'Uma variável de estado pode armazenar diversos tipos de dado.',
        correct_answer: true,
      },
      {
        text: 'Uma variável de estado só pode armazenar um objeto',
        correct_answer: false,
      },
      {
        text: 'Uma variável de estado pode ser acessada por outro componente que não o seu.',
        correct_answer: false,
      },
    ],
  },

  /* -------- COMPONENTE --------- */
  {
    id: '6a1d4d5e-3b32-49dd-970b-093570e6a015',
    text: 'Sobre componentes responda: Qual das assertivas abaixo está correta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente pode ser feito em forma de função ou em forma de classes',
        correct_answer: true,
      },
      {
        text: 'Um componente deve ser escrito com sua letra inicial minúscula',
        correct_answer: false,
      },
      {
        text: 'Um componente não pode ser chamado dentro de outro componente',
        correct_answer: false,
      },
      {
        text: 'Um componente nunca recebe propriedades',
        correct_answer: false,
      },
    ],
  },
  {
    id: 'b1b034a5-50f4-4a44-b1cd-797e8d171a63',
    text: 'Sobre componentes responda: Qual dessas assertivas está INCORRETA?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente é um objeto que retorna html e recebe propriedades',
        correct_answer: true,
      },
      {
        text: 'Um componente deve ser escrito com sua letra inicial maiúscula',
        correct_answer: false,
      },
      {
        text: 'Um componente pode ter um ou mais estados',
        correct_answer: false,
      },
      {
        text: 'Um componente pode passar propriedades para seus componentes filhos',
        correct_answer: false,
      },
    ],
  },
  {
    id: '1c9d2f48-b062-4a01-ab6a-31197bfabf20',
    text: 'Qual dessas assertivas está incorreta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente pode ter apenas um ou nenhum compoente como filho',
        correct_answer: true,
      },
      {
        text: 'Um componente pode ter um ou mais de um compoente como filho',
        correct_answer: false,
      },
      {
        text: 'Um componente pode não ter componente filho ',
        correct_answer: false,
      },
      {
        text: 'Um componente filho pode usar funções do componente pai desde estas tenham sido passadas através das props',
        correct_answer: false,
      },
    ],
  },
  {
    id: '1b9337a6-096f-48a9-b8e0-af1c20fac5f6',
    text: 'Sobre a Hierarquia de componentes dentro de uma aplicação, qual das alternativas abaixo está correta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Não é necessário fazer a importação de um componente filho, uma vez que durante a sua chamada já é realizada a importação automaticamente.',
        correct_answer: false,
      },
      {
        text: 'Para que dois componentes fiquem no mesmo nível de hierarquia, é necessário criar uma div <main> que englobe ambos.',
        correct_answer: false,
      },
      {
        text: 'Para que dois componentes fiquem no mesmo nível de hierarquia, é necessário que eles estejam dentro de um mesmo componente, div ou dentro de um fragment "</>".',
        correct_answer: true,
      },
      {
        text: 'É necessário que haja um componente ao redor de dois componentes dentro da mesma hierarquia para que eles sejam renderizados.',
        correct_answer: false,
      },
    ],
  },
  {
    id: '3eef4d23-1960-409e-b505-82c09c279675',
    text: 'Sobre a divisão de componentes, selecione a afirmação correta.',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Não é recomendado dividir um componente pois ao fazê-lo, aumentaria o trabalho de manutenção de código.',
        correct_answer: false,
      },
      {
        text: 'Um componente pode ser dividido em vários outros para facilitar não só a manutenção de código, mas auxiliar no processo de aplicar o conceito de componentização.',
        correct_answer: true,
      },
      {
        text: 'Um componente deve ser sempre dividido para que cada componente só possua uma única função e um estado.',
        correct_answer: false,
      },
      {
        text: 'Um componente precisa que a sua divisão seja realizada para que só exista um tipo de tag html dentro dele.',
        correct_answer: false,
      },
    ],
  },
  {
    id: '6498742c-2d22-4f5f-bea6-1c0071f66212',
    text: 'Sobre o estado e um componente selecione a opção correta.',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente de função sempre precisa iniciar pelo menos um estado.',
        correct_answer: false,
      },
      {
        text: 'Um componente de estado sempre precisa iniciar pelo menos um estado.',
        correct_answer: false,
      },
      {
        text: 'Um componente de função não pode possuir um estado.',
        correct_answer: false,
      },
      {
        text: 'Um componente de função pode ou não iniciar um estado.',
        correct_answer: true,
      },
    ],
  },
  {
    id: 'bd159c60-a44d-44ed-ab88-fc8c50104595',
    text: 'Sobre componentes, qual a afirmação correta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente é sempre chamado como um objeto, tendo um atributo html para renderização.',
        correct_answer: false,
      },
      {
        text: 'Ao chamar um componente, o mesmo precisa sempre ter uma abertura e um fechamento.',
        correct_answer: false,
      },
      {
        text: 'Um componente é chamado de forma similar a uma tag html, podendo ter uma tag fechamento.',
        correct_answer: true,
      },
      {
        text: 'Um componente precisa sempre ser instanciado chamando o seu construtor para que seja utilizado dentro da aplicação.',
        correct_answer: false,
      },
    ],
  },
  {
    id: '52f26a66-1c5e-4c1d-b1d0-eaf55fc2938f',
    text: 'Qual das seguintes formas a seguir é a correta para chamar um componente, considerando que o mesmo já foi importado.',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: '<ComponenteTeste/>',
        correct_answer: true,
      },
      {
        text: '<componenteTeste/>',
        correct_answer: false,
      },
      {
        text: 'componente = <Teste/>',
        correct_answer: false,
      },
      {
        text: '<Componente Teste/>',
        correct_answer: false,
      },
    ],
  },
  {
    id: 'a3adaec8-a38c-4533-ad26-00f282949b7c',
    text: 'Qual a forma correta de criar um componente de classe, de forma que o mesmo já seja exportado?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'export default class ComponenteTeste extends React.Component {}',
        correct_answer: true,
      },
      {
        text: 'default class export ComponenteTeste extends React.Component {}',
        correct_answer: false,
      },
      {
        text: 'export ComponenteTeste extends React.Component {}',
        correct_answer: false,
      },
      {
        text: 'export default class ComponenteTeste {}',
        correct_answer: false,
      },
    ],
  },
  {
    id: 'b0ad4236-9a00-4c60-8716-d5488b4a662a',
    text: 'Para renderizar o conteúdo de um componente de função, qual a função que deve ser chamada?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'renderContent()',
        correct_answer: false,
      },
      {
        text: 'return()',
        correct_answer: true,
      },
      {
        text: 'renders()',
        correct_answer: false,
      },
      {
        text: 'render{}',
        correct_answer: false,
      },
    ],
  },

  /* -------- PROPRIEDADES --------- */
  {
    id: '00d3ac7f-8ddb-4316-8cbb-224888aa1f48',
    text: 'Sobre propriedades responda: qual dessas assertivas está incorreta?',
    module_id: '032a7d8e-e552-4616-b63b-468f24fa3ae6', // id modulo de Propriedades - React - junior
    options: [
      {
        text: 'Um componente filho pode enviar propriedades diretamente para seu compente pai, sem que o pai tenha enviado alguma prop para o filho',
        correct_answer: true,
      },
      {
        text: 'Uma função pode ser passada como propriedade de um componente para outro',
        correct_answer: false,
      },
      {
        text: 'Uma prop só pode ser passada de pai para filho',
        correct_answer: false,
      },
      {
        text: 'Propriedade é um objeto que é passado para os componentes como parametros de função',
        correct_answer: false,
      },
    ],
  },
  {
    id: '8c02dcad-ea0e-4dfe-ae2f-a6b80bc94b4b',
    text: 'Qual dessas assertivas está correta?',
    module_id: '032a7d8e-e552-4616-b63b-468f24fa3ae6', // id modulo de Propriedades - React - junior
    options: [
      {
        text: 'O react observa os estados criados para renderizar novamente o componente no qual o estado é usado, caso ocorra uma alteração desse estado',
        correct_answer: true,
      },
      {
        text: 'Um componente só pode ser uma função',
        correct_answer: false,
      },
      {
        text: 'Uma prop é um estado que criamos dentro de um componete',
        correct_answer: false,
      },
      {
        text: 'Imutabilidade é usado quando criamos um componente',
        correct_answer: false,
      },
    ],
  },

  /* -------- IMUTABILIDADE --------- */
  {
    id: '8c8d6fe3-4977-407b-82b9-102c5934529b',
    text: 'Sobre imutabilidade. Qual dessas assertivas está correta?',
    module_id: 'e068b35c-b171-48ac-afed-44adc9a0e406', // id modulo de Imutabilidade - React - junior
    options: [
      {
        text: 'Quando uma variável é imutavel, o valor não pode ser alterado na memoria, neste caso um novo espaço de memoria deve ser criado para armazenar o novo valor.',
        correct_answer: true,
      },
      {
        text: 'Quando uma variável é imutavel, só se pode mudar o valor quando o sistema reinicia.',
        correct_answer: false,
      },
      {
        text: 'O useState do react não se utiliza do conceito de imutabilidade.',
        correct_answer: false,
      },
      {
        text: 'Toda variável nos componentes react são imutaveis',
        correct_answer: false,
      },
    ],
  },
];
