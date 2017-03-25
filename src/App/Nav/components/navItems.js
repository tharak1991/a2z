import React from 'react'

class NavItems extends React.Component {
    constructor(props){
        super();
        this.state= {
            age: this.age
        }
    }
    olderAge(){
        this.state.age += 3;
        console.log(this.age)
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <ul className="filter-option">
                    
                    {this.state.age}
                    <button onClick={this.olderAge.bind(this)}>clickme</button>
                    <li>
                        <label >
                            <input type="checkbox" value="In Shelf" name="In Shelf"/>
                            <i className='fa fa-bookmark' aria-hidden="true"/> 
                            <span className="avail-txt active">In Shelf</span>
                        </label>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" value="Out of Shelf" name="Out of Shelf"/>
                             <i className='fa fa-bookmark-o' aria-hidden="true"/> 
                             <span className="avail-txt">Out of Shelf</span>
                        </label>
                    </li>
                </ul>
                <span className="tab-header">New <i className='fa fa-arrow-circle-o-down'></i></span>
                <ul className="tab-items hide">
                    <li>Book</li>
                </ul>
                <span className="tab-header">Book <i className='fa fa-arrow-circle-o-down'></i></span>
                <ul className="tab-items hide">
                    <li>Full list</li>
                    <li>Out of Shelf</li>
                    <li>Missing</li>
                </ul>
                <span className="tab-header">My Shelf <i className='fa fa-arrow-circle-o-down'></i></span>
                <ul className="tab-items hide">
                    <li>Favourites</li>
                    <li>Suggestions</li>
                    <li>If I lost book</li>
                </ul>
            </div>
        )
    }
}

export default NavItems
