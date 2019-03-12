## O que vocês esperam ver no curso?
- Funcionando no Final
- Deploy
    - Gerar screenshots: https://github.com/wix/Detox
    - Deploy automatico: https://medium.com/reactbrasil/como-configurar-o-fastlane-com-seu-aplicativo-react-native-6a11f5781759
        - https://fastlane.tools/
    - 
- Comunicação com WebServices
    - Instaelum
- Roteamento
    - React Navigation
- Animações
- Webview
- Persistencia Local
    - Async Storage
- Como funciona o React Native
- Geralzão do React
- 


## Começando um projeto
- react-native init nomedoprojeto
    - pastinha/
        - ios
        - android
    - bundle.js


## Dicas para layout
- Bootstrap do React Native: https://docs.nativebase.io/Components.html#fabs-def-headref
- https://material.io/design/
- https://developer.apple.com/design/resources/


## Padrões e boas práticas
- https://standardjs.com/
- https://github.com/airbnb/javascript

- Não usem FLOW

## Animações
- Animações fluidas: https://airbnb.design/lottie/
- 


## Debug
- https://github.com/infinitered/reactotron


## Funções de Array

function map(funcao) {
    const arrayInicial = this
    const novoArray = []

    for(item of arrayInicial) {
        novoArray.push(funcao(item))
    }

    return novoArray
}

function forEach(funcao) {
    const arrayInicial = this

    for(item of arrayInicial) {
        funcao(item)
    }
}


## Coisas de funcao

function: o this é dinamico, muda de acordo com o contexto de execuçãpo
arrow function: this ele é estático, sempre o do momento de criação