import axios from 'axios';
import * as actions from './contacts-actions';
axios.defaults.baseURL = 'https://62d25304d4eb6c69e7e95a0f.mockapi.io/';

export const fetchContact = () => dispatch => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(actions.fetchContactSuccess(data));
    })
    .catch(error => dispatch(actions.fetchContactError(error)));
};

export const addContact = text => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', text)
    .then(({ data }) => {
      dispatch(actions.addContactSuccess(data));
    })
    .catch(error => dispatch(actions.addContactError(error)));
};
export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
