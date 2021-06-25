import React from 'react'
import socket from '../socket'

const Chat = ({ users, messages, userName, roomId, onAddMessage }) => {
	const [messageValue, setMessageValue] = React.useState('')

	const onSendMessage = () => {
		socket.emit('ROOM:NEW_MESSAGE', { userName, roomId, text: messageValue })
		onAddMessage({ userName, text: messageValue })
		setMessageValue('')
	}

	return (
		<div className='chat'>
			<div className='chat-users'>
				<b>Room: {roomId}</b>
				<hr />
				<b className='chat-users-cont'>Online({users.length})</b>
				<ul className='chat-users-list'>
					{users &&
						users.map((user, index) => (
							<li key={`${index}-${index}`} className='chat-users-link'>
								{user}
							</li>
						))}
				</ul>
			</div>

			<div className='chat-messages'>
				<div className='messages'>
					{messages.map((message, index) => (
						<div key={`${message}-${index}`} className='message'>
							<p>{message.text}</p>
							<div>
								<hr />
								<span>{message.userName}</span>
							</div>
						</div>
					))}
				</div>
				<form onClick={e => e.preventDefault()}>
					<textarea
						rows='5'
						cols='50'
						className='form-control'
						value={messageValue}
						onChange={e => setMessageValue(e.target.value)}></textarea>
					<button onClick={onSendMessage} className='btn btn-message-send'>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default Chat
