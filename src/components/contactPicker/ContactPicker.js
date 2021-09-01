import React from 'react'

export default function ContactPicker(props) {
	const { contacts, onChange } = props
	return (
		<select onChange={(e) => onChange(e)}>
			<option defaultValue='true'>Choose Contact</option>
			{contacts.map((contact) => {
				return (
					<option key={contact.name} value={contact.name}>
						{contact.name}
					</option>
				)
			})}
		</select>
	)
}
