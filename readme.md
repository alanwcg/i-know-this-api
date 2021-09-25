# I Know this

----

### Instalação

Navegue até a raíz da aplicação no terminal e inicie o docker-compose com o seguinte comando:

```
docker-compose up -d
```

Após isso, um docker deve ser criado pela aplicação. Para que o banco esteja atualizado com as migrations do projeto, executar o comando: 

```
yarn typeorm migration:run
```

Assim para rodar a aplicação só será necessário executar o comando 

```
yarn dev
```