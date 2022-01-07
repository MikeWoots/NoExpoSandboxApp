import { Button, Text, View } from 'react-native';
import React from 'react';

type Props = {
  user: any;
  text: string;
};

const UserListItem = ({ user, text }: Props) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <Button
        title="Change name"
        onPress={() => {
          console.log(`changing ${user.name} to ${text}`);
          user.changeName(text);
        }}
        color="red"
      />
    </View>
  );
};

export default UserListItem;
