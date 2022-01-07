import { connect } from '../../database/databaseUtils';
import Hello from './Hello';

const dbObservables = ({ database }) => {
  const users = database.collections.get('users').query().observe();
  return {
    users,
  };
};

export default connect(dbObservables)(Hello);
