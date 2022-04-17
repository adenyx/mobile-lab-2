import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrenciesCodes } from '../../core/utils';
import UserActions from '../../store/reducers/user/actions';

import SettingsView from './SettingsView';

const SettingsContainer = props => {
  const dispatch = useDispatch();

  const currencies = useSelector(store => store.currencies.currenciesList);
  const userCurrency = useSelector(store => store.user.userCurrency);

  const [isCurrencyPickerOpened, setCurrencyPickerOpened] = useState(false);
  const [value, setValue] = useState(userCurrency);

  const saveSettings = () => {
    dispatch(UserActions.editUserCurrency(value));
    props.navigation.goBack();
  };

  return (
    <SettingsView
      /**
       * Options
       */
      value={value}
      currencies={getCurrenciesCodes(currencies)}
      isCurrencyPickerOpened={isCurrencyPickerOpened}
      /**
       * Methods
       */
      setValue={setValue}
      saveSettings={saveSettings}
      setCurrencyPickerOpened={setCurrencyPickerOpened}
    />
  );
};

export default SettingsContainer;
