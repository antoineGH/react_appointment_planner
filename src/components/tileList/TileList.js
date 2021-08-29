import React from 'react'
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
	const { contacts } = props
	console.log(contacts)

	if (contacts) {
		contacts.map((contact) => {
			return <Tile key={contact.name} contact={contact} />
		})
	}
	return <p>No Contact</p>
}
