import React from 'react'
import { Switch, Route, Redirect, NavLink, BrowserRouter as Router } from 'react-router-dom'

import AppointmentsPage from './containers/appointmentsPage/AppointmentsPage'
import ContactsPage from './containers/contactsPage/ContactsPage'

function App() {
	const ROUTES = {
		CONTACTS: '/contacts',
		APPOINTMENTS: '/appointments',
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
						<ContactsPage />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						<AppointmentsPage />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}

export default App
