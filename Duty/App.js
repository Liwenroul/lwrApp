// App.js
import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,//相当于div
  Text,
  Dimensions,
  AsyncStorage,
  BackHandler,ToastAndroid
} from 'react-native';
import { Router ,Scene,Tabs,Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import Home from './component/Home';
import Kind from './component/Kind';
// import Buy from './component/Buy';
import Mine from './component/Mine';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Login from './component/Login';
import Enter from './component/Enter';
import SwiperPage from './component/Swiperpage';
import MinePublish from './component/MinePublish';



// import Icon from 'react-native-vector-icons/Feather';


const width=Dimensions.get('window').width;
const styles = StyleSheet.create({
  
});


const App = () => {
  let [isLogin,setLogin]=useState(false);
  let [isInstall,setInstall] = useState(true);
  let now=0;
  useEffect(()=>{
    AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
    AsyncStorage.getItem('user')
    .then(res=>{
      if(!user){
        SplashScreen.hide();
      }
      let user=JSON.parse(res);
      if(user&& user.token){
        setLogin(true);
        SplashScreen.hide();
      }
      console.log(res);
    })
  },[])
  let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  return (
    <Router backAndroidHandler={()=>{
      now = new Date().getTime();
      if(Actions.currentScene != 'home'){
        Actions.pop();
        return true;
      }else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
      
    }}>
      <Scene key='root'>
        <Tabs key='tabber' header={null} hideNavBar activeTintColor='red' inactiveTintColor='#666666' >
          <Scene key='home' title='首页' icon={({focused})=><Icon name='home' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='ho' component={Home}/>
          </Scene>
          <Scene key='kind' title='商品分类' icon={({focused})=><Icon name='windowso' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='ki' component={Kind}/>
          </Scene>
          {/* <Scene key='buy' title='购物车' icon={({focused})=><Icon name='shoppingcart' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='bu' component={Buy}/>
          </Scene> */}
          <Scene key='mine' title='个人中心' icon={({focused})=><Icon1 name='person-outline' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='mi' component={Mine}/>
          </Scene>
        </Tabs>
        <Scene key='login' initial={!isLogin} hideNavBar component={Login} title='登录'/>
        <Scene key='enter' component={Enter} hideNavBar title='注册'/>
        <Scene key='mypublish' hideNavBar component={MinePublish} title="我的发布" />
      </Scene>
    </Router>
  );
};

export default App;