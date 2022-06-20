import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    notas: []
  } 

  componentDidMount() {
    axios.get(`http://localhost:3002/api/notes/`)
      .then(res => {
        const notas = res.data;
        this.setState({ notas });
      })
  }

  render() {
    return (
      <ul>
        { this.state.notas.map(person => <li>{person.body}</li>)}
      </ul>
    )
  }
}