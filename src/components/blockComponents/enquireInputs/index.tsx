import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import AppInput from '../../baseComponents/AppInput';
import AppButtonCenterText from '../../baseComponents/appButtonCenterText';
import {isFieldEmpty} from '../../../utilities/utils';
import {formData} from './constants';
import {validateEmail, validatePhone} from '../../../utilities/validations';

type Props = {
  onPress: (data: any) => void;
};
const EnquireInputs = ({onPress}: Props) => {
  const [form, setForm] = useState(formData);

  const updateForm = (data: any) => setForm({...data});
  const {name, phone, mail} = form;

  const validate = () => {
    let flag = true;
    if (isFieldEmpty(name.label)) [name.isValid, flag] = [false, false];
    if (!validatePhone(phone.label)) [phone.isValid, flag] = [false, false];
    if (!validateEmail(mail.label)) [mail.isValid, flag] = [false, false];
    updateForm(form);
    return flag;
  };

  const submit = () => {
    if (validate()) {
      onPress(form);
    }
  };
  const setName = (value: string) => {
    name.label = value;
    name.isValid = true;
    updateForm(form);
  };
  const setPhone = (value: string) => {
    phone.label = value;
    phone.isValid = true;
    updateForm(form);
  };
  const setEmail = (value: string) => {
    mail.label = value;
    mail.isValid = true;
    updateForm(form);
  };
  return (
    <View style={styles.box}>
      <View style={styles.labelBox}>
        <AppText style={styles.label}>
          JetSteals, grants you the opportunity to enjoy the luxury and
          convenience of flying private at commercial prices.
        </AppText>
      </View>
      <View style={styles.inputContainers}>
        <AppInput
          style={[styles.input, !name.isValid && styles.error] as ViewStyle}
          onChangeText={setName}
          placeholder="Your Name"
        />
        <AppInput
          keyboardType="phone-pad"
          style={[styles.input, !phone.isValid && styles.error] as ViewStyle}
          onChangeText={setPhone}
          placeholder="Phone"
          limit={10}
        />
        <AppInput
          style={[styles.input, !mail.isValid && styles.error] as ViewStyle}
          onChangeText={setEmail}
          placeholder="Email"
        />
      </View>
      <AppButtonCenterText
        buttonStyle={styles.button}
        labelStyle={styles.labelStyle}
        label="Enquire Now"
        onPress={submit}
      />
    </View>
  );
};

export default EnquireInputs;
