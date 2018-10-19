import React from 'React';
import ReactDOM from 'react-dom';
import Search from './components/search.js';

const App = () => {
  return (
    <table>
      <thead>
        <tr>Search a Word!!</tr>
      </thead>
      <tbody>
        <Search />
      </tbody>
    </table>
     
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('app'));
