const initialChatRoomState = {
    chatRoom: [],
    id : 1 
    }


export const chatRoomReducer = function(state = initialChatRoomState, action) {
    switch(action.type) {
    case 'CHATROOM_LIST_SUCCESS':
   return Object.assign({}, state, { chatRoom: action.data })
  case 'SET_ID_CHATROOM_SUCCESS':
  return Object.assign({},state,{id : action.data})  
  }
      
    return state;
  }

