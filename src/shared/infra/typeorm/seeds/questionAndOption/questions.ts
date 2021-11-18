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
    text: 'Qual dessas acertivas está correta?',
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
    text: 'Quando um estado é definido, também é criado uma função que tem por responsabilidade acessar e alterar o seu valor. Um estado foi definido para alterar o valor de uma cor após o pressionamento de um botão. Analize os seguintes trechos e selecione a forma correta de alterar o valor do estado.',
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
        text: 'Uma variável que recebe o valor inicial do estado e uma função que acessa apenas lê esse valor.',
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
        text: 'Uma variável que recebe o valor do estado e uma função que acessa e altera esse valor.',
        correct_answer: true,
      },
    ],
  },

  /* -------- COMPONENTE --------- */
  {
    id: '6a1d4d5e-3b32-49dd-970b-093570e6a015',
    text: 'Sobre componentes responda. Qual dessas acertivas está correta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente pode ser feito em forma de função ou em forma de classes',
        correct_answer: true,
      },
      {
        text: 'Um componente deve ser escrito com sua letra inicial em minusculo',
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
    text: 'Sobre componentes responda. Qual dessas acertivas está Incorreta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104', // id modulo de Componentes - React - junior
    options: [
      {
        text: 'Um componente é um objeto que retorna html e recebe propriedades',
        correct_answer: true,
      },
      {
        text: 'Um componente deve ser escrito com sua letra inicial em maiúscula',
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
    text: 'Qual dessas acertivas está incorreta?',
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
        text: 'Um componente filho pode usar funções do componente pai desde está tenha sido passada através das props',
        correct_answer: false,
      },
    ],
  },

  /* -------- PROPRIEDADES --------- */
  {
    id: '00d3ac7f-8ddb-4316-8cbb-224888aa1f48',
    text: 'Sobre propriedades responda. Qual dessas acertivas está incorreta?',
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
    text: 'Qual dessas acertivas está correta?',
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
    text: 'Sobre imutabilidade. Qual dessas acertivas está correta?',
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
