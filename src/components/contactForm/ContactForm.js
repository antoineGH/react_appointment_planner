import React from 'react'

export default function ContactForm(props) {
	const { name, setName, phone, setPhone, email, setEmail, handleSubmit } = props

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className='contact_form_input'>
				<label for='name'>Name</label>
				<input id='name' type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className='contact_form_input'>
				<label for='phone'>Phone</label>
				<input
					id='phone'
					type='tel'
					placeholder='Your Phone Number'
					pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
			<div className='contact_form_input'>
				<label for='email'>Email</label>
				<input id='email' type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className='contact_form_input'>
				<input type='submit' />
			</div>
		</form>
	)
}
