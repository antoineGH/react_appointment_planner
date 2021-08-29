import React from 'react'
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
	const { contacts } = props

	return (
		<>
			{contacts.map((contact, count) => {
				count++
				return <Tile key={count} contact={contact} />
			})}
			<br />
		</>
	)
}
