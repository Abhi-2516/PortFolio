# Abhishek Yadav's Portfolio

Welcome to my personal portfolio website! This project showcases my skills as a **Full Stack Developer** and **Data Science Enthusiast**, featuring projects, skills, and a contact form to connect with me.

## Overview

This portfolio is a single-page application built with:

- **HTML5** for structure
- **CSS3** with custom styles for design
- **JavaScript** for interactivity
- **EmailJS** for handling contact form submissions

The site highlights my expertise in React.js, Node.js, Python, and modern web technologies, with a responsive design optimized for desktop and mobile devices.

## Features

- ✨ **Responsive Design**: Fully functional across all screen sizes
- 🎭 **Dynamic Content**: Animated counters, typing effects, and scroll animations
- 📧 **Contact Form**: Send messages directly to me using EmailJS integration
- 🧭 **Navigation**: Smooth scrolling and mobile-friendly menu
- 🛠️ **Skill Showcase**: Interactive skill categories and project cards
- 🎨 **Theme Detection**: Automatically adjusts to the user's preferred color scheme

## Prerequisites

To run this project locally, ensure you have the following:

- A modern web browser (e.g., Chrome, Firefox, Edge)
- Node.js and npm (optional, for local server)
- Internet connection (for external resources like EmailJS and fonts)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies (optional, for local server)

```bash
npm install -g http-server
```

### 3. Run the Project

**Option 1: Basic view**
- Open `index.html` in a web browser

**Option 2: Local server (recommended to test EmailJS)**
```bash
http-server
```
- Visit `http://localhost:8080` in your browser

## Usage

- Navigate through sections using the menu or scroll smoothly
- Fill out the contact form to send me a message (requires EmailJS configuration)
- Explore projects and skills to learn more about my work

## Configuration

### EmailJS Setup

To enable the contact form with EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/) and create an account
2. Obtain your:
   - **User ID** (replace `"eVoddXwxO2gjz6ZDh"` in `script.js`)
   - **Service ID** (replace `"service_7dw1rzb"` in `script.js`)
   - **Template ID** (replace `"template_o4y9xoj"` in `script.js`)

3. Update the `emailjs.init` and `emailjs.send` calls in `script.js` with your credentials

4. Ensure the EmailJS SDK is included in `index.html`:
```html
<script src="https://cdn.emailjs.com/sdk/2.4.0/email.min.js"></script>
```

## Contributing

This is a personal portfolio, so contributions are not currently accepted. However, feel free to fork the repository and use it as a template for your own portfolio!

## Issues

If you encounter any issues (e.g., contact form not working), please:

1. Check the browser console (F12 > Console) for errors
2. Verify EmailJS configuration
3. Open an issue on the GitHub repository with details

## Contact

- 📧 **Email**: [2516abhi43@gmail.com](mailto:2516abhi43@gmail.com)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/abhishek-yadav-059942251/](https://www.linkedin.com/in/abhishek-yadav-059942251/)
- 💬 Use the contact form on the website for direct messages

## License

This project is licensed under the **MIT License**. Feel free to use the code as a reference or starting point for your own projects.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [EmailJS](https://www.emailjs.com/) for email integration

---
