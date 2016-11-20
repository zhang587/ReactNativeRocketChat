import {connect} from 'react-redux';
import { switchTab } from '../navigation/NavigationState';
import { onUserLoginSuccess, onUserLoginError } from './AuthState';
import RegistrationView from './RegistrationView';

export default connect(
  state => ({}),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
    onUserLoginSuccess(profile, token) {
      dispatch(onUserLoginSuccess(profile, token));
    },
    onUserLoginError() {
      dispatch(onUserLoginError());
    },
  })
)(RegistrationView);
