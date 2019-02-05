// types
import { types } from "./types";

export const uiActions = {
    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
    emitError: (error, meta = null) => {
      return {
        type: types.EMIT__ERROR,
        payload: error,
        error: true,
        meta,
      }
    }
};