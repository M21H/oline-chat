import React from 'react'
import socket from '../socket'
import { Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import { MessageLeft, MessageRight } from './Message'

const Chat = ({ users, messages, userName, roomId, onAddMessage }) => {
	const [messageValue, setMessageValue] = React.useState('')

	const onSendMessage = () => {
		socket.emit('ROOM:NEW_MESSAGE', { userName, roomId, text: messageValue })
		if (!!messageValue.trim()) {
			onAddMessage({ userName, text: messageValue })
			setMessageValue('')
		}
	}

	return (
		<>
			<div className='container'>
				<p>Room: {roomId}</p>
				<p className='chat-users-cont'>Online({users})</p>
				<Paper className='paper'>
					<Paper className='messagesBody'>
						{messages.map((message, index) => (
							<MessageRight key={`${message}-${index}`} message={message} />
						))}
					</Paper>
					<form className='wrapForm'>
						<TextField
							value={messageValue}
							onChange={e => setMessageValue(e.target.value)}
							label='your message'
							className='wrapText'
						/>
						<Button onClick={onSendMessage} variant='contained' color='primary'>
							<SendIcon />
						</Button>
					</form>
				</Paper>
			</div>
		</>
	)
}

export default Chat
