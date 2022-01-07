import UserListItem from './UserListItem';
import { connect } from '../../../../database/databaseUtils';

const dbObservables = ({ database, user }) => {
  return {
    user,
  };
};

export default connect(dbObservables)(UserListItem);
