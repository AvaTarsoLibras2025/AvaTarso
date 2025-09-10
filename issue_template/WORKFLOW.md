# FLUXO DE TRABALHO
![](/assets/imagens/workflow_git.png)
# Clonando o Repositório
## Passo 1: Aceitar Convite
    Você receberá um convite por email para ser membro da organização "AvaTarsoLibras-2025"
    Aceite o convite clicando no link do email

## Passo 2: Clonar o Repositório CORRETAMENTE
Clonando o repositório: 
    git clone https://github.com/AvaTarsoLibras2025/AvaTarso

Acessando o repositório clonado:
    cd AvaTarso

Para **garantir** que o processo deu certo, confira se os **arquivos em seu diretório são os mesmos arquivos do repositório** no github. Link:
    Link: https://github.com/AvaTarsoLibras2025/AvaTarso

## Passo 3: Configurar Seu Usuário
**Configure seu usuário Git** (CRÍTICO para commits)
    git config --global user.name "Seu Nome Completo"
    git config --global user.email "seu-email@usado-no-github.com"

# Escolhendo uma Issue

## Passo 1: Acessar o Repositório da Organização
Acesse: https://github.com/AvaTarsoLibras-2025/AvaTarso
Vá na aba "Projects", selecione "Site Matemática para Surdos - Sprint Atual".

## Passo 2: Escolher uma Issue
Filtre por "Todo" e labels relevantes
LEIA toda a descrição e comentários

## Passo 3: Assign (Assinar a Tarefa)
Clique na issue desejada

No lado direito → "Assignees" → "Assign yourself"

Mova no Project Board para " In Progress"

# TRABALHANDO NO CÓDIGO
Etapas que você deve fazer **SEMPRE** que for implementar alguma modificação no Repositório local de sua máquina.

## Passo 1: Atualizar Sempre!
    git checkout main
    git pull origin main

## Passo 2: Criar Branch com Nome Correta
**Padrão: tipo/descricao-curta-issue#**
    Exemplo: git checkout -b feat/pagina-inicial-1

**Para correções**:
    git checkout -b fix/botao-calculadora-22

## Passo 3: Desenvolver e Commitar

### Desenvolvimento
**Desenvolva nos arquivos específicos da issue**. No início de cada arquivo do Repositório, a primeira linha orienta o código que o arquivo está destinado a conter.
**Teste localmente antes de adicionar.**
**Adicione arquivos modificados**
    git add caminho/do/arquivo.html

### Commit
**Commit com mensagem clara:**
    git commit -m "feat: adiciona menu navegação

## Passo 4: Enviar para Revisão

### Push para o repositório da organização
    git push origin feat/header-pagina-inicial-45

# CRIAR PULL REQUEST
Vá no repositório: https://github.com/AvaTarsoLibras-2025/AvaTarso

GitHub mostrará um banner para "Compare & pull request"

Preencha:

    Title: [FEATURE] Adiciona header à página inicial (#45)

    Description: Detalhe o que foi implementado

    Reviewers: Adicione @admin ou responsável

    Linked Issues: Fixes #45

# SOLUÇÃO DE PROBLEMAS COMUNS

## Erro de Permissão:
**Verifique se você clonou da URL correta**
    git remote -v
Deve mostrar: origin https://github.com/AvaTarsoLibras-2025/AvaTarso.git

## Erro ao Fazer Push:
**Se a branch não existir remotamente**
    git push --set-upstream origin feat/nome-branch-45

## Esqueceu de Referenciar Issue:
**Corrija o último commit**
    git commit --amend -m "feat: nova mensagem com #45"
    git push --force-with-lease
