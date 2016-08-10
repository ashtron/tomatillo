# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique 

## calendars
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
calendar    | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

- [] Calendar objects will be converted to strings using JSON.stringify() for database storage