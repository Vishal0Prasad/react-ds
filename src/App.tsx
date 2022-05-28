import React from 'react';

import TreeList from './components/TreeList';
import { mockTreeList } from './data/tree';

import './App.css';

function App() {
  return (
    <div className="App">
      <TreeList data={mockTreeList}/>
    </div>
  );
}

export default App;
