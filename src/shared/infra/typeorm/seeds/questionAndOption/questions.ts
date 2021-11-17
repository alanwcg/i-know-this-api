// debdd9a6-3a4e-491e-9770-1a1754c69222  id modulo de Estado - React - junior
// 6bcdcaaf-845f-426e-b020-68e849c21887  id modulo react pleno
// 1128b93e-08a0-448b-b8c7-694eb24b4bca  id modulo react senior

export const questions = [
  {
    id: '74c0fc12-66b9-4810-b797-28b7244231c8',
    text: 'Qual a forma correta de se criar um estado na aplicação react?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222',
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
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222',
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
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222',
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
    id: '6a1d4d5e-3b32-49dd-970b-093570e6a015',
    text: 'Sobre componentes responda. Qual dessas acertivas está correta?',
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104',
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
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104',
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
    module_id: 'c904770b-e610-4d35-bb3c-ad23d8df2104',
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
  {
    id: '00d3ac7f-8ddb-4316-8cbb-224888aa1f48',
    text: 'Sobre propriedades responda. Qual dessas acertivas está incorreta?',
    module_id: '032a7d8e-e552-4616-b63b-468f24fa3ae6',
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
    module_id: '032a7d8e-e552-4616-b63b-468f24fa3ae6',
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
  {
    id: '18cf635a-751a-4983-816a-f5069d208ca7',
    text: 'Qual dessas acertivas está correta?',
    module_id: 'debdd9a6-3a4e-491e-9770-1a1754c69222',
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
    id: '8c8d6fe3-4977-407b-82b9-102c5934529b',
    text: 'Sobre imutabilidade. Qual dessas acertivas está correta?',
    module_id: 'e068b35c-b171-48ac-afed-44adc9a0e406',
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
