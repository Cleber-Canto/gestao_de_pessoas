# GESTAO DE PESSOAS

Este CRUD é o basico, para gerenciar pessoas 🚀

### 📋 Pré-requisitos

node.js 14.16.1

yarn 

Docker 

### Clonar o projeto

git clone https://github.com/Cleber-Canto/gestao_de_pessoas.git

# Passos para rodar o projeto local

1. docker-compose up -d 

2. yarn dev 

# Passos para parar o projeto local

1. CTRL + C

2. docker-compose stop 

## ⚙️ Executando os testes

yarn test 

### Configuração Postman

1. Endpoint Novo Usuario POST: http://localhost:3005/usuarios
   body🧮
   {
   "nome" : "Cleber",
   "email": "cleber@gmail.com"
   }

2. Endpoint Listar Todos Usuario GET: http://localhost:3005/usuarios

3. Endpoint Buscar Usuario Unico GET: http://localhost:3005/usuario
   body🧮
   {
   "email":"cleber@gmail.com"
   }

4. Endpoint Atualiza Usuario PATCH: http://localhost:3005/usuario/:id
   body🧮
   {
   "nome" : "Cleber X",
   "email": "cleberx@gmail.com"
   }

5. Endpoint Deletar Usuario DELETE: http://localhost:3005/usuario/:id


