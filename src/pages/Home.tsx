import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask={
      id: new Date().getTime(),
      title:newTaskTitle,
      done:false
    }

    setTasks(oldTask =>[...oldTask, newTask])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updateTask = tasks.map(task => ({ ...task }))

   const idExists = updateTask.find(item => item.id === id)

    if(!idExists)
    return;

    idExists.done = !idExists.done;
   setTasks(updateTask);
   console.log(tasks);
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter(task => task.id !== id)

    setTasks(removeTask)
    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})