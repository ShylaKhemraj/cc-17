import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };
  const handleMarkCompleted = () => {
    tasks[currentTaskIndex].isCompleted = true;
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };
  const currentTask = tasks[currentTaskIndex];
  const taskStatus = currentTask.isCompleted ? "Completed ✔" : "Pending";
  return (
    <div>
      <FancyText title={false} text={`Task: ${currentTask.name}`} />
      <FancyText title={false} text={`Status: ${taskStatus}`} />
      <FancyText title={false} text="Stay focused and keep going!" />
      <button onClick={handleNextTask}>Next Task</button>
      <button onClick={handleMarkCompleted}>Mark as Completed</button>
    </div>
  );
};
export default TaskGenerator