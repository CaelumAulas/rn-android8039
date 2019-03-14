import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

export default class CommentsArea extends Component {
  state = {
    comments: ['Algo']
  }
  comentar = () => { }
  render() {
    return (
      // npm install formik
      <Formik
        initialValues={{ comment: '' }}
        validate={(values) => {
          const errors = {}

          if(!values.comment) {
            errors.comment = 'O campo comentário é obrigatório'
          }

          return errors
        }}
        onSubmit={values => {
          console.warn(values)
        }}
      >
        {
          (props) => {
            return (
              <View>
                <Text>{ JSON.stringify(props.errors) }</Text>
                <Text>{ JSON.stringify(props.touched) }</Text>
                <TextInput
                  onChangeText={props.handleChange('comment')}
                  onBlur={() => props.setFieldTouched('comment')}
                  value={props.values.comment}
                />
                <Text>{ props.errors.comment }</Text>
                <Button 
                  title="Enviar comentario"
                  onPress={props.handleSubmit}  />

                {
                  this.state.comments.map((comment, indice) => {
                    return (
                      <View key={indice}>
                        <Text>- Comentario: {comment}</Text>
                      </View>
                    )
                  })
                }
              </View>
            )
          }
        }
      </Formik>
    )
  }
}