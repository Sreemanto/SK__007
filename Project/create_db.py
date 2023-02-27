import pandas as pd
import sqlite3

# Load the XLSX file into a pandas dataframe
df = pd.read_excel('./OI - Copy of LumberFut.xlsx')

#dropping the cols which does not have any value
df.drop(df[df.Open == "-"].index, inplace=True)

#collecting the list of columns
col_list = df.columns[1:]

#converting them to numeric format
for col in col_list:
    df[col] = pd.to_numeric(df[col])
    
#converting the date column to datetype objecr
df['Date'] = pd.to_datetime(df['Date'])

# Create a new SQLite database and a new table
conn = sqlite3.connect('mydatabase.db')
df.to_sql('LumberFut', conn, if_exists='replace', index=False)

# Save the changes and close the database connection
conn.commit()
conn.close()
