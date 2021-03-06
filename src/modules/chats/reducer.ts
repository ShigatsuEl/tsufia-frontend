import produce from 'immer';
import { createReducer } from 'typesafe-actions';

import {
  CREATE_CHATS,
  GET_CHATS,
  RESET_CHATS,
  UPDATE_CHATS_ERROR,
  UPDATE_CHATS_LOADING,
} from '@chats/actions';
import { ChatsAction, ChatsState } from '@chats/types';

const initialState = {
  loading: false,
  error: undefined,
  data: undefined,
};

const chats = createReducer<ChatsState, ChatsAction>(initialState, {
  [UPDATE_CHATS_LOADING]: (state) => ({
    ...state,
    loading: !state.loading,
  }),
  [UPDATE_CHATS_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [GET_CHATS]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [CREATE_CHATS]: (state, action) =>
    produce(state, (draft) => {
      draft.data?.push(action.payload);
    }),
  [RESET_CHATS]: (state) => ({
    ...state,
    data: undefined,
  }),
});

export default chats;
