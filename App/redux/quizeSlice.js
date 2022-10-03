import {createSlice } from "@reduxjs/toolkit";
import Data from '../DATA/data.json';

export const QuizSlice=createSlice({
    name:"quiz",
    initialState:{answer:"",count:1,score:0,time:Data[0].time},
    reducers:{
        IncrementerCount:(state,action)=>{
             return{...state, count:state.count+1}
        },
        RenetialiserCount:(state,action)=>{
           return {...state,count:1,score:0}
        },
        AddScore:(state,action)=>{
            return {...state,score:state.score+1}
        },
        DecrScore:(state,action)=>{
            return {...state,score:state.score-1}
        },
        RenitialiserAnswer:(state,action)=>{
            return {...state,answer:""}
        },
        FillAnsweer:(state,action)=>{
            return {...state,answer:action.payload}
        },
        SetTime:(state,action)=>{
            return {...state,time:Data[state.count-1].time}
        },
        SetNewTime:(state,action)=>{
            return {...state,time:action.payload}
        }
    }
});
export const {SetNewTime,FillAnsweer,IncrementerCount,RenetialiserCount,AddScore,SetTime,DecrScore,RenitialiserAnswer}=QuizSlice.actions;
export default QuizSlice.reducer

