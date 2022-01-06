import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import React from 'react';

export const connect = dbObservables => {
  return (ComponentToEnhance: React.FC<any>) => {
    return dbObservables != null
      ? withDatabase(withObservables([], dbObservables)(ComponentToEnhance))
      : ComponentToEnhance;
  };
};
