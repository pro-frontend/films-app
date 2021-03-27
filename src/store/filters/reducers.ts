const initialState = {
  movies: [
    {
      id: 1,
    },
  ],
  currentFilter: "All",
};

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTER":
      return {
        ...state,
        currentFilter: payload,
      };

    default:
      return state;
  }
};
