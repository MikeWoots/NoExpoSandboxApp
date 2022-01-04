import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HelloProps } from '../NavigationRouter';

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
});

const Hello: React.FC<HelloProps> = ({ route, navigation }: HelloProps) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    route.params.baseEnthusiasmLevel,
  );

  const onIncrement = (): void => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = (): void =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number): string =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {route.params.name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
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
      <Button
        title="Say Goodbye"
        onPress={() =>
          navigation.navigate('Goodbye', {
            name: 'Mike',
            baseEnthusiasmLevel: 0,
          })
        }
        color="red"
      />
    </View>
  );
};

export default Hello;
