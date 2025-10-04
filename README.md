PLP Bookstore MongoDB Assignment
📋 Assignment Description
This project implements a complete MongoDB database solution for a bookstore, demonstrating CRUD operations, advanced queries, aggregation pipelines, and indexing.

📁 Files in This Assignment
insert_books.js - Script to insert sample book data into MongoDB

queries.js - Contains all MongoDB queries for Tasks 2-5

README.md - This documentation file

screenshot.png - Screenshot showing the working database

📊 What's in the Database
The database plp_bookstore has a collection books with 12 book documents. Each book has:

title (Book title)

author (Author name)

genre (Book category)

published_year (Year published)

price (Book price)

in_stock (Availability)

pages (Number of pages)

publisher (Publisher name)

✅ Tasks Completed
Task 1: MongoDB Setup ✅
Created database: plp_bookstore

Created collection: books

Task 2: Basic CRUD Operations ✅
Inserted 12 books into the collection

Find books by genre, author, year

Update book prices

Delete books by title

Task 3: Advanced Queries ✅
Complex searches (in stock + after 2010)

Field selection (title, author, price only)

Sorting by price (low to high, high to low)

Pagination (5 books per page)

Task 4: Aggregation Pipeline ✅
Average book price by genre

Most popular author

Books count by decade

Task 5: Indexing ✅
Fast search index on book titles

Combined index on author and year

Performance testing

📸 Screenshot
The screenshot.png file shows:

MongoDB with the plp_bookstore database

Books collection with data

Sample queries working