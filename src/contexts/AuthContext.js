import { apiUrl } from './constants'
import axios from 'axios'
import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

	// Register
	const registerUser = async userForm => {
		try {
			const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
            return response;
		} catch (error) {
			console.log("error");
		}
	}

	

	// Context data
	const authContextData = {  registerUser }

	// Return provider
	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider