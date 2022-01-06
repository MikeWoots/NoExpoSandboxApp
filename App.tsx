/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import NavigationRouter from './app/NavigationRouter';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import { database } from './app/database/configureDB';

const App = () => {
  /// ReactNativeFlipperDatabases - START

  if (__DEV__) {
    // Import connectDatabases function and required DBDrivers
    const {
      connectDatabases,
      WatermelonDB,
    } = require('react-native-flipper-databases');

    connectDatabases([
      new WatermelonDB(database), // Pass in database definition
    ]);
  }

  /// ReactNativeFlipperDatabases - END

  return (
    <DatabaseProvider database={database}>
      <NavigationRouter />
    </DatabaseProvider>
  );
};

export default App;
