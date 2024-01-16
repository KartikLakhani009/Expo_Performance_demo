import React from 'react';
import { StyleSheet, Text,  SafeAreaView, FlatList, View} from 'react-native';
import { list } from './todoData';

type TodoListProps = {};

type TItemTodo = typeof list[0] & {index : number};

const TodoItem = (props: TItemTodo) => {
    const {title,desciption,cardColor, index} = props;
    return (<View style={{backgroundColor:cardColor, margin:10, padding:10, borderWidth:1,borderRadius:10, borderColor:'black'}} key={index.toString()}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{desciption}</Text>

    </View>)
}

const TodoList = (props:TodoListProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTextStyle}>{'Todo List'}</Text>
      <FlatList
       data={list}
       keyExtractor={(_,index) => index.toString()}
       renderItem={({item ,index}) => <TodoItem {...item} index={index} />}
       />
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTextStyle: {
    marginVertical:10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#96E2C3',
    marginLeft:15,
    borderBottomColor:'blue',
    borderBottomWidth:1,
  },
  titleText:{
    marginBottom:10,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor:'blue',
    borderBottomWidth:1,
  }
});
