import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

// defino quais informações esse componente precisa receber para funcionar
interface TaskItemProps {
  text: string;        // o texto da tarefa
  updateMode: () => void;  // função chamada ao clicar em editar
  deleteToDo: () => void;  // função chamada ao clicar em apagar
}

// Esse componente mostra uma tarefa na tela
// Ele recebe as informações pelo objeto "props" e desestrutura direto nos parâmetros
function TaskItem({ text, updateMode, deleteToDo }: TaskItemProps) {
  return (
    // caixa principal da tarefa (linha inteira)
    <View style={styles.container}>

      {/* Texto da tarefa — ocupa o máximo de espaço disponível (flex: 1) */}
      <Text style={styles.text}>{text}</Text>

      {/* Ícones de ação: editar e apagar, lado a lado */}
      <View style={styles.icons}>
        <TouchableOpacity onPress={updateMode}>
          <Feather name="edit" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteToDo}>
          <AntDesign name="delete" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 16,
    flexDirection: 'row',      
    alignItems: 'center',    
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    flex: 1, // faz o texto ocupar o espaço disponível
  },
  icons: {
    flexDirection: 'row', // coloca os dois ícones lado a lado
    gap: 16,
    marginLeft: 16,
  },
  icon: {
    padding: 2,
  },
});

export default TaskItem;
