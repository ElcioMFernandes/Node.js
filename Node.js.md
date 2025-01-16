# Node.js

Node.js foi criado por Ryan Dahl e lançado como um ambiente de execução de JavaScript do lado servidor. Com isso, a execução de códigos JavaScript não ficava mais limitada aos navegadores.

O Node.js foi adotado por grandes empresas como Microsoft, Yahoo! e LinkedIn, aumentando ainda mais sua popularidade. A formação da Fundação Node.js como uma organização sem fins lucrativos para gerenciar e evoluir o projeto. Mais tarde conhecida como OpenJS Foundation.

Em 2013 houve o lançamento da versão 0.10 do Node.js, trazendo melhorias de desempenho e estabilidade. A versão 0.12 lançada em 2015, introduziu o suporte oficial para o ECMAScript 6 (ES6), trazendo recursos modernos ao JavaScript. O lançamento da versão 6 do Node.js, marcando a transição para um ciclo de lançamento de versões Long Term Support (LTS).

Ryan Dahl cria o Deno, o maior concorrente do Node.js, dessa vez fazendo tudo do jeito como ele queria.

## Como o Node.js funciona

### O que o Node.js não é

 1. Node.js não é uma linguagem de programação, a linguagem é JavaScript.

 2. Não é um framework, é um runtime (ambiente de execução) de JavaScript.

 3. Node não é limitado, ele faz tudo que outras tecnologias de backend fazem.

### Como funciona?

Navegadores possuem dois motores, o Rendering Engine e JavaScript Engine. O primeiro, responsável pela renderização do HTML e CSS, o segundo para gerar a interatividade das páginas. Com o crescimento do JavaScript, cada navegador criou seu próprio JavaScript Engine.
|Navegador | Rendering Engine | JavaScript Engine|
|:-:|:-:|:-:|
| Internet Explorer | Trident | Chakra |
| Firefox | Gecko | SpiderMonkey | 
|Google Chrome | Webkit |  V8 |
| Safari | Webkit | JavascriptCore |

Ryan Dahl utilizou do JavaScript Engine V8, do Google Chrome para criar o Node.js, para isso ele utilizou uma camada extra, com libuv, para criar um event loop e conversar com o sistemas operacional.

## Projeto Node.js

### Iniciar projeto
Por padrão em muitos projetos, os arquivos `.js` são colocados em um diretório chamado `src`, que geralmente contém o arquivo de ponto de entrada e outros arquivos do projeto. Para iniciar o seu projeto você pode usar o Node Package Manager, conhecido como npm, utilize o comando `npm init`. O npm vai fazer uma série de perguntas, e ao final será criado um package.json parecido com:

```
{
	"name":  "client",
	"version":  "1.0.0",
	"main":  "index.js",
	"scripts":  {
	"test":  "echo \"Error: no test specified\" && exit 1"
},
	"author":  "Élcio Mateus Fernandes",
	"license":  "ISC",
	"description":  ""
}
```

Você também pode utilizar o comando `npm init -y` para criar um projeto de maneira mais rápida, o argumento `-y`indica que você está dando sim para todas as perguntas do questionário.

Por padrão, os arquivos .js são colocados dentro de um diretório chamado src, nesse diretório geralmente ficam o arquivo de ponto de entrada e arquivos de configuração.

### Executar projeto

Para executar um arquivo .js, deve ser utilizado o comando `node` seguido do nome do arquivo, `node index.js`. Caso esteja dentro de um diretório o comando deve conter o caminho até o arquivo, considerando o diretório atual do terminal, ou seja, se você estiver no diretório raiz `~/Documentos/www/Node.js` e seu arquivo de entrada estiver em `~/Documentos/www/Node.js/src/index.js` você precisa utilizar comando `node src/index.js`. O Node.js oferece uma funcionalidade chamada `--watch`, disponível nas versões mais recentes, que reexecuta automaticamente o arquivo sempre que é feita uma alteração. O comando seria: `node --watch src/index.js`."

### Scripts

O arquivo package.json possui um dicionário chamado `scripts`, dentro dele podemos colocar atalhos,  que quando executados no terminal vão executar o que está descrito no package.json. Se colocarmos algo como:
```
"dev": "node src/index.js" ,
```

Ao rodar o comandos `npm run dev` no diretório do projeto, estaremos na realidade rodando o comandos `node src/index.js`.
