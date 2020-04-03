import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity,Dimensions,ToastAndroid,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../comp/utils';
import Icon from 'react-native-vector-icons/AntDesign';


const width=Dimensions.get('window').width;
const w=width/640;
export default class Enter extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            users:[]
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    enter=()=>{
        if(this.state.username!="" && this.state.pwd!=""){
            // this.setState({isloading:true})
            myFetch.post('/enter',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
            //   console.log(res);
                // 根据返回状态进行判断，正确时跳转首页
                // if(res){
                  
                // }
                this.setState({
                    users:[...this.state.users].push({"username":this.state.username,"pwd":this.state.pwd})
                })
                AsyncStorage.setItem('user'+(Math.random() + 1) * Math.pow(10,5-1),JSON.stringify(res.data))
                .then(()=>{
                    ToastAndroid.show("注册成功", ToastAndroid.SHORT)
                    Actions.login();
                })
                console.log(this.state.users)
            })
          }
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
                    borderRadius:5
                }}
                onPress={this.enter}>
                <Text style={{color:'white'}}>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'red',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:5
                }}
                onPress={()=>Actions.pop()}>
                <Text style={{color:'white'}}>返回登录</Text>
            </TouchableOpacity>
        </View>
      </View>
        )
    }
}
