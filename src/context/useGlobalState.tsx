import { useReducer } from "react";

import { Availability } from "../models/Availability";
import { GlobalActionTypes, SET_AVAILABILITY as CHANGE_AVAILABILITY } from "./actions";

export interface IGlobalState {
  data: Availability[];
}

export const useGlobalState = () => {
  const initialState: IGlobalState = {
    data: [
      {
        personName: "Peter",
        availabilities: [{ week: 1, status: 1 }, { week: 0, status: 2 }]
      },
      {
        personName: "Dora",
        availabilities: [{ week: 0, status: 2 }, { week: 1, status: 1 }]
      },
      {
        personName: "Norbi",
        availabilities: [{ week: 2, status: 1 }, { week: 3, status: 2 }]
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
          element => element.personName === action.name.personName
        );

        const index = foundPerson!.availabilities.findIndex(
          availability =>
            availability.week === action.name.availabilities[0].week
        );

        if (index === -1) {
          foundPerson!.availabilities.push(action.name.availabilities[0]);
        } else {
          foundPerson!.availabilities[index].status =
            action.name.availabilities[0].status;
        }

        const newData: Availability[] = prevState.data.map(element => {
          if (element.personName === foundPerson!.personName) {
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
