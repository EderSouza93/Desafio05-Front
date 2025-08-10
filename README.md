# 📚 Sistema de Gerenciamento de Livros - Frontend

## 📋 Descrição

Este é um projeto frontend desenvolvido em React para gerenciamento de livros, criado como parte do Desafio 05. O projeto foi forjado (forked) do repositório original e recebeu melhorias significativas na experiência do usuário e na funcionalidade.

## ✨ Funcionalidades

- **Listagem de Livros**: Visualização de todos os livros cadastrados
- **Cadastro de Livros**: Adição de novos livros ao sistema
- **Edição de Livros**: Modificação de informações de livros existentes
- **Exclusão de Livros**: Remoção de livros com confirmação
- **Sistema de Notificações**: Alertas visuais para todas as operações
- **Interface Responsiva**: Design adaptável para diferentes dispositivos

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca para construção de interfaces
- **Vite 4.3.0** - Build tool e dev server
- **React Router DOM 6.30.1** - Roteamento da aplicação
- **Axios 1.3.6** - Cliente HTTP para requisições à API
- **React Toastify 11.0.5** - Sistema de notificações
- **Sass 1.89.2** - Pré-processador CSS
- **LocalForage 1.10.0** - Armazenamento local assíncrono

## 📁 Estrutura do Projeto

```
src/
├── api/
│   └── LivrosService.js          # Serviços de API para livros
├── components/
│   ├── Header/                   # Cabeçalho da aplicação
│   ├── Notifications/            # Sistema de notificações
│   └── SubmenuLivros/            # Menu de navegação para livros
├── views/
│   ├── Home/                     # Página inicial
│   ├── Livros/                   # Listagem de livros
│   ├── LivrosCadastro/           # Formulário de cadastro
│   └── LivrosEdicao/             # Formulário de edição
├── assets/                       # Recursos estáticos
├── main.jsx                      # Ponto de entrada da aplicação
└── index.scss                    # Estilos globais
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Backend da API rodando na porta 3000

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_SEU_REPOSITORIO]
   cd Desafio05-Front
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API**
   - Certifique-se de que o backend está rodando em `http://localhost:3000`
   - Ou altere a URL base em `src/api/LivrosService.js`

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**
   - Abra seu navegador em `http://localhost:5173`

## 📖 Como Usar

### Navegação
- **Home**: Página inicial com visão geral do sistema
- **Livros**: Lista todos os livros cadastrados
- **Cadastrar Livro**: Formulário para adicionar novos livros
- **Editar Livro**: Modificar informações de livros existentes

### Operações com Livros
1. **Cadastrar**: Preencha o formulário e clique em "Cadastrar"
2. **Editar**: Clique no botão de edição na listagem
3. **Excluir**: Clique no botão de exclusão e confirme a ação
4. **Visualizar**: Clique no nome do livro para ver detalhes

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa verificação de código
- `npm run preview` - Visualiza o build de produção

## 🆕 Alterações e Melhorias Implementadas

### 1. Sistema de Notificações Genérico
- **Commit**: `3c85ba6` - "feat: add a generic Notifications component"
- **Arquivo**: `src/components/Notifications/Notifications.jsx`
- **Melhorias**:
  - Componente reutilizável para notificações
  - Suporte a diferentes tipos de alertas (success, error, info, warning)
  - Confirmações personalizadas para exclusões
  - Integração com React Toastify

### 2. Melhorias nos Alertas de Cadastro
- **Commit**: `2f17c9a` - "feat: improve alerts on createBook component"
- **Arquivo**: `src/views/LivrosCadastro/LivrosCadastro.jsx`
- **Melhorias**:
  - Notificações mais informativas
  - Melhor feedback para o usuário
  - Tratamento de erros aprimorado

### 3. Melhorias nos Alertas de Edição
- **Commit**: `03b9310` - "feat: improve alerts on editBook component"
- **Arquivo**: `src/views/LivrosEdicao/LivrosEdicao.jsx`
- **Melhorias**:
  - Sistema de notificações consistente
  - Alertas específicos para operações de edição
  - Melhor experiência do usuário

### 4. Ajustes para Endpoints do Backend
- **Commit**: `7620980` - "chore: adjust frontend to endpoints backend"
- **Melhorias**:
  - Integração com a API backend
  - Configuração correta dos endpoints
  - Ajustes na comunicação cliente-servidor

## 🌐 API Endpoints

O frontend se comunica com o backend através dos seguintes endpoints:

- `GET /livros` - Lista todos os livros
- `GET /livros/:id` - Obtém um livro específico
- `POST /livros` - Cria um novo livro
- `PUT /livros/:id` - Atualiza um livro existente
- `DELETE /livros/:id` - Remove um livro

## 🔒 Configurações de Segurança

- **CORS**: Configurado para aceitar requisições do frontend
- **Validação**: Validação de dados nos formulários
- **Sanitização**: Dados são sanitizados antes do envio

## 🧪 Testes

Para executar os testes:
```bash
npm test
```

## 📦 Build de Produção

Para gerar uma versão otimizada para produção:
```bash
npm run build
```

O build será gerado na pasta `dist/` e pode ser servido por qualquer servidor web estático.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Eder Souza** - [ederaldo.souza93@gmail.com](mailto:ederaldo.souza93@gmail.com)

## 🙏 Agradecimentos

- Equipe do projeto original
- Comunidade React
- Contribuidores do projeto

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório
- Entre em contato: [ederaldo.souza93@gmail.com](mailto:ederaldo.souza93@gmail.com)

---

## Integração com Backend
Segue o link do repositório do Backend
[Backend](https://github.com/EderSouza93/RID183906_desafio05-backend)

