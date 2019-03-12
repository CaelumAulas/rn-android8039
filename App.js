import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import CardPost from './src/components/CardPost'
export default class App extends Component {
  state = {
    fotos: []
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then((resposta) => {
      if(resposta.ok) return resposta.json()
    })
    .then((respostaConvertidaEmObjeto) => {
      // this.state.fotos = respostaConvertidaEmObjeto
      // this.render()
      this.setState({
        fotos: respostaConvertidaEmObjeto
      })
    })
  }

  render() {
    const fotos = this.state.fotos
    return (
      <ScrollView style={ { backgroundColor: 'white' } } >
        {
          fotos.map(function(foto, indice) {
            return ( <CardPost key={indice} foto={foto} />)
          })
        }
      </ScrollView>
    );
  }
}