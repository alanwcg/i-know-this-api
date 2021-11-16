// b7ffc31e-e0f3-45f6-b32c-d48c92c4d598  id modulo react junior
// 6bcdcaaf-845f-426e-b020-68e849c21887  id modulo react pleno
// 1128b93e-08a0-448b-b8c7-694eb24b4bca  id modulo react senior

export const questions = [
  {
    text: 'Qual a forma correta de se criar um estado na aplicação react?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Qual a forma correta de se mudar o valor de um estado na aplicação react?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Os estados do react utilizam-se dos conceitos de:',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Sobre componentes responda. Qual dessas acertivas está correta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Sobre componentes responda. Qual dessas acertivas está Incorreta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Qual dessas acertivas está incorreta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Sobre propriedades responda. Qual dessas acertivas está incorreta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Qual dessas acertivas está correta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Qual dessas acertivas está correta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
    text: 'Sobre imutabilidade. Qual dessas acertivas está correta?',
    module_id: 'b7ffc31e-e0f3-45f6-b32c-d48c92c4d598',
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
