

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const STATUES = Object.freeze({

    SUCCESS:"success",
    LODGING:"loading",
    ERROR:"error",
})


const visitorSlice = createSlice({
 name: 'navShift',
 initialState: {
    success:false,
    status: STATUES,
    isAuth:false
 },
 reducers: {

     setStatus: (state, action)=>{

        state.status = action.payload;

    },

    getSuccess:(state , action )=>{
        state.success = action.payload;
    },

    getIsAuth: (state, action)=>{

        state.isAuth = action.payload;
    },

 
 }
})

// Action creators are generated for each case reducer function
export const { setStatus, getSuccess ,getIsAuth } = visitorSlice.actions

export default visitorSlice.reducer 



export function submitDetail(formDetail){


    return async function submitDetailThunk(dispatch,getState){

                const initState = getState();
                console.log(initState);

                try {
                    dispatch(setStatus(STATUES.LODGING));

                    const data = await axios('https://floating-depths-11719.herokuapp.com/portfolio/api/post/data',{
                    method:"post",
                    data:formDetail

                    })
                    console.log(data.data);
                    console.log(data.status);
                    dispatch(getSuccess(data.data.success));
                    
                    dispatch(setStatus(STATUES.SUCCESS));
                    
                } catch (error) {
                    
                    dispatch(setStatus(STATUES.ERROR));
                    console.log(error.message);
                }

    }
}