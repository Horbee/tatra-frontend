import React from "react";

import { useGlobalState } from "./useGlobalState";

export const GlobalStateContext = React.createContext<
  ReturnType<typeof useGlobalState>
>(undefined as any);
