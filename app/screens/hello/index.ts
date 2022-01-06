import { connect } from '../../database/databaseUtils';
import Hello from './Hello';

const dbObservables = ({ database }) => {
  return {
    users: database.get('users').query(),
  };
};

export default connect(dbObservables)(Hello);
