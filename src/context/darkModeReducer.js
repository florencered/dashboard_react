//state means the state used in context file and action can be used to reprsent functions
const DarkModeReducer=(state,action)=>{
  switch(action.type){
    case "LIGHT":{
        return{
            darkMode:false,
        };
    }
    case "DARK":{
        return{
            darkMode:true,
        };
    } 
    case "TOGGLE":{
        return{
            darkMode:!state.darkMode,
        };
    } 
    default:
        return state;
  } 
} 
export default DarkModeReducer;