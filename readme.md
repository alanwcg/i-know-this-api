# I Know this

----

### Informações Prévias
O presente projeto é fruto dos esforços de [Alan](https://github.com/alanwcg), [Artur](https://github.com/arturferreira-dev) e [Carlos](https://github.com/carlossgabriel).

A presente API foi desenvolvida para ser consumida pela [aplicação móvel](https://github.com/alanwcg/i-know-this-app) desenvolvida em react como materialização final do trabalho de conclusão do curso de Ciência da Computação, realizado na Unifavip.

A orientação foi realizada pelo professor Wolney.

### Sobre o projeto
O projeto tem foco em estudantes que tenham interesse em se aprofundar nos conteúdos de programação.


### Instalação

Navegue até a raíz da aplicação no terminal e inicie o docker-compose com o seguinte comando:

```
docker-compose up -d
```

Após isso, um docker deve ser criado pela aplicação. Para que o banco esteja atualizado com as migrations do projeto, executar o comando: 

```
yarn typeorm migration:run
```

Para que o banco de dados seja populado com as seeds:

```
yarn seed
```

Assim para rodar a aplicação só será necessário executar o comando 

```
yarn dev
```