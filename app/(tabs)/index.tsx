import { StyleSheet } from 'react-native';
import { Link, Href } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { HomeMenu } from '@/components/HomeMenu/HomeMenu';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href={"/list/1" as Href}>Link One</Link>
      <Link href={"/list/2" as Href}>Link two</Link>
      <Link href={"/list/3" as Href}>Link three</Link>
      <HomeMenu />
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
