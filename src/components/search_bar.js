import React,{Component} from 'react';

class SearchBar extends Component {
  constructor(props){
  super(props);

  this.state ={term:' '};
}
  render() {

    return (
      <div  className ="search-bar">
         <input
         type="text"
         placeholder="Search"
         onChange={event => this.onInputChange(event.target.value)}
         value={this.state.term} />
         <button onClick={ () => this.props.onSearchTermChange(this.state.term)} >Search</button>
       </div>
    );
  }

  onInputChange(term){
    this.setState({term});
  }
}
export default SearchBar;
