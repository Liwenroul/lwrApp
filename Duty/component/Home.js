//服务页 Home.js
import React, { Component } from 'react';
import {TouchableOpacity,View,Image,Text,TextInput,StyleSheet,FlatList,Dimensions, ScrollView,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';


let data=[{key:'1',img:require('../assets/images/s_02.png'),tit:'居家维修保养'},
{key:'2',img:require('../assets/images/s_08.png'),tit:'住宿优惠'},
{key:'3',img:require('../assets/images/s_10.png'),tit:'出行接送'},
{key:'4',img:require('../assets/images/s_12.png'),tit:'E族活动'} ]
const width=Dimensions.get('window').width;
const w=width/640;
const height=Dimensions.get('window').height;

const styles=StyleSheet.create({
    first:{
        width:width,
        height:70*w,
        backgroundColor:'#f23030',
        alignItems:'center',
        paddingLeft:24*w,
        flexDirection:'row'
    },
    search:{
        width:527*w,
        height:50*w,
        backgroundColor:'white',
        opacity:0.7,
        borderRadius:50*w/2,
        flexDirection:'row'
    },
    motion:{
        width:width,
        height:274*w,
        backgroundColor:'red',
        overflow:"hidden"
    },
    list:{
        width:width,
        height:120*w,
        backgroundColor:'white',
        marginTop:10*w,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:24*w
    },
    btn:{
        width:544*w,
        height:66*w,
        backgroundColor:'#f23030', 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:36*w,
        marginLeft:50*w
    }
});

export default class Home extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor={'#f23030'}/>
                <View style={styles.first}>
                    <View style={styles.search}>
                        <Text style={{marginTop:3,marginLeft:29*w}}><Icon1 name="search" size={20} color="white" /></Text>
                        <TextInput placeholder='请输入你要输入的关键字' placeholderTextColor="white" style={{height:50*w,padding: 0,paddingLeft:20*w}}/>
                    </View>
                    <Text style={{marginLeft:24*w}}><Icon name="shoppingcart" size={20} color="white" /></Text>
                </View>
                {/* 轮播 */}
                <ScrollView pagingEnabled={true} horizontal={true}>
                    <View style={styles.motion}>
                        <Image style={{width:360,height:170}} source={require('../assets/images/server.png')}/>
                    </View>
                    <View style={styles.motion}>
                        <Image style={{width:360,height:170}} source={require('../assets/images/server.png')}/>
                    </View>
                    <View style={styles.motion}>
                        <Image style={{width:360,height:170}} source={require('../assets/images/server.png')}/>
                    </View>
                </ScrollView>
                {/* 列表 */}
                <FlatList 
                    data={data}
                    renderItem={({item})=><View style={styles.list}>
	                <Image style={{width:98*w,height:120*w}} source={item.img}/>
		            <Text style={{marginLeft:44*w}}>{item.tit}</Text>
		            {/* <Icon/> */}
		            </View>}
                />
                {/* 按钮 */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'white'}}>发布需求</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
