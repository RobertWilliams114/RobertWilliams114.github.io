# This is the sequence of things that I did in order to create my online portfolio

## Initialization and Set Up

1. First I created the client side of the react app by running **npx create-react-app client** in the terminal
2. I then removed all of the comments and previously written code app.js, index.html, app.js, index.css, and app.css
3. Next, I installed tailwindcss by running **npx tailwindcss init -p** because this would be what I was going to use for styling. I then added the base, components, and utilities to the index.css file
4. Afterward, I installed react router because it contains things that I would be using for the front end. **npm install react-router-dom**

I added two folders to the src folder in order to organize everything I was using. These two folders are the pages folder and the components folder
I added a home folder to the pages folder and added an index.js file to the home folder
I added the primary, secondary and tertiary colors to the tailwind config file so I could use them in the future

I added the letters to the header and added the background color of the header file

The index.js file is where the home screen of the project is and is where all of the things that will go onto the homescreen will be added
The first thing that was added to the home screen was the header that had the three letters of my abbreviated name across the top. This type of thing would be added again later in the project so it will be added to the components file of the src folder.
The second thing that was added to the home screen was the intro section which contained my name, a hook, and a short description about myself.
The third thing that was added to the home screen was the about section which would be the blueprint for other sections of the portfolio.
A SectionTitle file was also added to the components page because it would be used in order to create the titles for the other sections

Now I have to initialize the backend of the portfolio and that is done by using **npm init** and we will get a package.json
Next I installed express.js for the routing in the backend, mongoose for database purposes, and dotenv for authorization purposes

I am installing axios, redux, and react redux in order to connect the front end to the backend

I am installing antd in order to make the admin panel for the portfolio
in the index.js file in the client folder of the project, we are adding antd by importing it using "import 'antd/dist/antd.min.css'"
