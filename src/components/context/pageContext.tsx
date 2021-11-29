import React, { createContext, Dispatch, useContext, useReducer } from "react";

type State = {
  unmountAnimation: boolean;
  nowSlide: number;
};

type Action =
  | { type: "SET_ANIMATION"; state: boolean }
  | { type: "SET_NOWSLIDE"; state: number };

type SampleDispatch = Dispatch<Action>;

export const StateCtx = createContext<State | null>(null);
export const DispatchCtx = createContext<SampleDispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ANIMATION":
      return {
        ...state,
        unmountAnimation: action.state,
      };
    case "SET_NOWSLIDE":
      return {
        ...state,
        nowSlide: action.state,
      };
    default:
      throw new Error("Unhandled Action");
  }
};

const initialState: State = {
  unmountAnimation: false,
  nowSlide: 0,
};

export default function SampleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateCtx.Provider value={state}>
      <DispatchCtx.Provider value={dispatch}>{children}</DispatchCtx.Provider>
    </StateCtx.Provider>
  );
}

export const useSampleState = () => {
  const state = useContext(StateCtx);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
};

export const useSampleDispatch = () => {
  const dispatch = useContext(DispatchCtx);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
};
