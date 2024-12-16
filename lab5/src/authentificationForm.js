import React, { useState } from 'react';

const AuthenticationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (username && password) {
      setUsers([...users, { username,password }]);
      setUsername(''); 
      setPassword(''); 
      alert(`User ${username} added successfully`);
    } else {
      alert('Please fill in both fields');
    }
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index)); 
  };

  return (
    <div>
      <h1>Authentication Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>

      <h2>Users List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>
              {`Username: ${user.username}`}
              <button onClick={() => handleDelete(index)}>Delete</button> 
            </li>
          ))
        ) : (
          <p>No users yet.</p>
        )}
      </ul>
    </div>
  );
};

export default AuthenticationForm;
