import { Animated, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native'


import {React, useEffect, useState} from 'react'
import Header from './Header';
import Data from '../DATA/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { AddScore, cmt, DecrScore, FillAnsweer, IncrementerCount, QuizSlice, SetTime } from '../redux/quizeSlice';





const Quiz = ({navigation}) => {
  
  const dispatch=useDispatch();
  const countSt =useSelector((state)=>state.quiz.count);
  const scoreActuel =useSelector((state)=>state.quiz.score);
  const answerPressed =useSelector((state)=>state.quiz.answer);
  const [valueAnswer, setValueAnswer] = useState(false)


  const HandleIncr=()=>{
    if (valueAnswer) 
    {
      dispatch(AddScore()) 
      setValueAnswer(false)
    }
    if (countSt<3) {
      dispatch(IncrementerCount())
      dispatch(SetTime())
    }
    else{
      setValueAnswer(false);
        navigation.navigate('Resultats')  
    }
  }
  
 return (
   
    <View>
     {/*  Import header */}
      <Header/>
     
      <View style={{
        marginTop:80,
      }}>
        <Text style={styles.h1}>Question N°{countSt}</Text>
        <Text style={styles.questiontext}>{Data[countSt-1].label}</Text>

        {/* Lesreponses */}
       {Data[countSt-1].answers.map((answer)=>(
         <View style={styles.reponses}>
          
          <TouchableOpacity   style={answerPressed==answer.label? styles.btnPressed:styles.btnReponses} onPress={()=>{setValueAnswer(answer.correct),dispatch(FillAnsweer(answer.label))}}>
            <Text style={{color:"black",fontWeight:'bold',fontSize:16}}>{answer.label}</Text>
          </TouchableOpacity>
            
        </View>
       ))}
      </View>
       
          <TouchableOpacity style={styles.btnSuivant} onPress={()=>HandleIncr()}>
              <Text style={{color:"white",fontWeight:'bold'}}>Suivant</Text>
          </TouchableOpacity>
      
       
    </View>
    
 
  );
}

export default Quiz

const styles = StyleSheet.create({
  btnSuivant:{
   alignSelf:"center",
   borderWidth:2,
   borderColor:"#5fc8f8",
   borderRadius:16,
   backgroundColor:"#5fc8f8",
   height:30,
   width:200,
   alignItems:"center",
   justifyContent:'center',
   marginVertical:30

   
  },
  btnReponses:{
      borderRadius:12,
      width:'90%',
      paddingHorizontal:10,
      paddingVertical:10,
      shadowColor: "#000",
      backgroundColor:"rgb(238,254,255)",
      shadowOffset: {
        width: 0,
        height: 8,
      },

      shadowOpacity: 0.4,
      shadowRadius: 8,

      elevation: 17,
  },
  btnPressed:{
      borderRadius:12,
      opacity:0.2,
      width:'90%',
      paddingHorizontal:10,
      paddingVertical:10,
      shadowColor: "#000",
      backgroundColor:"rgb(238,254,255)",
      shadowOffset: {
        width: 0,
        height: 8,
      },

      shadowOpacity: 0.4,
      shadowRadius: 8,

      elevation: 17,
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
    textAlign: "center",
    padding:10,
    fontSize: 14,
    flexDirection:"row"
 }
})