import React, { useState, useEffect } from 'react'
import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

import AppointmentsPage from './containers/appointmentsPage/AppointmentsPage'
import ContactsPage from './containers/contactsPage/ContactsPage'

function App() {
	const ROUTES = {
		CONTACTS: '/contacts',
		APPOINTMENTS: '/appointments',
	}

	const [appointments, setAppointments] = useState([])
	const [contacts, setContacts] = useState([])

	useEffect(() => {
		addContact('Antoine', '0601156456', 'antoine.ratat@gmail.com')
		addContact('Bastien', '0601156456', 'bastien.ratat@gmail.com')
	}, [])

	const addContact = (name, phone, email) => {
		setContacts((oldContact) => [...oldContact, { name, phone, email }])
	}
	const addAppointment = (title, contact, date, time) => {
		setAppointments((oldAppointments) => [...oldAppointments, { title, contact, date, time }])
	}

	return (
		<Router>
			<nav>
				<NavLink to={ROUTES.CONTACTS} activeClassName='active'>
					Contacts
				</NavLink>
				<NavLink to={ROUTES.APPOINTMENTS} activeClassName='active'>
					Appointments
				</NavLink>
			</nav>
			<main>
				<Switch>
					<Route path={ROUTES.CONTACTS}>
						<ContactsPage contacts={contacts} addContact={addContact} />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}

export default App
