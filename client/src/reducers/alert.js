import { SET_ALERT, REMOVE_ALERT} from '.././actions/types';

const initalState = [];

export default function(state = initalState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case SET_ALERT :
      return [...state , payload]; //adds to the state
    case REMOVE_ALERT : 
      return state.filter(alert => alert.id !== payload); 
    default :
      return state;
  }
}














// now action ll contain two things one imp is type nd other is payload which si the data, styms u dont have any data u call the action type withut any data, type to evalute with switch,dependng tonthe tpyew need to see wht to send down as a state so useing aray as acc to action we are addign alsert ie setalert , but we know states are immutable not mutable so toadd any toher staessug spreadoper so if ther is then copy it


// const initalState = [
//   {
//     id : 1,
//     msg :" pls log in",
//     alertType : 'Successs'
//   },
//   {} //so this woukd be array of objets but for now it would be e,omty
// ];