export const screenSizeChange = ({
  e,
  dispatch,
}: {
  e: MediaQueryListEvent;
  dispatch: any;
}) => {
  const matches = e.matches;
  dispatch({
    type: "SET_MQUERY",
    state: matches,
  });
};
