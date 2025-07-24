# Chat App

A simple, browser-based chat application that allows users to log in and chat with other predefined users. All data is stored locally in the browser using `localStorage`.

## Features

- **User Login:** Login with a predefined username and password.
- **One-on-One Chat:** Select a user to chat with from a dropdown and exchange messages.
- **Message Deletion:** Delete your own messages from the chat.
- **Clear Chat:** Clear the entire chat history with a selected user.
- **Logout:** Securely log out and return to the login page.
- **Responsive UI:** Modern, responsive design with a colorful gradient background.

## Predefined Users & Credentials

| Username | Password   |
|----------|------------|
| Satyam   | Satyam123  |
| Samir    | Samir123   |
| Alice    | Alice123   |
| Jenisha  | Jenisha123 |

## Getting Started

1. **Clone or Download the Repository**
2. **Open `login.html` in your browser**
   - No server setup is required. All functionality is client-side.

## Usage

1. **Login**
   - Enter a valid username and password from the table above.
2. **Chat**
   - After logging in, select a user from the dropdown to start chatting.
   - Type your message and press "Send".
   - Your messages will appear on the right with a delete button.
   - You can clear the entire chat with the selected user using the "Clear Chat" button.
3. **Logout**
   - Click the "Logout" button to end your session.

## File Structure

- `login.html` / `login.js`: Login page and logic
- `Chat.html` / `main.js`: Main chat interface and logic
- `styles.css`: App styling
- `README.md`: This file

## Notes

- **Data Storage:** All chat data is stored in your browser's `localStorage`. Clearing browser data will erase all chats.
- **No Backend:** This app is for demonstration/learning purposes and does not use a server or real-time communication.
- **Security:** Passwords are stored in plain text in the client code for demo purposes. Do not use real credentials.


## License

MIT 