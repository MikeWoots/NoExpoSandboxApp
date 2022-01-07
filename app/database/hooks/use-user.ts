import { useDatabase } from '@nozbe/watermelondb/hooks';

interface User {
  addUser: (name: string) => void;
}
export function useUsers(): User {
  const database = useDatabase();

  const addUser = async (name: string) => {
    console.log('creating new user');
    await database.write(async () => {
      const newUser = await database.get('users').create(user => {
        user.name = name;
      });
      console.log(newUser);
    });
  };

  return { addUser };
}
