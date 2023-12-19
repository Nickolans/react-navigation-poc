import {View} from 'react-native';
import {SimpleButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../types/Navigation';

export function TabScreen1() {
  const navigation = useNavigation<Navigation>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 15,
        padding: 15,
      }}>
      <SimpleButton
        text="Default"
        onPress={() => {
          navigation.navigate('/example-default');
        }}
      />
      <SimpleButton
        text="Fade"
        onPress={() => {
          navigation.navigate('/example-fade');
        }}
      />
      <SimpleButton
        text="Push"
        onPress={() => {
          navigation.navigate('/example-push');
        }}
      />
      <SimpleButton
        text="Slide From Right"
        onPress={() => {
          navigation.navigate('/example-slide-from-right');
        }}
      />
      <SimpleButton
        text="Slide From Bottom"
        onPress={() => {
          navigation.navigate('/example-slide-from-bottom');
        }}
      />
      <SimpleButton
        text="No Animation"
        onPress={() => {
          navigation.navigate('/example-none');
        }}
      />
    </View>
  );
}
