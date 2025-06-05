# Emotion SVG Morphing

This project demonstrates a visual morphing animation between two facial expressions (happy and sad) using **D3.js** and **Flubber** for SVG path interpolation.

## ✨ Features

- Renders a face composed of SVG paths (eyes and mouth)
- Smooth transition between two emotional states: **happy** and **sad**
- Animation triggered by a button click
- Uses `flubber.interpolate` for complex SVG shape interpolation

## 🛠 Technologies Used

- [D3.js](https://d3js.org/) – DOM manipulation and transitions
- [Flubber](https://github.com/veltman/flubber) – SVG path interpolation
- HTML / CSS / JavaScript

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Start the development server
npx parcel index.html

Project Structure
.
├── index.html         # Main HTML structure
├── script.js          # JavaScript logic (morphing faces)
├── style.css          # Basic styling (optional)
├── package.json       # Project metadata and dependencies

Demo
Click the button to morph the face from a happy expression to a sad one.
