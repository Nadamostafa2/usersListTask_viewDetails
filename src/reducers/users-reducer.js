export const usersReducer = (state={},action)=>{
    console.log({state,action})
    switch (action.type){
        case 'LIST':{
            return {...state,list:action.payload}
        }
        case 'DETAILS':{
            return {...state,details:action.payload}
        }
        case 'CLEAR':{
            return {
                ...state,
                details:null,      
            }
        }
        default:{
            return state;
        }
    }
}


// {
//     users:{
//         list:[],
//         details:{}
//     },
//     posts:{
//         list:[],
//         details:{},

//     }
// }