import jsonplaceholder from "../apis/jsonplaceholder";


export const fetchPostsAndUser = () => async (dispatch,getState) => {
  await dispatch(fetchPosts());
  const {posts} = getState();
  const userIds = Array.from(new Set(posts.map(x => x.userId)));
  console.log(userIds);
  userIds.forEach(x => dispatch(fetchUser(x)));
}

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonplaceholder.get("/posts?_start=0&_limit=10");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (userId) => async (dispatch, getState) => {
  const response = await jsonplaceholder.get(`/users/${userId}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
