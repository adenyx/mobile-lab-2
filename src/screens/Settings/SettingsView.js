import React from 'react';
import { View } from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import DropDownPicker from 'react-native-dropdown-picker';

import { Button, Text } from '../../components';

const SettingsView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.currencyText}>Currency:</Text>
      <DropDownPicker
        open={props.isCurrencyPickerOpened}
        value={props.value}
        setValue={props.setValue}
        items={props.currencies}
        setOpen={props.setCurrencyPickerOpened}
      />
      <View style={styles.buttonBlock}>
        <Button value="Save" onPress={props.saveSettings} />
      </View>
    </View>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    padding: 16,
  },
  currencyText: {
    marginBottom: 4,
  },

  buttonBlock: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default SettingsView;
