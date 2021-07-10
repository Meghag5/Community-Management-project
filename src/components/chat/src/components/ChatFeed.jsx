import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  // the things that we will be structuring are in the const
  const { chats, activeChat, userName, messages } = props;

  // if chat exist then find the chat and the active chat
  const chat = chats && chats[activeChat];

  /* this function is going to take two parameters
  and inside we are going to map over people and the 
  thing that we are going to render only when person has read the message
  */
  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  // this function is for generating messages
  const renderMessages = () => {
    // for fetching all of our messages
    const keys = Object.keys(messages);

    // let's render or messages
    return keys.map((key, index) => {
      /* One specific message is going to be const message */
      const message = messages[key];
      /* Ww want to know is this the last message that is sent then we will return null else keys */
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      /* This we will check that the message sent is by us other person */
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {/* If message is sent by us then it will show our message else other person message */}
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          {/* If message is sent by us then we are setting css for it */}
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {/* This will going to be subtitle of our chat */}
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
