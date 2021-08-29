import React from 'react'

export const Tile = (props) => {
	const { contact } = props
	const values = Object.values(contact)

	return (
		<div className='tile-container'>
			{values.map((elem, count) => {
				count++
				return <p key={count}>{elem}</p>
			})}
		</div>
	)
}
