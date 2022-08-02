import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BookService{
    books : Book[] = [
        //new Book("Livro1","Livro um", 100),
       // new Book("Livro2","Livro dois", 200),
        // new Book("Livro3","Livro tres", 300),
    ]

    all(): Book[] {
        return this.books;
    }

    find(id: number): Book {
        return this.books[0]
    }


    create(book: Book) {
        console.log(book);
        book.id = Math.random() * 10
        this.books.push(book)
        return book
    }

    update(book: Book): Book {
        console.log(book);
        return book
    }

    remove(id: number): Book {
        return this.books.pop()
    }

}