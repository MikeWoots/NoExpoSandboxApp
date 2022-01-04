import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GoodbyeProps } from '../NavigationRouter';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

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

const Goodbye: React.FC<GoodbyeProps> = ({
  route,
  navigation,
}: GoodbyeProps) => {
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
        Goodbye {route.params.name}
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
    </View>
  );
};

export default Goodbye;
