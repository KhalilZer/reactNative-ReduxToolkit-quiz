import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import Data from '../DATA/data.json';
import { RenetialiserCount, RenitialiserAnswer } from '../redux/quizeSlice';




const Resultats = ({navigation}) => {
    const score =useSelector((state)=>state.quiz.score);
   
    const dispatch=useDispatch();
    const goToQuiz=()=>{
        dispatch(RenetialiserCount())
        dispatch(RenitialiserAnswer())
       navigation.navigate("Quiz")
       
    }
  return (
    <View>
     {/*  Import header */}
      <Header/>
      <View style={{
        height:"auto",
        marginHorizontal:20,
        borderRadius:20,
        backgroundColor:"white",
        marginTop:100,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        alignItems:'center',
      }}>

      <Text style={styles.h1}>Félicitation</Text>
      <Text style={styles.reponses}>Voici votre score : </Text>
      <View style={{
        height:70,
        width:'50%',
        backgroundColor:"#cfe0f3",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        alignItems:'center',
        justifyContent:'center'
      }}
      >
      <Text style={styles.h1}> {score} / {Data.length}</Text>
      </View>
       
        <TouchableOpacity style={styles.btnSuivant} onPress={()=>goToQuiz() }>
             <Text style={{color:"white",fontWeight:'bold'}}>Refaire le test</Text>
        </TouchableOpacity>
      </View>
       
    </View>
  )
}

export default Resultats

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
   marginVertical:20,
   
  },
  h1:{
   textAlign: "left",
   padding:10,
    fontWeight: 'bold',
    fontStyle: '',
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