//U20026580
import React from 'react';
import TaskGenerator from './TaskGenerator';
import FancyText from './FancyText';
const App = () => {
  return (
    <div className="app">
      <FancyText title={true} text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>© Copyright Notice</footer>
    </div>
  );
};
export default App