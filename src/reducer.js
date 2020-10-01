const API_KEY = "575456fe083df140f6a932344dd01701";
export const initialState = {
  /* request: `/trending/all/week?api_key=${API_KEY}&language=en-US`, */
  /* title: "Trending now", */
  request: null,
  title: null,
  avatar: null
};


const reducer = (state, action) => {
    console.log("action",action);
  switch (action.type) {
    case "SET_REQUEST":
      return {
        ...state,
        request: action.request
      };
    case "SET_TITLE":
      return {
          ...state,
        title: action.title
      };
    case "SET_AVATAR":
        return {
            ...state,
            avatar: action.title
        }
    default:
      return state;
  }
};

export default reducer;
