import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ActivityIndicator,BackHandler,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../comp/utils';

let now=0;
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false,
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      if(this.state.username!="" && this.state.pwd!=""){
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
          console.log(res);
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){
              
            // }
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.home();
                })
        })
      }
       
    } 
    componentWillMount(){
      BackHandler.removeEventListener('back',()=>{//返回键（默认返回桌面，可以设置返回上一级）监听后要取消9
        console.log(new Date().getTime());
        now=new Date().getTime();
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show("确定要退出吗",100);
          now =new Date().getTime();
          return true;
        }
      })
    }
    componentDidMount(){
      BackHandler.addEventListener('back',()=>{
        console.log(new Date().getTime());
        now=new Date().getTime();
        if(new Date().getTime()-now<2000){
          console.log("a");
          BackHandler.exitApp();
        }else{
          ToastAndroid.show("确定要退出吗",100);
          now =new Date().getTime();
          return true;
        }
      })
    }
    
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Text><Icon name="user" size={20} color="red" /></Text>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Text><Icon name="lock" size={20} color="red" /></Text>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'red',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:5,
                }}
                onPress={this.login}>
                <Text style={{color:'white'}}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'red',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:5,
                }}
                onPress={()=>Actions.enter()}>
                <Text style={{color:'white'}}>注册</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View style={{alignItems:'center'}}><ActivityIndicator size="large" color="red" /><Text>正在登录...</Text></View>
            :null
        }
      </View>
    );
  }
}
