import React from 'react'
import Avatar from '@material-ui/core/Avatar'

export const MessageLeft = ({ message: { text, userName } }) => {
	const timestamp = '10:23'
	const displayName = userName ? userName : 'user'

	return (
		<>
			<div className='messageRow'>
				<Avatar alt={displayName} className='orange'></Avatar>
				<div>
					<div className='displayName'>{displayName}</div>
					<div className='messageBlue'>
						<div>
							<p className='messageContent'>{text}</p>
							<div className='messageTimeStampRight'>{timestamp}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export const MessageRight = ({ message: { text, userName } }) => {
	const timestamp = '10:23'
	return (
		<div className='messageRowRight'>
			<div className='messageOrange'>
				<p className='messageContent'>{text}</p>
				<div className='messageTimeStampRight'>{timestamp}</div>
			</div>
		</div>
	)
}
