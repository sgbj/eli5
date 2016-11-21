import Dispatcher from '../dispatcher/appdispatcher';
import AppConstants from '../constants/appconstants';

export default EntryActions = {
  createEntry: entry => {
    // TODO: create entry
    Dispatcher.dispatch({
      actionType: AppConstants.CREATE_ENTRY,
      entry
    });
  }
};
