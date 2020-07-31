export function renderStateTitle(state, val) {
  return state.stateName.toLowerCase().indexOf(val.toLowerCase()) !== -1;
}
