import React, { Component } from "react";
import Logo from './components/Logo';
import Underline from './components/Underline';
import ApiRequest from './components/ApiRequest';
import Form from './components/Form';

class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      firstName: '',
      lastName: '',
      users: 'Загрузка данных...',
    };
    this.handleChange = this.handleChange.bind(this);  
  }

  componentDidMount() {
    // Add event listeners for static form
    const form = document.getElementById('project-form');

    form.addEventListener('submit', (e) => e.preventDefault());

    form.querySelectorAll('input').forEach(input => {
      this.setState({
        [input.name]: input.value
      });
      input.addEventListener('input', this.handleChange);
    });

    // Fetch data from server
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные');
        }
        return response.json();
      })
      .then(data => {
        const getRandomId = () => Math.floor(Math.random() * 10) + 1;
        const idsToRemove = [getRandomId(), getRandomId()];
        const result = [];
        data.forEach(user => {
          if (!idsToRemove.includes(user.id)) {
            result.push(`${user.name} ${user.username}`);
          }      
        });
        this.setState({
          users: result,
        });
      })
      .catch(error => {
        this.setState({
          users: error.message,
        });
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }  

  render() {
    return (
      <div>
        <h1>Тестовое задание</h1>
        <Logo />
        <Underline />
        <ApiRequest users={this.state.users} />
        <Form firstName={this.state.firstName} lastName={this.state.lastName} />
      </div>
    );
  }
}

export default App;
