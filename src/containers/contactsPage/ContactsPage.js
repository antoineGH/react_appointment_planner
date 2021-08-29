import React, { useState, useEffect } from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export default function ContactsPage(props) {
	const { contacts, addContact } = props
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [duplicate, setDuplicate] = useState(false)

	useEffect(() => {
		contacts.forEach((contact) => {
			if (contact.name === name) {
				setDuplicate(true)
			}
		})
	}, [contacts, name])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (duplicate) {
			alert('Already existing.')
			setDuplicate(false)
			return
		}
		addContact(name, phone, email)
		alert('Contact Added.')
		setName('')
		setPhone('')
		setEmail('')
	}

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				{contacts && <TileList contacts={contacts} />}
			</section>
		</div>
	)
}
