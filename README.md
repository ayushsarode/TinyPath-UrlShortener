# Tinypath - URL Shortener Project

Tinypath is a simple URL shortener project aimed at strengthening backend development fundamentals. It allows users to shorten long URLs into more manageable links.

## Features

- Shorten long URLs into custom shortened links.
- User authentication with JWT.
- Secure storage of URLs and user data in MongoDB.
- Dynamic rendering of web pages using EJS templating.
- Deployment-ready for Heroku.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**  
`git clone https://github.com/ayushsarode/TinyPath-UrlShortener.git`


2. **Navigate to the project directory:**
`cd TinyPath-UrlShortener`

3. **Install dependencies:**  
`npm install`


4. **Set up environment variables:**  
- Create a `.env` file in the root directory.
- Add the following environment variables:
  ```
  PORT=8000
  MONGODB_URI=your_mongodb_uri
  SECRET_KEY=your_secret_key_here
  ```

## License

This project is licensed under the [MIT License](LICENSE).
