import React from 'react'
import Tile from '../tile/Tile'

export default function TileList(props) {
	const { contacts, removeContact } = props
	return (
		<>
			{contacts.map((contact, count) => {
				count++
				return <Tile key={count} position={count} contact={contact} removeContact={removeContact} />
			})}
			<br />
		</>
	)
}
