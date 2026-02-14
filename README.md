# NeoClock


NeoClock 🕒

A modern analog clock built with pure HTML, CSS, and JavaScript.

This project dynamically displays the current time using rotating clock hands powered by JavaScript and styled entirely with CSS.

🚀 Features

Real-time analog clock

Smooth second, minute, and hour hand rotation

Dynamic time calculation using JavaScript Date API

Pure CSS clock face styling

No libraries – 100% Vanilla JavaScript

Responsive centered layout

🛠️ Technologies Used

HTML5

CSS3 (Flexbox + Shadows + Pseudo Elements)

Vanilla JavaScript

Date Object

setInterval

🎯 How It Works

JavaScript fetches the current time using new Date()

Hours, minutes, and seconds are converted into degrees

Each clock hand rotates using transform: rotateZ()

The clock updates every second using setInterval

🧠 Rotation Logic

1 hour = 30 degrees

1 minute = 6 degrees

1 second = 6 degrees

Hour hand moves smoothly using minute offset

hour.style.transform = `rotateZ(${h + m * 0.5}deg)`

📂 Project Structure
├── index.html
├── style.css
├── app.js
└── 2.jpg

🎨 Design Highlights

Dark theme UI

Neumorphism shadow effect

Custom colored hands:

Green → Seconds

Pink → Minutes

Orange → Hours

Center pivot styling

💡 Purpose

This project demonstrates:

DOM manipulation

Real-time rendering

CSS positioning techniques

Working with time calculations

Transform and rotation logic

📌 Future Improvements

Add ticking sound

Add digital time display

Add theme switcher

Add timezone support

Add smooth animation using requestAnimationFrame

👨‍💻 Author

Built as part of my JavaScript practice and UI design experiments.
