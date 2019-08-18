import { useReducer } from "react";

import { Name } from "../models/Names";
import { GlobalActionTypes, SET_AVAILABILITY as CHANGE_AVAILABILITY } from "./actions";

export interface IGlobalState {
  data: Name[];
}

export const useGlobalState = () => {
  const initialState: IGlobalState = {
    data: [
      {
        name: "Peter",
        availabilities: [
          { week: 1, availability: 1 },
          { week: 0, availability: 2 }
        ]
      },
      {
        name: "Dora",
        availabilities: [
          { week: 0, availability: 2 },
          { week: 1, availability: 1 }
        ]
      },
      {
        name: "Norbi",
        availabilities: [
          { week: 2, availability: 1 },
          { week: 3, availability: 2 }
        ]
      }
    ]
  };

  const reducer = (
    prevState: IGlobalState,
    action: GlobalActionTypes
  ): IGlobalState => {
    switch (action.type) {
      case CHANGE_AVAILABILITY:
        let foundPerson = prevState.data.find(
          element => element.name === action.name.name
        );

        const index = foundPerson!.availabilities.findIndex(
          availability =>
            availability.week === action.name.availabilities[0].week
        );

        if (index === -1) {
          foundPerson!.availabilities.push(action.name.availabilities[0]);
        } else {
          foundPerson!.availabilities[index].availability =
            action.name.availabilities[0].availability;
        }

        const newData: Name[] = prevState.data.map(element => {
          if (element.name === foundPerson!.name) {
            element = foundPerson!;
          }
          return element;
        });
        return { ...prevState, data: newData };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  };
};
