import React from 'react'
class Book extends React.Component{
    constructor(){
        super();
       
    }
  
    render(){
        return(
            <div>
                <img className="book" src="https://images-na.ssl-images-amazon.com/images/I/41UCyuBOXdL._SY344_BO1,204,203,200_.jpg" />
				<div className="book-details-wrap">
                    <h3 className="book-title">one indian girl</h3>
                    <p className="book-author">Chetan Bhagat</p>
                    <p className="good-reads">Goodreads 
                        <span className="orange"><i class="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                    </p>
				</div>
				<span className="fav avail">
                   <i className='fa fa-bookmark' aria-hidden="true"></i>
                </span>
            </div>
        )
    }
}

export default Book