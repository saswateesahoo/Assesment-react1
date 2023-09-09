import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'saswati', age: 23 },
        { id: 2, name: 'ipsita', age: 24 },
        { id: 3, name: 'sangita', age: 25 },
      ],
    };
  }

  handleDelete = (id) => {
    const updatedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: updatedUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>Name: {user.name}, Age: {user.age}</span>
              <button onClick={() => this.handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
