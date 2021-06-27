import React from 'react'
import socket from '../socket'
import { Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import { MessageRight } from './Message'

const Chat = ({ users, messages, userName, roomId, onAddMessage }) => {
	const [messageValue, setMessageValue] = React.useState('')

	const onSendMessage = () => {
		socket.emit('ROOM:NEW_MESSAGE', { userName, roomId, text: messageValue })
		onAddMessage({ userName, text: messageValue })
		setMessageValue('')
	}

	return (
		// <div className='chat'>
		// 	<div className='chat-users'>
		// 		<b>Room: {roomId}</b>
		// 		<hr />
		// 		<b className='chat-users-cont'>Online({users.length})</b>
		// 		<ul className='chat-users-list'>
		// 			{users &&
		// 				users.map((user, index) => (
		// 					<li key={`${index}-${index}`} className='chat-users-link'>
		// 						{user}
		// 					</li>
		// 				))}
		// 		</ul>
		// 	</div>

		// 	<div className='chat-messages'>
		// 		<div className='messages'>
		// 			{messages.map((message, index) => (
		// 				<div key={`${message}-${index}`} className='message'>
		// 					<p>{message.text}</p>
		// 					<div>
		// 						<hr />
		// 						<span>{message.userName}</span>
		// 					</div>
		// 				</div>
		// 			))}
		// 		</div>
		// 		<form onClick={e => e.preventDefault()}>
		// 			<textarea
		// 				rows='5'
		// 				cols='50'
		// 				className='form-control'
		// 				value={messageValue}
		// 				onChange={e => setMessageValue(e.target.value)}></textarea>
		// 			<button onClick={onSendMessage} className='btn btn-message-send'>
		// 				Send
		// 			</button>
		// 		</form>
		// 	</div>
		// </div>
		<>
			<div className='container'>
				<p>Room: {roomId}</p>
				<p className='chat-users-cont'>Online({users.length})</p>
				<Paper className='paper' zDepth={2}>
					<Paper className='messagesBody'>
						{messages.map((message, index) => (
							<MessageRight key={`${message}-${index}`} message={message} />
						))}
					</Paper>
					<form className='wrapForm' noValidate autoComplete='off'>
						<TextField
							value={messageValue}
							onChange={e => setMessageValue(e.target.value)}
							label='your message'
							className='wrapText'
						/>
						<Button
							onClick={messageValue && onSendMessage}
							variant='contained'
							color='primary'
							className='button'>
							<SendIcon />
						</Button>
					</form>
				</Paper>
			</div>
		</>
	)
}

export default Chat
