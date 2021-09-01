import './App.css'
import React, { useState } from 'react'
import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import AppointmentPage from './containers/appointmentPage/AppointmentPage'
import ContactPage from './containers/contactPage/ContactPage'

function App() {
	const [contacts, setContacts] = useState([
		{ name: 'Antoine', phone: '13111881660', email: 'antoine.ratat@gmail.com' },
		{ name: 'Bastien', phone: '13111881885', email: 'bastien.ratat@gmail.com' },
	])

	const [appointments, setAppointments] = useState([
		{ title: 'Doctor', contact: 'Antoine', date: '30/08/20', time: '15:30' },
		{ title: 'Dentist', contact: 'Bastien', date: '31/08/20', time: '17:30' },
	])

	const addContact = (name, phone, email) => {
		setContacts((existingContact) => [...existingContact, { name, phone, email }])
	}

	const addAppointment = (title, contact, date, time) => {
		setAppointments((existingAppointments) => [...existingAppointments, { title, contact, date, time }])
	}

	const removeContact = (position) => {
		console.log(position)
		let copyContacts = contacts.slice()
		copyContacts.splice(position - 1, 1)
		setContacts(copyContacts)
	}

	const removeAppointment = (position) => {
		console.log(position)
		let copyAppointments = appointments.slice()
		copyAppointments.splice(position - 1, 1)
		setAppointments(copyAppointments)
	}

	const routes = {
		contacts: '/contacts',
		appointments: '/appointments',
	}

	return (
		<>
			<Router>
				<nav>
					<NavLink to={routes.contacts} activeClassName='active'>
						Contacts
					</NavLink>
					<NavLink to={routes.appointments} activeClassName='active'>
						Appointments
					</NavLink>
				</nav>
				<main>
					<Switch>
						<Route path={routes.contacts}>
							<ContactPage contacts={contacts} addContact={addContact} removeContact={removeContact} />
						</Route>
						<Route path={routes.appointments}>
							<AppointmentPage
								appointments={appointments}
								contacts={contacts}
								addAppointment={addAppointment}
								removeAppointment={removeAppointment}
							/>
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	)
}

export default App
