# Como usar Next + Tailwind + Storybook

## Add Tailwindcss:
```
npm install -D tailwindcss postcss autoprefixer
```
Iniciando o arquivo de configuração do tailwind com o postcss ```-p```
```
yarn tailwindcss init -p
```
subistitua o conteúdo do arquivo tailwind.config.js por:
```.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Subistitua o conteúdo de ./styles.globals.css com:
```.css
@tailwind base;
@tailwind components;
@tailwind utilities;
````

em ./pages/_app.tsx subistitua o import de 
```import '../styles/globals.css'``` por ```import 'tailwindcss/tailwind.css';```

Agora a aplicação está pronta para iniciar com o tailwindcss.

---
## Add Storybook:
Para o projeto reconhecer o storybook

```.bash
yarn add @storybook/cli --dev
```

e então

```.bash
yarn sb init
```

Subir o servirdor do Storybook:
```.bash
yarn storybook
```
### Possíveis Erros:
#### Tailwind não funciona com Storybook:
- O Storybook pode dar um erro com o a versão do PostCSS do Tailwind alegando que será necessário atualizar para o PostCSS8, será necessário adicionar nas bibliotecas:

```.bash
yarn add @storybook/addon-postcss --dev
```

para adicionar o addon do postcss para que o storybook o reconheça

dentro de ./storybook/main.js subistitua o conteúdo do código por:

```.js
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
        name: '@storybook/addon-postcss',
        options: {
          postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react"
}
```

#### CSS do Tailwind não aparece no storybook:
no arquivo __.storybook/preview.js__ adicione na primeira linha 

```import 'tailwindcss/tailwind.css';```

e reinicie o servidor do storybook novamente.