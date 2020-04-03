// App.js
import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,//相当于div
  Text,
  Dimensions,
} from 'react-native';
import { Router ,Scene,Tabs} from 'react-native-router-flux';
import Home from './component/Home';
import Kind from './component/Kind';
import Buy from './component/Buy';
import Mine from './component/Mine';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import MinePublish from './component/MinePublish';



// import Icon from 'react-native-vector-icons/Feather';

const width=Dimensions.get('window').width;
const styles = StyleSheet.create({
  
});


const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Tabs key='tabber' header={null} hideNavBar activeTintColor='red' inactiveTintColor='#666666' >
          <Scene key='home' title='首页' icon={({focused})=><Icon name='home' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='ho' component={Home}/>
          </Scene>
          <Scene key='kind' title='商品分类' icon={({focused})=><Icon name='windowso' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='ki' component={Kind}/>
          </Scene>
          <Scene key='buy' title='购物车' icon={({focused})=><Icon name='shoppingcart' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='bu' component={Buy}/>
          </Scene>
          <Scene key='mine' title='个人中心' icon={({focused})=><Icon1 name='person-outline' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='mi' component={Mine}/>
          </Scene>
        </Tabs>
        <Scene key='mypublish' hideNavBar component={MinePublish} title="我的发布" />
      </Scene>
    </Router>
  );
};

export default App;