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
        clientId="Enter the Key"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
