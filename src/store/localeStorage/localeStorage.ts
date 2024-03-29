export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state:any) => {
  try {
    const serializedState =  JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    //...
  }
}
