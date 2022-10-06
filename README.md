# note-app

A note app to practice React. The React frontend sends requests to the Express.js backend. Notes are stored in a MongoDB database. 

The notes are arranged in a masonry grid (react-masonry-css) with five columns per default, but the grid will go down to a single column depending on screen size. Breakpoints can be seen in the NotesArea.js component. Notes can be created, read, updated, and deleted.

To run, install all npm dependencies in both front and backend folder, start MongoDB, then run 'node server.js' in the backend folder and 'npm start' in the frontend/notes-frontend folder.

## Pictures
### Four columns
Notes are cut off after eight lines of text in the notes area preview.

![image](https://user-images.githubusercontent.com/111273682/194351337-982a1a73-16a2-4b33-b1b1-fa146266ac24.png)
#
### Single column

![image](https://user-images.githubusercontent.com/111273682/194354697-4d18e32b-39ea-4453-b587-c9add2cbe8fa.png)
#
### Note input window expands once you click on it

![image](https://user-images.githubusercontent.com/111273682/194355055-094cd339-c17b-4bf8-8389-37e0d9fa747c.png)
#
### Delete button on hover
You can see the search function in this picture too!
![image](https://user-images.githubusercontent.com/111273682/194355485-d972a1a1-cc3a-4f09-b2af-632ec15355c7.png)
#
### Note modal to view/edit a note
![image](https://user-images.githubusercontent.com/111273682/194355754-3f568695-24f1-40f9-af93-e7601eb1516c.png)
