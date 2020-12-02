import React from 'react';

import {
  View,
  TouchableOpacity
} from 'react-native';

import ProjectList from '../ProjectList';
import DeviceList from '../DeviceList';

import { 
  Layout, 
  Card,
  Text
} from '@ui-kitten/components';

import { connect } from 'react-redux';

function Dashboard(props){
  const [ activePane, setActivePane ] = React.useState('Projects')

  const menu = [
  {
    name: "Projects"
  },
  {
    name: "Devices"
  }
  ]

  const renderPane = () => {
    switch(activePane){
      case 'Projects':
        return (<ProjectList />)
      case 'Devices': 
        return (<DeviceList />)
      default:
        return null;
    } 
  }

  return (
    <Layout style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
      <Card style={{flex: 0.2}}> 
        <View style={{borderBottomWidth: 1, borderColor: 'purple'}}>
        <Text category="h4">WorkHub</Text>
          </View>
          {menu.map((x) => (
            <TouchableOpacity onPress={() => setActivePane(x.name)}>
              <View style={{height: 50, display: 'flex', borderBottomWidth: 2, borderColor: 'purple', justifyContent: 'center'}}>
                <Text category="h6">{x.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

      </Card>
      <View style={{flex: 0.8, backgroundColor: "#dfdfdf"}}>
        {renderPane()}
      </View>
    </Layout>
  );
}

export default connect((state) => ({
  token: state.auth.token
}))(Dashboard)
