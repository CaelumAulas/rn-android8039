import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import CardPost from '../components/CardPost'
import FotosService from '../services/FotosService';

export default class FeedScreen extends Component {
  state = {
    fotos: []
  }

  componentDidMount() {
    FotosService.pegaOFeedComAsFotos()
      .then((fotos) => {
        this.setState({
          fotos: fotos
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