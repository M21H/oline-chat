import React from 'react'
import axios from 'axios'

const JoinBlock = ({ onLogin }) => {
	const [roomId, setRoomId] = React.useState('')
	const [userName, setUserName] = React.useState('')
	const [isLoading, setIsLoading] = React.useState(false)

	const onEnter = async () => {
		if (!roomId || !userName) {
			alert('empty room id or user name')
		} else {
			const obj = {
				roomId,
				userName,
			}
			setIsLoading(true)
			await axios.post('/rooms', obj)
			onLogin(obj)
		}
	}

	return (
		<div className='join-block'>
			<input
				className='join-block-control'
				type='text'
				placeholder='room ID'
				value={roomId}
				onChange={e => setRoomId(e.target.value)}
			/>
			<input
				className='join-block-control'
				type='text'
				placeholder='your name'
				value={userName}
				onChange={e => setUserName(e.target.value)}
			/>

			<button
				className='btn btn-connect'
				disabled={!roomId || !userName}
				onClick={onEnter}
				style={{ pointerEvents: !roomId || !userName ? 'none' : '' }}>
				{isLoading ? 'CONNECTING...' : 'CONNECT'}
			</button>
		</div>
	)
}

export default JoinBlock
