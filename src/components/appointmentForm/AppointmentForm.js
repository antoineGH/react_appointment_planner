import React from 'react'
import ContactPicker from '../contactPicker/ContactPicker'

export default function AppointmentForm(props) {
	const { contacts, title, setTitle, setContact, date, setDate, time, setTime, handleSubmit } = props

	const getTodayString = () => {
		const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className='contact_form_input'>
				<label htmlFor='name'>Title</label>
				<input id='name' type='text' placeholder='Appointment Title' value={title} onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className='contact_form_input'>
				<ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} />
			</div>
			<div className='contact_form_input'>
				<label htmlFor='name'>Date</label>
				<input id='date' type='date' placeholder='Appointment Date' value={date} onChange={(e) => setDate(e.target.value)} />
			</div>
			<div className='contact_form_input'>
				<label htmlFor='name'>Time</label>
				<input min={getTodayString()} id='time' type='time' placeholder='Appointment Time' value={time} onChange={(e) => setTime(e.target.value)} />
			</div>

			<div className='contact_form_input'>
				<input type='submit' />
			</div>
		</form>
	)
}
