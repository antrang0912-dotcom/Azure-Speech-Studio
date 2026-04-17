🎙️ Azure Speech Studio
A professional, ambient-themed web application that leverages the Microsoft Azure Cognitive Services Speech SDK to perform real-time Speech-to-Text (STT) and Text-to-Speech (TTS).

Built with pure HTML, CSS, and vanilla JavaScript, this project features a modern "glassmorphism" UI with glowing accents and requires no complex build tools or frameworks.

✨ Features
🎤 Speech-to-Text (Listen): Speak into your microphone and watch the text appear in real-time.

🔊 Text-to-Speech (Speak): Type or paste text into the box and have Azure's AI voices read it aloud.

📋 Copy to Clipboard: One-click button to easily copy your transcribed text.

🎨 Ambient UI: A sleek, dark-themed interface with glowing interactive buttons and responsive design.

🔑 Bring Your Own Key (BYOK): Securely input your Azure API credentials directly in the UI without hardcoding them into the source code.

🛠️ Prerequisites
Before you can use this application, you need an Azure account and a Speech resource.

Create a free account at Azure Portal.

Create a new Speech resource (Search for "Speech" in the marketplace).

Once deployed, go to Keys and Endpoint.

Note down your Key 1 (or Key 2) and your Location/Region (e.g., eastus, centralindia).

🚀 Setup & Installation
Because browsers require a "secure context" to access your microphone, you cannot just double-click the index.html file. You must run it through a local web server.

Option 1: Using VS Code (Recommended)
Clone or download this repository.

Open the project folder in Visual Studio Code.

Install the Live Server extension by Ritwick Dey.

Right-click on index.html and select "Open with Live Server".

The app will open in your browser at http://127.0.0.1:5500.

Option 2: Using Python or Node.js
If you have Python installed, open your terminal in the project folder and run:

Python 3: python -m http.server 8000

Node.js (http-server): npx http-server
Then navigate to http://localhost:8000 in your web browser.

💻 Usage
Open the application in your browser.

Enter your Azure API Key and Azure Region in the configuration panel. (Note: Ensure there are no accidental spaces in your key, and the region is just the short name, like eastus, not a full URL).

To Transcribe: Click 🎤 Start Listening and speak into your microphone.

To Synthesize: Type text into the text area and click 🔊 Speak Text.

Click 📋 Copy Text to copy the results to your clipboard.

📁 File Structure
Plaintext
📁 azure-speech-studio
 ├── 📄 index.html    # The main structure and layout
 ├── 📄 style.css     # Styling, animations, and ambient dark theme
 ├── 📄 script.js     # Azure SDK logic, DOM manipulation, and microphone handling
 └── 📄 README.md     # Project documentation
🔧 Troubleshooting
"Error configuring speech. Check your key and region."

Ensure your region is formatted correctly (e.g., eastus — all lowercase, no spaces). Do not paste the full endpoint URL.

Ensure there are no leading or trailing spaces copied into the API key input.

If you just created the Azure resource, wait 5-10 minutes for the keys to become active globally.

Microphone isn't working / "NotAllowedError"

Ensure you are running the app on http://localhost or http://127.0.0.1. Browsers block microphone access on file:// URLs for security reasons.

Check your browser settings to ensure it has permission to access your microphone.

📚 Built With
Microsoft Cognitive Services Speech SDK

HTML5 / CSS3 / Vanilla JavaScript

Google Fonts (Inter)