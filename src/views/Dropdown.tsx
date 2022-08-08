import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {useColor, useStyle} from '../../support/Style';

const Dropdown = props => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(props.value);
  let style = useStyle();
  let color = useColor();

  const selectItem = item => {
    setSelected(item.label);
    setVisible(false);
    props.selectedCallback(item);
  };
  let titleToDisplay = selected ? selected : props.label ? props.label : '';
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (props.enabled) setVisible(!visible);
        }}>
        <View style={styles.selectedContainer}>
          <Text
            style={[
              {fontSize: 16},
              props.enabled ? {color: color.textColor} : {color: 'white'},
              titleToDisplay ? {color: 'white'} : {color: 'gray'},
            ]}>
            {titleToDisplay ? titleToDisplay : props.placeholder}
          </Text>
          <FIcon
            name={visible ? 'angle-down' : 'angle-right'}
            color={color.textColor}
            size={24}
          />
        </View>
      </TouchableOpacity>

      {visible ? (
        <View style={styles.selectionContainer}>
          <ScrollView nestedScrollEnabled>
            {props?.options?.map(item => {
              console.log(item);
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    selectItem(item);
                  }}>
                  <View style={{width: '100%'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        marginVertical: 18,
                        color: color.textColor,
                      }}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  selectedContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    // borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  selectionContainer: {
    backgroundColor: 'black',
    width: '100%',
    minHeight: 100,
    maxHeight: 300,
    borderColor: 'gray',
    borderWidth: 1,
    // borderRadius: 16,
    marginTop: 0,
    paddingHorizontal: 18,
    paddingVertical: 4,
  },
});
export default Dropdown;
