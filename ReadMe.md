# React Native Dynamic Form From JSON

## Description

A dependency to create basic form using with just single JSON. Which even can return a single json for submission.

## Installation

```
npm install react_native_form_simplified_typescript
                OR
yarn add react_native_form_simplified_typescript
```

## Usage

#### Live code example

```js live=true
import InputForm, {
  IFormProvider,
} from "react_native_form_simplified_typescript";
```

```js live=true
function Example() {
  let options = {
    json: formJson,
    schema: schema,
    outlined: true,
    submit: true,
    spaceInFields: true,
    isVerticalCenter: true,
  };
  const onSubmit = async (data) => {
    Alert.alert("data is", JSON.stringify(data));
  };

  return (
    <View style={{ flex: 1 }}>
      <IFormProvider options={options} onSubmitTapped={onSubmit}>
        <InputForm></InputForm>
      </IFormProvider>
    </View>
  );
}
```

# Example Form JSON

```
const formJson = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    value: null,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    value: null,
  },
];
```
