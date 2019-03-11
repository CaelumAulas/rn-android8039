import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import CardPost from './src/components/CardPost'
export default class App extends Component {
  render() {
    const fotos = [
      { usuario: 'omariosouto', fotoPerfil: 'https://avatars0.githubusercontent.com/u/13791385?s=460&v=4', url: 'https://placehold.it/1000x1000' },
      { usuario: 'seila', fotoPerfil: 'https://placehold.it/1000x1000', url: 'https://placehold.it/1000x1000' },
    ]
    return (
      <ScrollView style={ { backgroundColor: 'white' } } >
        {
          fotos.map(function(foto, indice) {
            // https://flexboxfroggy.com/
            return ( <CardPost key={indice} foto={foto} />)
          })
        }
      </ScrollView>
    );
  }
}