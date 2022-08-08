import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Appearance,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDatePickerStyle } from "./style";
import moment from "moment";
// import { Appearance } from "react-native-appearance";

enum DateTimePickerType {
  FROM_TO_DATE = "FROM_TO_DATE",
  FROM_TO_TIME = "FROM_TO_TIME",
  DATE_TIME = "DATE_TIME",
  DATE = "DATE",
  TIME = "TIME",
}

const RenderInput = ({ label, value, onPress }) => {
  const styles = useDatePickerStyle();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>
          {"  "}
          {label}
          {"  "}
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{}}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.inputTextStyle}
          >
            {value}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
interface DatePickerProps {
  mode: string;
  value: string;
  onChange: () => void;
  rangeValueExist: {};
  minimumDate: string;
  maximumDate: string;
  label: string;
}
export default memo<DatePickerProps>(function DatePicker({
  mode,
  value,
  onChange,
  rangeValueExist,
  minimumDate,
  maximumDate,
  label,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [pickerType, setPickerType] = useState(undefined);
  const [pickerNumber, setPickerNumber] = useState(undefined);
  const [rangeValue, setRangeValue] = useState(rangeValueExist);
  const [displayDate, setDisplayDate] = useState(undefined);
  const colorScheme = Appearance.getColorScheme();
  const isDarkModeEnabled = colorScheme === "dark" ? true : false;

  let style = useDatePickerStyle();
  useEffect(() => {
    if (rangeValue) {
      onChange(rangeValue);

      // if(pickerNumber == 1) {

      // }
      // let dates  = {startDate:moment(rangeValue['startDate'], 'YYYY-MM-DD').toDate() , endDate: moment(str, 'YYYY-MM-DD').toDate()}
      // setDisplayDate()
    }
  }, [rangeValue]);

  const showDatePicker = (type, number) => {
    setPickerType(type);
    setPickerNumber(number);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);

    // let formattedDate = date.toDateString();
    // setSelectedDate(formattedDate);
    if (pickerNumber == "1") {
      if (pickerType == "date") {
        setRangeValue({
          ...rangeValue,
          startDate: moment(date).format("DD/MM/yyyy"),
          endDate: moment(date).format("hh:mm"),
        });
      }
      if (pickerType == "time") {
        setRangeValue({
          ...rangeValue,
          // startDate: rangeValue?.startDate
          //   ? rangeValue.startDate
          //   : moment(date).format("DD/MM/yyyy"),
          endDate: moment(date).format("hh:mm"),
        });
      }
    }
    if (pickerNumber == "2") {
      if (pickerType == "date") {
        setRangeValue({
          ...rangeValue,
          startDate: moment(date).format("DD/MM/yyyy"),
          endDate: moment(date).format("DD/MM/yyyy"),
        });
      }
      if (pickerType == "time") {
        setRangeValue({
          ...rangeValue,
          // startDate: moment(date).format("DD/MM/yyyy"),
          endDate: moment(date).format("hh:mm"),
        });
      }
    }
    console.log("pickerNumber ==>", pickerNumber);
    console.log("pickertype ==>", pickerType);
    console.log("rangeValue ==>", rangeValue);
    hideDatePicker();
  };

  const fromDateToDate = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%" }}>
          <RenderInput
            label={"From Date"}
            onPress={() => showDatePicker("date", "1")}
            value={selectedDate}
          />
        </View>
        <View style={{ width: "48%" }}>
          <RenderInput
            label={"To Date"}
            onPress={() => showDatePicker("date", "2")}
            value={selectedDate}
          />
        </View>
      </View>
    );
  };

  const fromTimeToTime = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%" }}>
          <RenderInput
            label={"From Date"}
            onPress={() => showDatePicker("date", "1")}
            value={selectedDate}
          />
        </View>
        <View style={{ width: "48%" }}>
          <RenderInput
            label={"To Date"}
            onPress={() => showDatePicker("date", "2")}
            value={selectedDate}
          />
        </View>
      </View>
    );
  };
  const dateAndTime = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%" }}>
          <RenderInput
            label={label}
            onPress={() => showDatePicker("date", "1")}
            value={rangeValue && rangeValue["startDate"]}
          />
        </View>
        <View style={{ width: "48%" }}>
          <RenderInput
            label={"Time"}
            onPress={() => showDatePicker("time", "2")}
            value={rangeValue && rangeValue["endDate"]}
          />
        </View>
      </View>
    );
  };

  const onlyDate = () => {
    return (
      <View>
        <RenderInput
          label={"Date"}
          onPress={() => showDatePicker("date", "1")}
          value={selectedDate}
        />
      </View>
    );
  };

  const onlyTime = () => {
    return (
      <View>
        <RenderInput
          label={"Date"}
          onPress={() => showDatePicker("time", "1")}
          value={selectedDate}
        />
      </View>
    );
  };

  const renderSwitch = (mode) => {
    switch (mode) {
      case DateTimePickerType.FROM_TO_DATE: {
        return fromDateToDate();
      }
      case DateTimePickerType.FROM_TO_TIME: {
        return fromTimeToTime();
      }
      case DateTimePickerType.DATE_TIME: {
        return dateAndTime();
      }
      case DateTimePickerType.DATE: {
        return onlyDate();
      }
      case DateTimePickerType.TIME: {
        return onlyTime();
      }
    }
  };

  console.log("rangeValue11", rangeValue);
  console.log("value11", value);

  return (
    <View style={{ paddingTop: 20 }}>
      {renderSwitch(mode)}
      <DateTimePickerModal
        isDarkModeEnabled={isDarkModeEnabled}
        isVisible={isDatePickerVisible}
        mode={pickerType == "date" ? "date" : "time"} // date/ datetime /time
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={
          pickerNumber == "1"
            ? rangeValue
              ? moment(rangeValue["startDate"], "DD/MM/yyyy").toDate()
              : value
              ? new Date()
              : new Date()
            : rangeValue
            ? moment(rangeValue["endDate"], "hh:mm").toDate()
            : value
            ? new Date()
            : new Date()
        }
        // minimumDate={
        //   rangeValue && pickerNumber === "2"
        //     ? rangeValue["startDate"]
        //     : minimumDate
        // }
        // minimumDate={
        //   pickerType === "endAt"
        //     ? rangeValues.startAt
        //     : pickerType === "startAt"
        //     ? undefined
        //     : restProps.minimumDate
        // }
        // date={
        //   value
        //   //  ||
        //   //   value ||
        //   //   initialValue
        // }
      />
    </View>
  );
});
