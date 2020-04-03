
import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,//相当于div
  Image,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

const width=Dimensions.get('window').width;
const styles = StyleSheet.create({
  first:{
    width:width,
    height:59,
    borderBottomWidth:1,
    borderBottomColor:'#dedede',
    justifyContent:'center',
    alignItems:'center'
  },
  second:{
    flexDirection:'row',
    textAlign:'center',
    
  },
  text:{
    width:'18%',
    paddingLeft:30
  },
  third:{
    width:width,
    backgroundColor:'#f4f4f4',
    flex:1
  },
  box:{
    width:'45%',
    height:400,
    alignItems:'center',
    backgroundColor:'#fff',
    overflow:"hidden",
    marginLeft:'3.33%',
    marginTop:10,
    paddingLeft:10,
  }
});


const App = () => {
  let [da,setDa]=useState([{key:'1',str:require('./assets/images/1_03.png'),
  t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'4',str:require('./assets/images/1_03.png')
  ,t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'2',str:require('./assets/images/1_03.png')
  ,t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'3',str:require('./assets/images/1_03.png')
  ,t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'},{key:'5',str:require('./assets/images/1_03.png'),
  t1:'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',t2:'36.00'}
]);
  return (
    <View>
      <View style={styles.first}>
        <View style={{width:"80%"}}>
          <TextInput placeholder='请输入商品名称' style={{height:40,backgroundColor:'#eeeeee',borderRadius:3,color:'#c9c9c9'}}/>
          {/* <Icon name="search"/>; */}
        </View>
      </View>
      <View style={[styles.first,styles.second]}>
        <View style={styles.text}><Text style={{fontSize:16,color:'red'}}>综合</Text></View>
        <View style={styles.text}><Text style={{fontSize:16}}>销量</Text></View>
        <View style={styles.text}><Text style={{fontSize:16}}>新品</Text></View>
        <View style={styles.text}><Text style={{fontSize:16}}>价格</Text></View>
        <View style={styles.text}><Text style={{fontSize:16}}>信用</Text></View>
      </View>
      
	  <ScrollView>
	  <FlatList numColumns={2} data={da} renderItem={({item})=><View style={styles.box}>
	  <Image source={item.str}/>
		  <Text>{item.t1}</Text>
		  <Text style={{color:'red',marginTop:10,marginLeft:-120}}>{item.t2}</Text>
		  </View>}/>
		  </ScrollView>
    </View>
  );
};

export default App;