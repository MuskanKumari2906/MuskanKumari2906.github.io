# Bedroom Anatomy VR

## Overview
Bedroom Anatomy VR is an interactive virtual reality experience designed to educate users about the anatomy of a bedroom environment. Utilizing A-Frame, this project allows users to explore a virtual bedroom, interact with various objects, and receive informative feedback through audio narration and visual cues.

## Features
- **Interactive VR Environment**: Explore a detailed virtual bedroom with interactive elements.
- **Gaze and Pointer Interaction**: Users can interact with objects using gaze-based controls or pointer controls for desktop users.
- **Information Display**: Click or gaze at objects to display information cards with descriptions and audio narration.
- **Responsive Design**: The experience is optimized for both VR headsets and desktop browsers.

## Project Structure
```
bedroom-anatomy-vr
├── src
│   ├── index.html
│   ├── scenes
│   │   └── bedroom-scene.html
│   ├── components
│   │   ├── anatomy-layer.js
│   │   ├── gaze-interaction.js
│   │   └── pointer-controls.js
│   ├── systems
│   │   └── state-manager.js
│   ├── ui
│   │   ├── hud.js
│   │   └── menu.html
│   ├── styles
│   │   └── main.css
│   └── assets
│       ├── models
│       │   └── human_torso.glb
│       ├── audio
│       │   └── narration.mp3
│       └── data
│           └── anatomy.json
├── docs
│   └── index.html
├── examples
│   └── demo.html
├── tests
│   ├── unit
│   │   └── components.test.js
│   └── e2e
│       └── interaction.spec.js
├── .github
│   └── workflows
│       └── gh-pages-deploy.yml
├── .gitignore
├── package.json
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone https://github.com/yourusername/bedroom-anatomy-vr.git
   cd bedroom-anatomy-vr
   ```

2. **Install Dependencies**: 
   Ensure you have Node.js installed, then run:
   ```
   npm install
   ```

3. **Run the Project**: 
   You can use a local server to run the project. For example, using `http-server`:
   ```
   npx http-server src
   ```

4. **Access the VR Experience**: 
   Open your web browser and navigate to `http://localhost:8080/index.html` to start the experience.

## Deployment
To deploy the project on GitHub Pages:
1. Push your changes to the `main` branch.
2. The GitHub Actions workflow will automatically deploy the project to GitHub Pages.

## Contributing
Contributions are welcome! Please refer to the `CONTRIBUTING.md` file for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.