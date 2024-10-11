# AI Image Generator


## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## Overview

The **AI Image Generator** is a web application built with Flask that allows users to generate images based on textual prompts. It utilizes Hugging Face's inference models to create images from user-provided input. The application supports multiple models, providing users with flexibility in the type of image they wish to generate.

## Features

- **Text-to-Image Generation**: Users can input a text prompt, and the application will generate an image based on the prompt.
- **Multiple Models**: Choose between different models for image generation, including Stability AI's Stable Diffusion and Black Forest Labs' FLUX.
- **Image Download**: Generated images can be downloaded directly from the application.
- **User-Friendly Interface**: Simple and intuitive UI for easy interaction.

## Technologies Used

- Python
- Flask
- Hugging Face Hub
- Pillow (for image handling)
- HTML/CSS (for frontend)

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
  
   git clone https://github.com/BharathChandu3/Text-to-image-Generation.git
2.Navigate to the project directory:

cd ai-image-generator
Install the required packages:

pip install -r requirements.txt
Ensure you have the necessary tokens for Hugging Face API and replace them in the code if needed.

Run the application:

python app.py
Note: Make sure you have Python 3.x installed on your system.

Usage
Open your web browser and navigate to http://127.0.0.1:5000/ to access the application.
Enter a text prompt in the input field.
Choose a model Based on your Requirement (Model 1 or Model 2).
Click the "Generate" button to create the image based on your prompt.
The generated image will be displayed, and you can download it by clicking the download link.
Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any questions or inquiries, feel free to reach out:

Your Name: tirumalasettybharathchandu@gmail.com
GitHub: [Your GitHub Profile](https://github.com/BharathChandu3)

