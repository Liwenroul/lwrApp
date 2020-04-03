import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,ToastAndroid,ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';



const width=Dimensions.get('window').width;
const w=width/640;
const styles=StyleSheet.create({
    list:{
        width:width,
        height:w*64,
        borderBottomWidth:1,
        borderBottomColor:'#f5f5f5',
        borderStyle:'dashed',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:"center",
        paddingLeft:18*w
    },
    btn:{
        width:150*w,
        height:46*w,
        backgroundColor:'#f23030',
        borderRadius:23,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default class MinePublish extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            num:1,
            isloading:true
        }
    }
    componentWillMount(){
        fetch("https://cnodejs.org/api/v1/topics?limit=12")
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data,
                isloading:false
            })
        })
    }
    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5',width:width,height:"100%"}}>
                <View style={{backgroundColor:'#f23030',width:width,height:70*w,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginLeft:35*w}} onPress={()=>{Actions.pop()}}
                    ><Icon name='left' size={28*w} color='white'/></Text>
                    <Text style={{color:'white',marginLeft:210*w,fontSize:28*w}}>我的发布</Text>
                    <Text style={{marginLeft:210*w}}><Icon name='ellipsis1' size={28*w} color='white'/></Text>
                </View>
                <View style={{marginTop:7*w,height:64*w*12}}>
                    {
                        this.state.isloading
                        ?<View style={{alignItems:'center',justifyContent:'center'}}><ActivityIndicator size="large" color="red" /><Text>正在加载...</Text></View>
                        :null
                    }
                    {
                        this.state.data.map((item,index)=>(
                            <View style={styles.list}>
                                <Text>{item.title.length>15?item.title.slice(0,12)+"...":item.title}</Text>
                                <Text style={{position:'absolute',right:120*w}}>{item.create_at.slice(0,10)}</Text>
                                {
                                    Math.round(Math.random())==0?(<Text style={{position:'absolute',right:20*w}}>已回复</Text>):<Text style={{position:'absolute',right:20*w,color:'#f23030'}}>待回复</Text>  
                                }
                                
                            </View>
                        ))
                    }
                </View>
                <View style={{width:width,height:120*w,backgroundColor:'white',flexDirection:'row',alignItems:'center',paddingLeft:20*w}}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{
                        if(this.state.num==1){
                            ToastAndroid.show("内容自定", ToastAndroid.SHORT)
                        }
                        else{
                            this.setState({
                                num:this.state.num-1
                            },()=>{
                                fetch("https://cnodejs.org/api/v1/topics?limit=12&&page="+this.state.num)
                                .then((res)=>res.json())
                                .then((res)=>{
                                    this.setState({
                                        data:res.data
                                    })
                                })
                            }) 
                        }
                    }}>
                        <Text style={{color:'white'}}>上一页</Text>
                    </TouchableOpacity>
                    <Text id="num" style={{marginLeft:110*w,marginRight:110*w}}>第{this.state.num}页</Text>
                    <TouchableOpacity style={styles.btn} onPress={()=>{
                        this.setState({
                            num:this.state.num+1
                        },()=>{
                            fetch("https://cnodejs.org/api/v1/topics?limit=12&&page="+this.state.num)
                            .then((res)=>res.json())
                            .then((res)=>{
                                this.setState({
                                    data:res.data
                                })
                            })
                        })
                    }}>
                        <Text style={{color:'white'}}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

