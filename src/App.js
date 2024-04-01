import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css'; // Import your CSS file for styling

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google login response
  };

  return (
    <div className="center">
      <GoogleLogin
        clientId="721750587677-gl0q7r4el0aasj5ka8vmsmt7fpb528on.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
