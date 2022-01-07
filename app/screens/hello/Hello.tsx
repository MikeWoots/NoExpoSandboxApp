import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useUsers } from '../../database/hooks/use-user';
import { useEnthusiasmLevel } from './hooks/use-enthusiasm-level';
import UserListItem from './components/UserListItem';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

type Props = {
  users: any;
  navigation: any; //need to figure out best way to type the navigation
  route: any;
};

const Hello = ({ users, navigation, route }: Props) => {
  const { onIncrement, onDecrement, getExclamationMarks } =
    useEnthusiasmLevel();
  const { addUser } = useUsers();
  const [text, onChangeText] = React.useState('');
  const selectedUser = users[0] ? users[0] : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {getExclamationMarks()}</Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Add user" onPress={() => addUser(text)} color="red" />
      <Button
        title="Say Goodbye"
        onPress={() =>
          navigation.navigate('Goodbye', {
            name: selectedUser.name,
            baseEnthusiasmLevel: 0,
          })
        }
        color="red"
      />
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <UserListItem user={item} text={text} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Hello;
