const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('plp_bookstore');
        const books = database.collection('books');

        // Clear any existing data
        await books.deleteMany({});

        const bookData = [
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Classic",
                published_year: 1925,
                price: 12.99,
                in_stock: true,
                pages: 218,
                publisher: "Scribner"
            },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Fiction",
                published_year: 1960,
                price: 14.99,
                in_stock: true,
                pages: 281,
                publisher: "J.B. Lippincott & Co."
            },
            {
                title: "1984",
                author: "George Orwell",
                genre: "Dystopian",
                published_year: 1949,
                price: 10.99,
                in_stock: false,
                pages: 328,
                publisher: "Secker & Warburg"
            },
            {
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                genre: "Fantasy",
                published_year: 1937,
                price: 16.99,
                in_stock: true,
                pages: 310,
                publisher: "George Allen & Unwin"
            },
            {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                genre: "Romance",
                published_year: 1813,
                price: 9.99,
                in_stock: true,
                pages: 432,
                publisher: "T. Egerton"
            },
            {
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                genre: "Fiction",
                published_year: 1951,
                price: 11.99,
                in_stock: false,
                pages: 234,
                publisher: "Little, Brown and Company"
            },
            {
                title: "Harry Potter and the Philosopher's Stone",
                author: "J.K. Rowling",
                genre: "Fantasy",
                published_year: 1997,
                price: 19.99,
                in_stock: true,
                pages: 223,
                publisher: "Bloomsbury"
            },
            {
                title: "The Da Vinci Code",
                author: "Dan Brown",
                genre: "Mystery",
                published_year: 2003,
                price: 15.99,
                in_stock: true,
                pages: 454,
                publisher: "Doubleday"
            },
            {
                title: "The Hunger Games",
                author: "Suzanne Collins",
                genre: "Dystopian",
                published_year: 2008,
                price: 13.99,
                in_stock: true,
                pages: 374,
                publisher: "Scholastic"
            },
            {
                title: "The Alchemist",
                author: "Paulo Coelho",
                genre: "Adventure",
                published_year: 1988,
                price: 12.99,
                in_stock: true,
                pages: 208,
                publisher: "HarperTorch"
            }
        ];

        const result = await books.insertMany(bookData);
        console.log(`${result.insertedCount} books inserted successfully!`);
        
    } finally {
        await client.close();
    }
}

main().catch(console.error);

 
  
  
    
  

