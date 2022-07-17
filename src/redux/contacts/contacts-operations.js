import axios from 'axios';
import * as actions from './contacts-actions';
axios.defaults.baseURL = 'https://62d25304d4eb6c69e7e95a0f.mockapi.io/';

export const fetchContact = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

export const addContact = text => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', text);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};
export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};
