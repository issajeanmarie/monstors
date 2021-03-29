import './App.css';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box'

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      monstors: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monstors: users}))
  }

  handleSearch = e => {
    this.setState({searchField: e.target.value})
  }
  
  render(){
    const {monstors, searchField} = this.state
    const filteredMonstors = monstors.filter(monstor => 
      monstor.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return(
      <div className="App">
        <h2>Search for monstors!</h2>
        <SearchBox handleSearch={this.handleSearch} />
        <CardList monstors={filteredMonstors} />        
      </div>
    )
  }
}

export default App;
