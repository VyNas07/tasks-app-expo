import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import { TaskItem as TaskItemType } from '../utils/handle-api';

// Recebe a lista de tarefas e as funções de editar/apagar
interface TaskListProps {
  tasks: TaskItemType[];
  updateMode: (id: string, text: string) => void;
  deleteTask: (id: string) => void;
}

// FlatList é mais eficiente que ScrollView para listas grandes
function TaskList({ tasks, updateMode, deleteTask }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        // Para cada tarefa do array, renderiza um TaskItem
        <TaskItem
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteTask(item._id)}
        />
      )}
    />
  );
}

export default TaskList;
