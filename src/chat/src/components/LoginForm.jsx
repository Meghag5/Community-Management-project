import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
  // here we will need two fields for login username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // this will popup if our password or username is wrong
  const [error, setError] = useState('');

  // our handle submit accepts again the event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': 'cddf3fa0-3a85-4556-9226-ba46e1714bfd', 'User-Name': username, 'User-Secret': password };

    try {
      // we are making request to inner versions of chat apis
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      // this is for if we are logged in then again and again there is no need to login
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // at last we want to reload the page
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
