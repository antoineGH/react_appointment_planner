import React from 'react'
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
	const { contacts } = props

	return (
		<>
			{contacts.map((contact) => {
				return <Tile key={contact.name} contact={contact} />
			})}
			<br />
		</>
	)
}
