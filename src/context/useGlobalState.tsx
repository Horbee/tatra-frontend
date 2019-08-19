import { useReducer } from "react";

import { Availability } from "../models/Availability";
import { GlobalActionTypes, SET_AVAILABILITY as CHANGE_AVAILABILITY } from "./actions";

export interface IGlobalState {
  availabilityArray: Availability[];
  votes: [number, number, number][];
}

const getVotes = (
  availabilityArray: Availability[]
): [number, number, number][] => {
  const result: Array<[number, number, number]> = [];

  for (let index = 0; index < 8; index++) {
    result.push([0, 0, 0]);
  }

  for (let availability of availabilityArray) {
    availability.availabilities.forEach(element => {
      let innerIndex = 1; // Maybe

      if (element.status === 1) {
        innerIndex = 2; // Good
      } else if (element.status === 2) {
        innerIndex = 0; // Not Good
      }

      result[element.week][innerIndex]++;
    });
  }

  return result;
};

export const useGlobalState = () => {
  const initialState: IGlobalState = {
    availabilityArray: [
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
    ],
    votes: []
  };

  const reducer = (
    prevState: IGlobalState,
    action: GlobalActionTypes
  ): IGlobalState => {
    switch (action.type) {
      case CHANGE_AVAILABILITY:
        let foundPerson = prevState.availabilityArray.find(
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

        const newData: Availability[] = prevState.availabilityArray.map(
          element => {
            if (element.personName === foundPerson!.personName) {
              element = foundPerson!;
            }
            return element;
          }
        );

        return {
          ...prevState,
          availabilityArray: newData,
          votes: getVotes(newData)
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  };
};
