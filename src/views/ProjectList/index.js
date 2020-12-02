import React from 'react';

import {
  Layout,
  List,
  ListItem,
  Text
} from '@ui-kitten/components';

import { connect } from 'react-redux';
import { getProjects } from '../../actions/projectActions';

function ProjectList(props){

  React.useEffect(() => {
    props.getProjects();
  }, [])

  const renderItem = ({item, index}) => (
    <ListItem title={`${item.name} `} />
  )

  return (
    <Layout style={{flex: 1, backgroundColor: "#dfdfdf", padding: 8}}>
      <Text category="h4">Projects</Text>
      <List
        data={props.projects}
        renderItem={renderItem} />
    </Layout>
  );
}

export default connect((state) => ({
  projects: state.project.list
}), (dispatch) => ({
  getProjects: () => dispatch(getProjects())
}))(ProjectList)
