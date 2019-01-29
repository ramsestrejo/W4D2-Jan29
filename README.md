
# Programmatic SQL
In this exercise we programmatically connected through the 'pg' module/client driver and ran the SQL queries that we had run against the database directly. We incrementally turned isolated code into functions that achieved the following:

1. Constructed SQL from within JavaScript and ran it against a PostgreSQL database.
2. Worked with the async nature of the execution of queries by implementing callbacks.
3. Used database connection parameters that would be used when connecting to the database from an external database. Remember that different access levels can be designated to accounts by RDBMS.
4. Implemented simple queries that provide apps with data services.
5. Used modules to isolate the persistence layer, so data access layer functions are separated from logic code
6. Described the concept of Prepared statement and how they help improve speed and security.

# SQL Injection 
We mentioned SQL injection as a way of service attack that we find in the web world. Enjoy the following meme.

<img src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/forums/uploadfile/suthish_nair/07082016051954AM/Injection.PNG" />
