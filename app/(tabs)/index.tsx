import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { FONT} from '@/constants/Fonts';
import i18n from '@/config/i18n';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("greeting")}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily:FONT.ExtraBoldItalic
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
