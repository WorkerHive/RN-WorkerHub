import React from 'react';

import {
  View,
  Image,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { 
  Card, 
  Layout, 
  Button, 
  Avatar,
  Input as TextInput, 
  Text } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { auth } from '../../actions/authActions';

function Login(props){
  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')

  React.useEffect(() => {
    if(props.token != null){
      props.navigation.navigate('Dashboard')
    }
  }, [])

  const login = () => {
    //HIT the api
    props.auth(username, password, (r) => {
     props.navigation.navigate("Dashboard")
    })
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card style={{width: '50%', height: '50%', display: 'flex'}}>
        <View style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', marginBottom: 12}}>
          <SvgUri width={150} height={150} uri={`https://avatars.dicebear.com/4.4/api/avataaars/${username}.svg`} />
        </View>
        <TextInput placeholder="Username" value={username} onChangeText={(e) => {
          setUsername(e)
        }}/>
        <TextInput type="password" placeholder="Password" value={password} onChangeText={(e) => {
          setPassword(e)
        }}/>
        <Button onPress={login}>Login</Button>
      </Card>
    </Layout>
  );
}

export default connect((state) => ({
  token: state.auth.token
}), (dispatch) => ({
  auth: (username, password, cb) => dispatch(auth(username, password, cb))
}))(Login)
