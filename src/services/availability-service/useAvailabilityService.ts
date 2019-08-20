import axios, { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";

import { CHANGE_AVAILABILITY, FETCH_AVAILABILITIES } from "../../context/actions";
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
  const { dispatch } = useContext(GlobalStateContext);

  const populateAvailabilites = ({ data }: AxiosResponse<Availability[]>) => {
    const rawArray = [];
    for (let key of Object.keys(data)) {
      rawArray.push({ id: key, ...data[key as any] });
    }
    dispatch({ type: FETCH_AVAILABILITIES, data: rawArray });
    //setOptions({ rawAvailabilities: data });
  };

  const updateAvailability = (availability: Availability) => {
    AvailabilitiesEndpoint.updateAvailability(
      availability.id,
      availability.availabilities
    )
      .then(response => {
        dispatch({
          type: CHANGE_AVAILABILITY,
          name: availability
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
