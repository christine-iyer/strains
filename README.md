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