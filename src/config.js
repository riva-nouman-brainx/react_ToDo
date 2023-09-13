import user_icon from "./components/Assets/person.png"
import email_icon from "./components/Assets/email.png"
import password_icon from "./components/Assets/password.png"
export const isValidUsernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const isValidPasswordRegex = /^(?=.*[A-Z]).{8,}$/;
export const isValidEmailRegex = /^[a-zA-Z0-9_-]{3,}$/;
export {user_icon, email_icon, password_icon}

