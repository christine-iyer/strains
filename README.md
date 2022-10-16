## Homework Captain's Log W11D3

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

* to align with the content of lecture
* to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part.
* If you finish lab early consider:
     - try working with the date object! Try to make it look human readable in HTML. It's tricky! A Hint
     try working through the next section of the lab before it is covered in lecture - see what you can figure out

     - SUPER BONUS - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do you own research of how to set up a one-to-many relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documentation, or Google.

### Set up
Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

Restful Routes

| #  |Action   | URL |  HTTP Verb |  JSX file name |  mongoose |
|---|---|---|---|---|---|
|  1 | Index  |  /logs/ |  GET |  Index.jsx | Log.find  |
|   2|  Show |   |   |   |   |
|  3 |  New |  /logs/new | GET  |  New.jsx |  none |
|   4|  Create | /logs/  |  POST |   none| Log.create(req.body)  |
|   5| Edit  |   |   |   |   |
|   6|  Update |   |   |   |   |
|   7|  Destroy | Delete  |   |   |   |

### Captain' Log

**software_homework/unit_2**

```JS
mkdir captains_log
cd catpains_log
```
**create a new express app** 


**Use jsx**

The notes below will be written usen jsxas the templating language to render our views.

Remember to install jsx run the command below

```
npm i express jsx-view-engine react react-dom method-override dotenv mongoose
```

**New**

1. create a new route in your server.js- be sure to follow the Restful convention.

2. just have it res.send('new')as the response for now

3. make a views directory

4. add jsxto your server using our previous code as an example

5. touch views/New.jsx

6. Create the view, it should contain a form with the following:

7. form with action="/logs"and method="POST"

8. input type text for a title

9. input type textarea for an entry

10. input type checkbox for shipIsBroken

11. input type submit

12. change your res.send to res.render this view

13. don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to

**Create**

1. create a createroute in your server.js- be sure to follow the Restful convention.

2. just have it res.send('received')as the response for now

3. use and configure body-parserin your server.js(note, this package was once separate, but has been added back in to express more details. 

4. Kill your server and restart. Check to make sure it works by changing the res.sendfrom a string to sending the req.body- it should send the data you inputted to your new form

5. Update your data

     * change the input of your checkbox to be true/false rather than on

     * now when you check your res.send(req.body)you should see true/false rather than 'on/off' - the rest of your data should stay the same
d
6. Don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to


**Mongo**

1. install mongoose and configure it in your server.js

2. see fruits for correct mongo configuration
3. Hint .gitignore and .env also need to be setup

**Logs Model**

1. mkdir models

1. touch models/logs.js

1. Create the logs schema

1. title: string

1. entry: string

1. shipIsBroken: Boolean (bonus: set a default to true)



as a second argument to mongoose.Schema(), add { timestamps: true }
Upgrade your Create Route
upgrade your code to create your log in MongoDB
have your route redirect to the show page after create
don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Stretch: make a seed file and seed it
Index Route
In server.jsmake an index route, be sure to follow the Restful convention
first, just test it by having it res.send('index')
Don't forget to fill out your Restful table!
create Index.jsxand change your res.sendto res.renderthis page
upgrade your route and jsx to render all the logs in your database, just make an unordered list of the titles for now
Add a link to the create page
don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Show Route
Fill out your Restful table
In server.jsmake a show route, be sure to follow the Restful convention
create a mongo query and res.sendyour data as a string
upgrade your Index.jsxso that each title links to its show page
Create a Show.jsxand add HTML
show the title
show the entry
show whether the ship is broken or not
add a link back to the index page
bonus:
if you had added time stamps to your model, display the date the entry was created
upgrade your res.sendto a res.renderof your Show.jsx
don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Delete Route
Fill out your Restful table
in your Index.jsx, add a delete form
install and configure method-override
upgrade your delete form to have the appropriate action and method
make your delete route in your server.js
make your delete route delete your log and redirect back to your index route
don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Edit Route
Fill out your Restful table
in your Index.jsx, add a link to your edit route
create your edit route in your server.js
create your Edit.jsx
test it to make sure it works as expected (be sure to populate your form with your log's data)
don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Put Route
Fill out your Restful table
upgrade yourEdit.jsxform to have the appropriate action and method
create your PUT route
First, just have it res.sendthe updated log and check it is as expected
change the res.sendto a res.redirectto your index page
don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Bonuses
The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
make a seed file and seed it
have your update route redirect to the show page of the log that was edited
research res.redirect('back')
create a seed file and seed your database
work on your css, make this Captain's Log look awesome!
if you have timestamps, figure out how to edit/display the edited date

**Dates Using Moment**

```JS
var moment = require('moment'); 

// require
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now)

var newDateArray = [];

dates = [
    "2018-01-01",
    "2018-01-03",
    "2018-01-05"     
]
// iterate over the dates list from above
for(let i = 0; i <= dates.length; i++) {
    // pass the date at index i into moment
    let date = moment(dates[i]).format('YYYY-MM-DD');
    console.log("date", date);
    // add this new date to the newDateArray
    newDateArray.push(date)
    console.log(newDateArray);
}
```