import "./messenger.css";
import Header from "../../components/Header";
import Conversation from "./Conversation";
import Message from "./Message";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  addMessage,
  loadConversations,
  loadMessages,
} from "../../../redux/reducers/Messenger";
import {io} from "socket.io-client"

const Messenger = () => {
  const dispatch = useDispatch();
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef()
  const userId = useSelector((state) => state.auth.userId);

  const scrollRef = useRef()

  useEffect(() => {
    socket.current = io("ws://localhost:8000/", {transports: ['websocket', 'polling', 'flashsocket']})
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text
      })
    })
  }, [])

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
    dispatch({ type: "SET_MESSAGES", payload: arrivalMessage })
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket.current.emit("addUser", userId)
    socket.current.on("getUsers")
  }, [userId])


  const messages = useSelector((state) => state.messengerReducer.messages);

  const conversations = useSelector(
    (state) => state.messengerReducer.conversations
  );


  const handleSubmit = (e) => {
    e.preventDefault()

    const receiverId = currentChat.members.find(member => member !== userId)

    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: newMessage
    })

    dispatch(addMessage(userId, newMessage, currentChat._id))
    setNewMessage("")
  };

  useEffect(() => {
    dispatch(loadConversations(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(loadMessages(currentChat?._id));
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      <Header />
      <div></div>
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            {conversations.map((con) => (
              <div onClick={() => setCurrentChat(con)}>
                <Conversation conversation={con} currentUser={userId} />
              </div>
            ))}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            {currentChat ? (
              <>
                <div className="chat-box-top">
                  {messages.map((message) => (
                    <div ref={scrollRef}>
                      <Message
                      message={message}
                      own={message.sender === userId}
                    />
                    </div>
                  ))}
                </div>
                <div className="chat-box-bottom">
                  <textarea
                    className="chat-message-input"
                    placeholder="Введите сообщение..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chat-submit-button" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="no-chat-text">Начните беседу...</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
