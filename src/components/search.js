import React from 'React';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: 'search me!'
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  textGone() {
    this.setState({
      query: ''
    })
  }  

  search(query) {
    console.log(query, ' was searched!');
    //todo axios get here
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="searchBar"
            value={this.state.query}
            onChange={this.onChange}
            onClick={() => this.textGone()}
          />
        </td>
        <td>
          <input
            type="button"
            name="submitSearch"
            value="Search"
            onClick={() => this.search(this.state.query)}
          />  
        </td>
      </tr>
    )
  }
}

export default Search
