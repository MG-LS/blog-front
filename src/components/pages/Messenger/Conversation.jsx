import "./conversation.css";
import avatar from "../../img/avatar.jpg";
import { useEffect, useState } from "react";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members?.find((m) => m !== currentUser);

    const getUser = async () => {
      try {
        const res = await fetch(`http://localhost:8000/user/${friendId}`);
        const friend = await res.json();
        setUser(friend);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="conversation">
      <img className="conversation-img" src={avatar} alt="" />
      <span className="conversation-name">{user?.nickname}</span>
    </div>
  );
};

export default Conversation;
