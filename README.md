# Pass In APP
Este projeto foi feito durante a NLW Unite da Rocketseat na trilha com foco em front end mobile com React Native.

Fiz uma refatoração do projeto pensando principalmente na implementação da arquitetura MVVM e o padrão de projeto Repository.

Ele consiste em um aplicativo onde o usuario pode obter suas credenciais de um evento, que possui telas de:
- Se cadastrar em um evento
- Obter credenciais de um evento que esta partipando
- Crachá com informações dos usuário e um QR Code para realizar o checkin

E as funcionalidades de:
- Persistência de dados da credencial no celular do usuário
- Apliar QR code gerado
- Adicionar uma imagem ao crachá

## Links
Link para design da aplicação no [Figma Layout](https://www.figma.com/community/file/1356738933008624188/unite-summit)

## Principais tecnologias usadas
- **React Native**:
Um framework de desenvolvimento de aplicativos móveis que permite aos desenvolvedores criar aplicativos para iOS e Android utilizando JavaScript e React. React Native oferece uma abordagem de desenvolvimento híbrido, onde grande parte do código é compartilhada entre as plataformas.

- **Typescript**:
Uma linguagem de programação de código aberto que é uma superset da linguagem JavaScript. TypeScript adiciona tipagem estática opcional e outros recursos avançados para ajudar os desenvolvedores a escreverem código mais seguro e escalável.

- **TailwindCSS**:
Um framework de CSS utilitário que facilita a criação de designs responsivos e personalizados. Em vez de usar classes CSS pré-definidas, o TailwindCSS permite a construção de estilos através da aplicação de classes utilitárias diretamente no HTML.

- **Expo**:
Uma plataforma de código aberto para criar aplicativos móveis nativos usando JavaScript e React Native. Expo simplifica o processo de desenvolvimento, fornecendo ferramentas e APIs para acesso a recursos nativos, como câmera, geolocalização e notificações push, sem a necessidade de configuração nativa complexa.

- **Expo Router**:
Uma biblioteca de roteamento para aplicativos Expo e React Native, que facilita a navegação entre telas e a gestão de estados de navegação. Expo Router oferece uma API simples e familiar para definir rotas e transições de tela em aplicativos móveis.

- **Nativewind**:
Um framework de design de interface de usuário para React Native, inspirado no Tailwind CSS. NativeWind fornece classes utilitárias para estilização rápida e flexível de componentes, permitindo aos desenvolvedores criar interfaces de usuário consistentes e responsivas.

- **Zustand**:
Uma biblioteca de gerenciamento de estado para React e React Native, que oferece uma API simples e poderosa para criar e compartilhar estados globais em aplicativos. Zustand é conhecido por sua simplicidade e eficiência, permitindo aos desenvolvedores gerenciar o estado de forma declarativa e sem boilerplate.

- **Async Storage**:
Uma API de armazenamento de dados assíncrona para React Native, que permite aos desenvolvedores armazenar dados de forma persistente no dispositivo do usuário.

- **Axios**:
O Axios é um cliente HTTP baseado em promessas, utilizado principalmente em ambientes JavaScript, como navegadores e Node.js. Ele simplifica a realização de requisições HTTP assíncronas, oferecendo uma API limpa e fácil de usar para enviar e receber dados de servidores web.

- **Expo Image Picker**:
O Expo Image Picker é uma parte do conjunto de ferramentas Expo para desenvolvimento de aplicativos móveis. Ele fornece uma maneira simples de permitir que os usuários escolham imagens da galeria do dispositivo ou tirem fotos usando a câmera.

- **React Native Reanimated**:
O React Native Reanimated é uma biblioteca avançada de animação para React Native. Ela oferece uma API poderosa para criar animações de alta performance e complexas, utilizando o mecanismo nativo de animação do React Native.

- **React Native QR Code SVG**:
Esta é uma biblioteca para a geração de códigos QR em aplicativos React Native. Ela oferece uma maneira simples de criar e exibir códigos QR usando componentes React Native, permitindo a personalização de aparência e funcionalidade conforme necessário.

## Execução
- 1 Dá um fork neste repositório
- 2 Clone ou baixe o seu repositório fork
- 3 Abra seu terminal e navegue até a pasta do projeto
- 4 Rode o commando `npm i` ou `npm install` para baixar as dependências
- 5 Rode o commando `npx expo start` para iniciar o projeto em modo de desenvolvimmento
- ir no arquivo .env e adicionar a base url da api e o event id usado como base

