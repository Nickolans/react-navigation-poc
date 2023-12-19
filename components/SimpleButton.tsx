import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

export function SimpleButton({text, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.button}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  text: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
    width: '100%',
    fontWeight: '500',
  },
  button: {
    width: '100%',
    backgroundColor: 'purple',
    borderRadius: 15,
  },
});
