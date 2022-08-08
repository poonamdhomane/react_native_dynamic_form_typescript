import React from 'react';

// import { User } from 'realm';

export const initialState = {
  //   isLoggedIn: false,
  //   user: null,
  //   isLoader: false,
  formData: undefined,
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELDS':
      let selectedValue = action.value;
      let obj = {};
      if (action.name == 'activityPhoto') {
        obj = {
          base64: selectedValue.data,
          type: selectedValue.mime,
        };
      } else {
        obj = selectedValue;
      }

      return {
        // ...prevState,
        formData: state.formData ? [...state.formData, obj] : [obj],
      };

    case 'SUBMIT_FORM':
      return {
        // ...prevState,
        formData: undefined,
      };

    case 'UPDATE_FORM':
      return {
        // ...prevState,
        formData: action.currentFormData,
      };

    case 'RESET_FORM': {
      return {...initialState};
    }
  }
}
