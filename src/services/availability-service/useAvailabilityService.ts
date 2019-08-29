import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";

import { CHANGE_AVAILABILITY, FETCH_AVAILABILITIES } from "../../context/actions";
import { GlobalStateContext } from "../../context/StateContext";
import { Availability } from "../../models/Availability";
import { AvailabilitiesEndpoint } from "../endpoints/AvailabilitiesEndpoint";

export const useAvailabilityService = () => {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(GlobalStateContext);

  const populateAvailabilites = ({ data }: AxiosResponse<Availability[]>) => {
    const rawArray = [];
    for (let key of Object.keys(data)) {
      rawArray.push({ id: key, ...data[key as any] });
    }
    dispatch({ type: FETCH_AVAILABILITIES, data: rawArray });
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
      .then(() => {
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
    // eslint-disable-next-line
  }, []);

  return { loading, updateAvailability };
};
