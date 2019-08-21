import axios, { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";

import {
  CHANGE_AVAILABILITY,
  FETCH_AVAILABILITIES
} from "../../context/actions";
import { GlobalStateContext } from "../../context/StateContext";
import { Availability } from "../../models/Availability";
import { WeekStatus } from "../../models/WeekStatus";
import { AvailabilitiesEndpoint } from "../endpoints/AvailabilitiesEndpoint";

interface Options {
  rawAvailabilities: Availability[]; // duplicated state, remove it afterwards
}

export const useAvailabilityService = () => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<Options>({ rawAvailabilities: [] });
  const { state, dispatch } = useContext(GlobalStateContext);

  const populateAvailabilites = ({ data }: AxiosResponse<Availability[]>) => {
    const rawArray = [];
    for (let key of Object.keys(data)) {
      rawArray.push({ id: key, ...data[key as any] });
    }
    dispatch({ type: FETCH_AVAILABILITIES, data: rawArray });
    //setOptions({ rawAvailabilities: data });
  };

  const updateAvailability = (availabilityToUpdate: Availability) => {
    let foundPerson = state.availabilityArray.find(
      element => element.personName === availabilityToUpdate.personName
    );

    const index = foundPerson!.availabilities.findIndex(
      availability =>
        availability.week === availabilityToUpdate.availabilities![0].week
    );

    if (index === -1) {
      foundPerson!.availabilities.push(availabilityToUpdate.availabilities![0]);
    } else {
      foundPerson!.availabilities[
        index
      ].status = availabilityToUpdate.availabilities![0].status;
    }

    const newData: Availability[] = state.availabilityArray.map(element => {
      if (element.personName === foundPerson!.personName) {
        element = { ...foundPerson! };
      }
      return element;
    });

    // SEND UPDATE REQUEST
    AvailabilitiesEndpoint.updateAvailability(
      availabilityToUpdate.id,
      newData.find(e => e.id === availabilityToUpdate.id)!.availabilities
    )
      .then(response => {
        dispatch({
          type: CHANGE_AVAILABILITY,
          data: newData
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    Promise.all([
      AvailabilitiesEndpoint.getAll().then(populateAvailabilites)
    ]).then(() => setLoading(false));
  }, []);

  return { options, loading, updateAvailability };
};
