const initialState = {
  conversations: [],
  messages: [],
};

export const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONVERSATIONS":
      return {
        ...state,
        conversations: action.payload,
      };
    case "CREATE_CONVERSATION":
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case "GET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export const loadConversations = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:8000/conversation/${userId}`);
      const conversations = await res.json();
      dispatch({ type: "GET_CONVERSATIONS", payload: conversations });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadMessages = (chatId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:8000/messages/${chatId}`);
      const messages = await res.json();
      dispatch({ type: "GET_MESSAGES", payload: messages });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addMessage = (sender, text, conId) => {
  return async (dispatch) => {
    const message = {
      sender: sender,
      text: text,
      conversationId: conId,
    };
    try {
      const res = await fetch(`http://localhost:8000/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const fullMessage = await res.json();
      dispatch({ type: "ADD_MESSAGE", payload: fullMessage });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createConversation = (sender, receiver) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:8000/conversation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senderId: sender, receiverId: receiver }),
      });
      const newConversation = await res.json();
      dispatch({ type: "CREATE_CONVERSATION", payload: newConversation });
    } catch (error) {
      console.log(error);
    }
  };
};
