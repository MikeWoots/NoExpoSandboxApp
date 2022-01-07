import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import React from 'react';
import { compose } from 'recompose';

export const connect = dbObservables => {
  return (ComponentToEnhance: React.FC<any>) => {
    // compose(
    //   withDatabase,
    //   withObservables([], dbObservables),
    // )(ComponentToEnhance);
    return dbObservables != null
      ? compose(
          withDatabase,
          withObservables([], dbObservables),
        )(ComponentToEnhance)
      : ComponentToEnhance;
  };
};
