const hud = document.createElement('div');
hud.id = 'hud';
hud.style.position = 'absolute';
hud.style.top = '10px';
hud.style.left = '10px';
hud.style.color = 'white';
hud.style.fontSize = '20px';
hud.style.zIndex = '10';

const title = document.createElement('h1');
title.innerText = 'Bedroom Anatomy VR';
hud.appendChild(title);

const instructions = document.createElement('p');
instructions.innerText = 'Use the navigation buttons to explore the room.';
hud.appendChild(instructions);

const navButtons = document.createElement('div');
navButtons.style.display = 'flex';
navButtons.style.gap = '10px';

const button1 = document.createElement('button');
button1.innerText = 'Explore';
button1.onclick = () => {
    // Logic to start exploring the room
};

const button2 = document.createElement('button');
button2.innerText = 'Info';
button2.onclick = () => {
    // Logic to show information
};

navButtons.appendChild(button1);
navButtons.appendChild(button2);
hud.appendChild(navButtons);

document.body.appendChild(hud);