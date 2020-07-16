export function StateData() {
  return [
    { title: "Tamil Nadu", shortCode: "TN", id: "tt0111161" },
    { title: "Delhi", shortCode: "DL", id: "tt0068646" },
    { title: "Telugana", shortCode: "TG", id: "tt0071562" },
    { title: "Kerala", shortCode: "KL", id: "tt0110912" },
    { title: "Andra Pradhesh", shortCode: "AP", id: "tt0110912" },
    { title: "Gujarat", shortCode: "GJ", id: "tt0110912" },
    { title: "Maharashtra", shortCode: "MH", id: "tt0110912" },
  ];
}

export function renderStateTitle(state, val) {
  return state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1;
}
