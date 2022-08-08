import React, {forwardRef} from 'react';
import {View, FlatList} from 'react-native';
import {useForm} from 'react-hook-form';
import Fields from './Fields';
import {yupResolver} from '@hookform/resolvers/yup';
import {useIForm} from './IFormProvider';
import {Button} from '../views/Button';

const VirtualizedList = ({style, children}) => {
  let {isVerticalCenter} = useIForm();
  return (
    <>
      <FlatList
        data={[]}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: isVerticalCenter ? 'center' : 'flex-start',
          flexDirection: 'column',
        }}
        keyExtractor={() => 'key'}
        renderItem={null}
        ListHeaderComponent={<>{children}</>}
        keyboardShouldPersistTaps="handled"
      />
    </>
  );
};
interface InputForm {
  // fieldJSON: any[];
  // data?: {};
  // schema?: any;
  // onSubmitTapped: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // loading?: Boolean;
  // sendData?: () => void;
  // onSubmitSuccess: () => void;
}

const InputForm = forwardRef((props, ref) => {
  const {
    // fieldJSON,
    // data = undefined,
    // schema = undefined,
    // onSubmitTapped,
    // loading,
    // sendData,
    // imageLoader = undefined,
    // otherUserId = undefined,
  } = props;

  let {formData, schema, submit, spaceInFields, onSubmitFormData} = useIForm();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitSuccessful},
    getValues,
  } = useForm({
    defaultValues: {},
    mode: 'onChange',
    // resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({something: ''});
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = () => {
    let values = getValues();
    console.log('submit button tapped');

    onSubmitFormData(values);
  };

  return (
    <VirtualizedList style={{flex: 1, backgroundColor: 'green'}}>
      {formData &&
        formData.map((object, index) => {
          if (!object.hidden) {
            return (
              <View
                style={{
                  flex: 1,
                }}>
                <Fields
                  key={index}
                  object={object}
                  control={control}
                  // sendData={sendData}
                  // imageLoader={imageLoader}
                />
                {spaceInFields && <View style={{height: 40}}></View>}
              </View>
            );
          } else {
            return <></>;
          }
        })}

      {submit == true && (
        <Button
          mode="outlined"
          // loading={loading}
          onPress={handleSubmit(onSubmit)}>
          SUBMIT
        </Button>
      )}
    </VirtualizedList>
  );
});

export default InputForm;

const styles = {
  input: {
    // backgroundColor: "white",
    color: 'black',
  },
};
