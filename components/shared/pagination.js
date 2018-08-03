import React, {Component} from "react";

export default class Pagination extends Component{

  constructor(props){
    this.state = {
      per_page: props.per_page,
      currentPage: props.currentPage,
      total: props.total,
      pages : null  
    }


    this.state.pages = Math.ceil(this.state.total/this.state.per_page);
    console.log(this.state.pages, "this.state.pages");

  }

  paginate(){

  }

  updatePerPage(){
    console.log(this.props.per_page, "this.props.per_page");
  }

  render(){
    return (
      <div> 
        {this.props.per_page}
        <button onClick={()=>this.updatePerPage()}>Update per page</button>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>

    )

  }

  

}