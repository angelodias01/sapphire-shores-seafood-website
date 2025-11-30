# Sapphire Shores Seafood Website

This repository contains the source code for the Sapphire Shores Seafood landing page. It is a responsive, single-page website designed to showcase a high-end dining establishment. The design utilizes a dark color palette with blue and gold accents to evoke a maritime and luxury atmosphere.

## Project Overview

The project provides a complete digital presence for a restaurant. It allows potential customers to view the establishment's story, explore a categorized menu using interactive tabs, browse a photo gallery, and access contact information. The layout focuses on high-quality visual hierarchies and clear calls to action.

## Key Features

### Interactive Menu
The menu section features a JavaScript-powered tab system. This allows users to switch between "Raw Bar," "Main Courses," and "Desserts" without reloading the page, keeping the interface clean and organized.

### Reservation System UI
The website includes a comprehensive reservation form styled to float over the background section. It captures key details such as name, date, time, and party size.

### Responsive Navigation
* **Desktop:** A fixed top navigation bar with clear links and a prominent "Book Table" button.
* **Mobile:** A hamburger menu that toggles a slide-down navigation list, ensuring usability on smaller touchscreens.

### Visual Design
The site uses a custom Dark Mode theme defined in CSS variables (`--bg-dark`, `--color-blue`, `--color-gold`). It employs CSS Grid for the gallery and contact sections to ensure a robust layout that adapts to different viewport widths.

## Technologies Used

* **HTML5:** Semantic markup structure.
* **CSS3:** Custom styling using CSS Variables, Flexbox, and CSS Grid.
* **JavaScript (ES6):**
    * Tab switching logic for the menu.
    * Mobile navigation toggle.
    * Smooth scrolling behavior for anchor links.
    * Form submission handling (frontend alert).
* **FontAwesome:** Used for iconography (menu icons, contact details, social links).
* **Google Fonts:** Integration of 'Montserrat' (Headings) and 'Open Sans' (Body).

## File Structure

* **index.html:** The main HTML document containing the structure of the Hero, About, Menu, Gallery, and Reservation sections.
* **style.css:** Contains all styling rules, including the root color variables and media queries for mobile responsiveness.
* **script.js:** Handles the DOM manipulation for the interactive elements (tabs and mobile menu).

## Usage

This project consists of static web files. To view the website:
1. Download the repository files.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. Open `index.html` in any modern web browser.
