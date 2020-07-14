import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetData from './API'
// import { Glyphicon } from 'react-bootstrap';


// function SearchData(event){
//   this.setState({searchKey: event.targt.value});
// }

// export class Formdata extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { searchKey: '' };
//   }
//   SearchData = (event) => {
//     console.log(event.target.value);
//     this.setState({ searchKey: event.target.value});
//   }

//   render() {
//     return (
//       <React.Fragment>
//       <div>
//         <input type="text" name="search" placeholder="Search State/District" autoComplete="off" onChange={this.SearchData}/>
//         {/* <button  onClick={this.SearchData} >Submit</button> */}
//         <p > Please search corect State (or) District!!! </p>
//       </div>
//       <GetData value={this.state.searchKey}/>
//      </React.Fragment>
//     );
//   }
// }

function App() {
  return (
    <React.Fragment>

      {/* <div><Formdata /> </div> */}
      <GetData />
    </React.Fragment>
  );
}

export default App;
