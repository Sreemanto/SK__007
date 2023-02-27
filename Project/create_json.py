import sqlite3
import pandas as pd

path = './static/data.json'

def get_data():

    """
    This function is used to connect to database and transforms the data to required format
    """  

    # Open a connection to the SQLite database
    conn = sqlite3.connect('mydatabase.db')

    # Read data from the database into a Pandas dataframe
    df = pd.read_sql_query('SELECT * FROM LumberFut', conn)

    # Sorting the data by date and renaming the column names
    df = df.sort_values(by='Date').rename(columns = {'Close*':'Close','Adj Close**':'Adj_Close'}).reset_index(drop=True)
    
    # Close the database connection
    conn.close()

    return df


def create_file(df,path):

    """
    This function is used to convert the data frame to json
    """

    with open(path, 'w') as f:
        json_string = df.to_json(orient='records')
        f.write(json_string)
    
    

    





