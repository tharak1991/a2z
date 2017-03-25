import React from 'react'
import style from './style.css'
import Book from './book.js'

class BookList extends React.Component{
    render(){
        return(
				<ul className="book-listing">
					<li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                    <li>
                        <Book/>
                    </li>
                </ul>
        )
    }
}

export default BookList

