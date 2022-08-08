import React, {useMemo, useReducer, useContext, createContext} from 'react';

//IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
import reducer, {initialState} from './IFormReducer';

const IFormContext = createContext({});

function IFormProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState || {});

  const sendFieldsDataBackToFormWhileEditing = async (name, value) => {
    await dispatch({type: 'UPDATE_FIELDS', name: name, value: value});
  };

  const onSubmitFormData = async data => {
    props.onSubmitTapped(data);
    await dispatch({type: 'SUBMIT_FORM', formData: data});
  };

  const updateFormData = async data => {
    await dispatch({type: 'UPDATE_FORM', formData: data});
  };

  const resetFormData = async () => {
    await dispatch({type: 'RESET_FORM', formData: undefined});
  };

  const value = useMemo(() => {
    return {
      formData: props?.options?.json,
      schema: props.options?.schema && props.options?.schema,
      submit: props.options?.submit && props.options?.submit,
      spaceInFields:
        props.options?.spaceInFields && props.options?.spaceInFields,
      isVerticalCenter:
        props.options?.isVerticalCenter && props.options?.isVerticalCenter,
      outlined: props.options?.outlined && props.options?.outlined,
      sendFieldsDataBackToFormWhileEditing,
      onSubmitFormData,
      updateFormData,
      resetFormData,
    };
  }, [state]);

  return (
    <IFormContext.Provider value={value}>
      {props.children}
    </IFormContext.Provider>
  );
}

const useIForm = () => useContext(IFormContext);
export {IFormContext, useIForm};
export default IFormProvider;
