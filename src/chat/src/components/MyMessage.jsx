const MyMessage = ({ message }) => {
  /* This will help us to chack whther our message is text or image
      And if it is our image then it will render the images 
      else we will render the text.
  */
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    /* float: 'right' because we want to come our messages on right side */
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
