import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './chatmain.css';

const App = () => {
  // if we are not logged in then we are going to return the login form
  if (!localStorage.getItem('username')) return <LoginForm />;
  /* height="100vh will cover full size of the laptop screen"
  userSecret is a password */
  return (
    <ChatEngine
      height="88vh"
      max-width="88vh"
      projectID="cddf3fa0-3a85-4556-9226-ba46e1714bfd"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      /* With the help of this we can render for entire chat feed */
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;