import React from 'react';
import Beatles from 'C:/Users/ruaidhril/Desktop/ReactCrash/projectreact/projectreact/src/Beatles.js';
// import beatlesData from 'C:/Users/ruaidhril/Desktop/ReactCrash/projectreact/projectreact/src/beatlesData.js';

const beatlesData = [
  {
    id: '1',
    name: 'Paul',
    instrument: 'vocals/bass'    
  },
  {
    id: '2',
    name: 'Ringo',
    instrument: 'drums'
  },
  {
    id: '3',
    name: 'George',
    instrument: 'vocals/bass'
  },
  {
    id: '4',
    name: 'John',
    instrument: 'vocals/guitar'    
  }
]


// const beatlesComponents = beatlesData.map(
//   function(member) {
//     return (
//       <Beatles key={member.id} name={member.name} instrument={member.instrument}/>
//     )
//   }
// )

const beatlesComponents = beatlesData.map(
  member => <Beatles key={member.id} name={member.name} instrument={member.instrument}/>)

function App() {

  return (
    <div>
      <h1 className='title'>The Beatles</h1>
      <div className='container'>
        {/* <div className='app'> */}
          {beatlesComponents}
        {/* </div> */}
      </div>
      
    </div>
    
  ) 
}

export default App