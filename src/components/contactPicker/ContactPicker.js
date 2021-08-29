import React from 'react'

export default function ContactPicker(props) {
	const { contacts, onChange } = props
	let count = 0
	return (
		<select onChange={(e) => onChange(e)}>
			{contacts.map((contact, count) => {
				count++
				return (
					<option defaultValue={count === 0 && 'selected'} key={contact.name} value={contact.name}>
						{contact.name}
					</option>
				)
			})}
		</select>
	)
}
