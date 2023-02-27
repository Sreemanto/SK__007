from flask import Flask, render_template
from create_json import get_data, create_file, path
import sqlite3
import pandas as pd

#creating the flask app
app = Flask(__name__)


@app.route('/')
def home():
    """
    This function is used to render and display the html page
    """  
    return render_template('index.html')



if __name__ == '__main__':
    
    #fetches the data
    df = get_data()
    
    #creates the json file
    create_file(df,path)
    
    #starts the flask application
    app.run(debug=True,port=5030)
