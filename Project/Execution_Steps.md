
#Directory Description

Python
Script 1 - create_db.py: Responsible for creating the database from the given .xlsx file
Script 2 - app.py: Runs the web app using Flask 
Script 3 - create_json.py: This script contains some helper functions
* get_data: connects with the db and loads the data into data frame format
* create_json: converts the data frame into JSON

HTML 
index.html: For creating a simple front end.

Javascript
Script.js : This script is responsible for interacting with the HTML and display an interactive chart based on the user’s selection



#Order of Execution

1. Run Script 1 (create_db.py) first to create the database which will contain the xlsx data in a table named “LumberFut”.
2. Run Script 2 (app.py) to run the web app
3. Copy the url and open it on a webpage
4. Select an option from the dropdown to see the interactive chart
5. Hover over the line to find the exact data
