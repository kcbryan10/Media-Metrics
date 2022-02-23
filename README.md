# <P3-G03>
## Description
- what we made was a fully functional application that allows student and teacher to connect and schedule lessons
- why we wanted to make this app in paticular is because there didnt seem to be any sights there where a "one stop shop" for student teacher scheduling
- how we acomplished this is using the knowledge and tools we learned throughout our time in the KU coding course so far.
- we learned alot about commincation between memeber (cordination), aswell as researching and applying new packages/ technologies
- [DEPLOYED ](https://protected-dusk-79081.herokuapp.com/) application. 
- [GITHUB](https://github.com/kcbryan10/Studious) page for the application.
    
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
- Download files from github
- run terminal with file path
- run 'npm i' in terminal
- run 'npm run seeds' in terminal
- run 'npm run start' in terminal
- view website at Localhost:3001 in web browser
    
## Usage
    
![Studious-homepage](https://user-images.githubusercontent.com/90362572/148450508-5b19a728-d14e-499c-917d-a5199245a599.png)      
there are 4 main pages on the website (homepage, login/signuppage, dashboard, search). to navigate to the dashboard or search page you must first login on the login/signup page, which you can find in the top left hand corner.
    
![Studious-loginsignup](https://user-images.githubusercontent.com/90362572/148450601-43d49411-4284-4145-90da-65dfeaf33ffd.png)   
once you get on the login/signup page type in you first and last name aswell as you email and password hit submit and you will be auto redirected to the dashboard.
    
![Studious-dashboard](https://user-images.githubusercontent.com/90362572/148450635-bcd87cb8-87d0-45b6-b7ed-e89217edcb4f.png)
on the dashbaord you will see one row for ever day of the week (which are all empty). to continue to make an appointment click the find the instructor link at the bottom of the page and you will be taken to the search page.
    
![Studious-search](https://user-images.githubusercontent.com/90362572/148450716-3fddac0b-5395-4598-ae9e-2017579e1e0d.png)  
on the search page you will find a list for specialties to select from. select which specialty you are looking to be taught from the list that hit the search button to display all teacher that teacher that specialty. if you like what you see from a teacher you can click on there name to schedule an apointment with them.
   
![Studious-schedule](https://user-images.githubusercontent.com/90362572/148450750-237b1258-19d9-41ca-906a-55e149ccc23b.png) 
once on the scheduling page you will see what timeslot teacher have open on certain days. click schedule lesson under the timeslot and scroll down to select a date that works for you.
   
you can then revisit the dashboard and find that to look at you scheduled lessons.
   
## Collaborators
- Daniel Denton [Github](https://github.com/HighDynamics)
- Justin Eicher [Github](https://github.com/Justin-Eicher)
- Naomi Eckhoff [Github](https://github.com/Naomi-Eckhoff)
- Bryan Keller [Gtihub](https://github.com/kcbryan10)
    
## Technologies
- bcrypt [source](https://www.npmjs.com/package/bcrypt)
- sequelize [source](https://sequelize.org/)
- dotenv [source](https://www.npmjs.com/package/dotenv)
- express [source](https://expressjs.com/)
- handlebars [source](https://handlebarsjs.com/)
- sass [source](https://sass-lang.com/)
- node [source](https://nodejs.org/en/)
- mysql2 [source](https://www.mysql.com/)
- nodemon [source](https://www.npmjs.com/package/nodemon)
- express session [source](https://www.npmjs.com/package/express-session)
- connect session sequelize [source](https://www.npmjs.com/package/connect-session-sequelize)
- luxon [source](https://moment.github.io/luxon/#/?id=luxon)

    
## License
MIT License

Copyright(c)2022BryanJKeller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
