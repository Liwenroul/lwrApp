// 列表页 Kind.js
import React, { Component } from 'react';
import {StyleSheet,
    View,//相当于div
    Image,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const width=Dimensions.get('window').width;
const w=width/640;
const styles = StyleSheet.create({
  first:{
    width:width,
    height:72*w,
    borderBottomWidth:1,
    borderBottomColor:'#dedede',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  second:{
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    width:548*w/5,
    // backgroundColor:'red'
    // paddingLeft:30
  },
  nav:{
    height: 73*w,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth:1,
    borderBottomColor:'#dedede',

  },
  third:{
    width:width,
    backgroundColor:'#f4f4f4',
    flex:1
  },
  box:{
    width:294*w,
    height:418*w,
    alignItems:'center',
    backgroundColor:'#fff',
    overflow:"hidden",
    marginLeft:18*w,
    marginTop:14*w,
    paddingLeft:18*w
  }
});

let da=[{key:'1',str:require('../assets/images/1_03.png'),
t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'4',str:require('../assets/images/1_03.png')
,t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'2',str:require('../assets/images/1_03.png')
,t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'3',str:require('../assets/images/1_03.png')
,t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'5',str:require('../assets/images/1_03.png'),
t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'}
];
export default class Kind extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
              <View style={styles.first}>
                <View style={{width:548*w,height:48*w,flexDirection:'row',backgroundColor:'#eeeeee',borderRadius:3,paddingLeft:22*w,alignItems:'center'}}>
                  <TextInput placeholder='请输入商品名称' style={{height:48*w,padding:0,backgroundColor:'#eeeeee',color:'#c9c9c9'}}/>
                  <Text style={{marginLeft:170}}><Icon name='search1' size={15} style={{color:'#c9c9c9'}}/></Text>
                </View>
              </View>
              <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={{color:'red'}}>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>销量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>信用</Text>
                    </TouchableOpacity>
                </View>

	  <FlatList numColumns={2} style={{backgroundColor: '#F4F4F4'}} data={da} renderItem={({item})=><View style={styles.box}>
	  <Image source={item.str} style={{height:303*w,width:294*w}}/>
		  <Text style={{fontSize:12,color:'#8c8c8c'}}>{item.t1}</Text>
		  <Text style={{color:'red',fontSize:12,marginTop:24*w,marginLeft:-120}}>{item.t2}</Text>
		  </View>}/>
    </View>
        )
    }
}
