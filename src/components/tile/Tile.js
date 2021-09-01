import React from 'react'
import './Tile.css'

export default function Tile(props) {
	const { contact, removeContact, position } = props
	const values = Object.values(contact)

	return (
		<div className='title-container'>
			{values.map((elem, count) => {
				count++
				return <p key={count}>{elem}</p>
			})}
			<button className='remove-button' onClick={() => removeContact(position)}>
				&times;
			</button>
		</div>
	)
}
