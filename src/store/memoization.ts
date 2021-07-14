import { createSelector } from 'reselect'

export const memoization = (data:any) => createSelector(
  data,
  (data) => {
    if (!data) {
      return [];
    }

    return data;
  }
)
