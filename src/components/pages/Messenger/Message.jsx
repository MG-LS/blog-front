import "./message.css"
import avatar from "../../img/avatar.jpg"

const Message = ({message, own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img className="message-img" src={avatar} alt="" />
        <p className="message-text">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;