// 个人中心页 Mine.js
import React, { Component } from 'react';
import {View,Text,ImageBackground,FlatList,StyleSheet,Dimensions,TouchableOpacity,Image,AsyncStorage} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
let data1=[{key:'1',ic:'setting',tit:'账户管理'},
{key:'2',ic:'enviromento',tit:'收货地址'},
{key:'3',ic:'idcard',tit:'我的信息'},
{key:'4',ic:'copy1',tit:'我的订单'},
{key:'5',ic:'qrcode',tit:'我的二维码'},
{key:'6',ic:'bulb1',tit:'我的积分'},
{key:'7',ic:'staro',tit:'我的收藏'},{},{}];
let data2=[{key:'1',ic:'tool',tit:'居家维修保养'},
{key:'2',ic:'car',tit:'出行接送'},
{key:'3',ic:'user',tit:'我的受赠人'},
{key:'4',ic:'isv',tit:'我的住宿优惠'},
{key:'5',ic:'flag',tit:'我的活动'},
{key:'mypublish',ic:'form',tit:'我的发布'}];
const width=Dimensions.get('window').width;
const w=width/640;
const styles=StyleSheet.create({
    tou:{
        width:160*w,
        height:160*w,
        backgroundColor:"#eeeeee",
        borderRadius:160*w/2,
        borderWidth:2,
        borderColor:'white',
        overflow:'hidden'
    },
    mine:{
        width:width,
        height:76*w,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:24*w
    },
    list:{
        width:212*w,
        height:122*w,
        backgroundColor:'white',
        alignItems:'center',
    }
})
export default class Mine extends Component {
    constructor(){
        super();
        this.state={
            avatarSource:""
        }
    }
    componentDidMount(){
        var ava=AsyncStorage.getItem('avatar');
        // console.log(this.state.avatarSource+"a");
        this.setState({
            avatarSource:ava.then((res)=>{return res})
        })
    }
    componentWillMount(){
        this.setState({
            avatarSource:AsyncStorage.getItem('avatar').then((res)=>{return res})
        })
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              this.setState({
                avatarSource: source,
              },()=>{
                  AsyncStorage.setItem('avatar',this.state.avatarSource)
                  .then(()=>{})
              });
            }
          });
    }
    signOut=()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    render() {
        return (
            <View style={{backgroundColor:'#eeeeee',height:'100%'}}>
                <View>
                    <ImageBackground style={{width:width,height:404*w,paddingTop:50*w,alignItems:'center'}} source={require('../assets/images/m_02.png')}>
                        <TouchableOpacity style={styles.tou} onPress={()=>{this.takephoto()}}>
                            <Image style={{width:160*w,height:160*w}} source={this.state.avatarSource}/>
                        </TouchableOpacity>
                        <Text style={{color:'white',marginTop:20*w}}>BINNU DHILLON</Text>
                    </ImageBackground>
                </View>
                {/* 我的个人中心 */}
                <View style={styles.mine}>
                    <Text><Icon name='user' size={20} color='#aeaeae'/></Text>
                    <Text style={{color:'#4f4e4e',marginLeft:20*w,fontSize:12}}>我的个人中心</Text>
                </View>
                {/* 列表1 */}
                {/* <View style={{width:width,height:240,backgroundColor:'white',position:'absolute',top:251}}> */}
                    <FlatList 
                        data={data1}
                        numColumns={3}
                        style={{marginTop:1}}
                        renderItem={({item})=><View style={styles.list}> 
                        <Text style={{marginTop:44*w}}><Icon name={item.ic} size={15} color='#aeaeae'/></Text>
                        <Text style={{marginTop:10*w,color:'#4f4e4e',fontSize:12}}>{item.tit}</Text>
                        </View>}
                    />
                {/* </View> */}
                
                {/* 列表2 */}
                <View style={[styles.mine,{marginTop:-5}]}>
                    <Text><Icon name='tagso' size={20} color='#aeaeae'/></Text>
                    <Text style={{color:'#4f4e4e',marginLeft:20*w,fontSize:12}}>E族活动</Text>
                </View>
                <FlatList 
                    data={data2}
                    numColumns={3}
                    style={{marginTop:1}}
                    renderItem={({item})=><TouchableOpacity style={styles.list} onPress={()=>{Actions.mypublish()}}> 
	                <Text style={{marginTop:44*w}}><Icon name={item.ic} size={15} color='#aeaeae'/></Text>
		            <Text style={{marginTop:10*w,color:'#4f4e4e',fontSize:12}}>{item.tit}</Text>
		            </TouchableOpacity>}
                />
                <TouchableOpacity style={{
                    width:150*w,
                    height:50*w,
                    backgroundColor:'red',
                    alignItems:'center',
                    borderRadius:5,
                    justifyContent:'center',
                    marginLeft:150
                }} onPress={this.signOut}>
                    <Text style={{color:'white'}}>退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
