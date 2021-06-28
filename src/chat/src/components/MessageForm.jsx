import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  /* on left side will be the initial value like value 
  and right we will update the value like setValue*/
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    // this is where the value of the input is stored in
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    // this will make sure to not do a browser refresh once we submit the form
    event.preventDefault();

    // this is for trimming the text of our message
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    // after we send the message we want to reset our value to the empty string
    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
