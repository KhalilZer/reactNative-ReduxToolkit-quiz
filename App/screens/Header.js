
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import React, { PureComponent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Data from '../DATA/data.json';
import { SetNewTime } from '../redux/quizeSlice';



const Header = () => {
  
const dispatch=useDispatch();
const countSt =useSelector((state)=>state.quiz.count);
const time =useSelector((state)=>state.quiz.time);

//TIMER
const [timerMin , setTimerMin]=useState("00")
const [timerSec,setTimerSec]=useState("00")
let interval=useRef()

const startTimer = ()=>{
    
    const countDown=Date.now()+time*1000;
    interval =setInterval(() => {

       
        const now=new Date();

        const distance=countDown-now;
        const min=Math.floor(distance %(1000*60*60) / (1000*60))
        const sec=Math.floor((distance % (1000 * 60)) / 1000)
         

        if(distance<0){
           clearInterval(interval.current)
        } 
        else{
           setTimerMin(min)
          
           setTimerSec(sec)
        }
    }, 1000);
}

//FIN TIMER

useEffect(()=>{
    
    startTimer();
    
    return () =>{
        clearInterval(interval)
    }
})

return (
          
    <SafeAreaView style={{ borderRadius:50, width: '100%',height:300, backgroundColor: '#5fc8f8' }} >
         <View style={{padding:15}}>
            <Text style={{color:"white",fontSize:30,alignSelf:"flex-start"}}>Hi User Name</Text>
            <Text style={{alignSelf:"flex-start"}}>Quiz application Zerzour Khalil</Text>
              
         </View>
         
        <View style={{
          
          width:"50%",height:100,
          borderRadius:20,
          backgroundColor:"white",
          flexDirection:"row",
          alignSelf:"center",
          marginTop:100,
          }}>
          
          
              <View style={styles.miniBox}>
                   <Text style={styles.QuestionsChiff}> {countSt} / {Data.length}</Text>
              </View>
              
              <View style={styles.miniBox}>
                <Text style={styles.QuestionsChiff}>{timerMin}: {timerSec}</Text>
              </View>
        </View>
        
         
    </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
miniBox:{
    width:"35%",height:60,
    backgroundColor:"#cfe0f3",
    alignSelf:"center",
    marginHorizontal:15,
    justifyContent:"center",
    alignItems:"center"
},
QuestionsChiff:{
    fontSize:18,
    fontWeight:"bold",
    textAlignVertical:"center"
},
h1:{
   textAlign: "left",
   padding:10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
 },
 questiontext:{
    textAlign: "left",
    padding:10,
    fontSize: 20,
 },
 reponses:{
    textAlign: "left",
    padding:10,
    fontSize: 20,
 }
})