import React from "react";

import { View, TextInput, Button } from 'react-native';

import { AuthContext } from '../common/GB_Common';


function SignInScreen() 
{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const  {signIn}  = React.useContext(AuthContext);
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
      </View>
    );
  }
  
  export default SignInScreen;