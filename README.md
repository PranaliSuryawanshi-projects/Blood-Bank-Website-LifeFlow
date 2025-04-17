# Blood-Bank-Website-LifeFlow

A modern and dynamic Blood Bank Website that connects blood donors with recipients in need. Designed with user experience in mind, this project is built entirely using HTML, CSS, and JavaScript. It features an attractive and responsive interface that makes the process of registering as a donor and searching for one simple and seamless — all without the use of a database or backend.

# Features
1.Donor Registration
Users can fill out a form to register as blood donors with their full details: name, blood group, contact number, location, medical history, and more.

2.Donor Search System
Recipients can search for available donors based on blood group and city/state using smart, real-time filters.

3.Local Storage Integration
Donor data is securely stored in the browser's Local Storage, eliminating the need for a server or database. This makes the site lightweight and instantly functional.

4.Interactive Donor Cards
Matching donors are displayed in neatly styled donor cards with contact and location details.

5.Success Feedback
Donors see a success message pop-up upon successful registration, improving user engagement.

6.Animated Counters
Eye-catching live statistics showing the number of registered donors and lives saved.

7.Responsive Design
Fully responsive layout with mobile navigation, sticky header, and animated UI components for a rich user experience.

8.Smooth Navigation
Implemented smooth scrolling and dynamic section reveals using JavaScript.

# Technologies Used
HTML – For the structure and content of the webpage.

CSS – For styling, animations, layout, and responsive design.

JavaScript – For logic, interactivity, data handling, dynamic rendering, and Local Storage integration.

# How Data is Stored (Local Storage)
The entire donor registration system is powered by the Web Storage API (Local Storage):

Upon submitting the form, donor details are collected as a JavaScript object.

The donor list is stored as an array in localStorage, using JSON.stringify() and JSON.parse() for conversion.

This allows the donor database to persist across sessions directly in the user's browser — without any server.
