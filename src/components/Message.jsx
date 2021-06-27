import React from 'react'
import Avatar from '@material-ui/core/Avatar'

export const MessageLeft = props => {
	const message = props.message ? props.message : 'no message'
	const timestamp = props.timestamp ? props.timestamp : ''
	const photoURL = props.photoURL ? props.photoURL : 'dummy.js'
	const displayName = props.displayName ? props.displayName : 'user'

	return (
		<>
			<div className='messageRow'>
				<Avatar alt={displayName} className='orange' src={photoURL}></Avatar>
				<div>
					<div className='displayName'>{displayName}</div>
					<div className='messageBlue'>
						<div>
							<p className='messageContent'>{message}</p>
						</div>
						<div className='messageTimeStampRight'>{timestamp}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export const MessageRight = ({ message, ...props }) => {
	const text = message.text ? message.text : 'no message'
	const timestamp = props.timestamp ? props.timestamp : ''
	return (
		<div className='messageRowRight'>
			<div className='messageOrange'>
				<p className='messageContent'>{text}</p>
				<div className='messageTimeStampRight'>{timestamp}</div>
			</div>
		</div>
	)
}
