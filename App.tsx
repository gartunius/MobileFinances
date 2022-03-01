import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

export default function App() {

  const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white'}}>HOME</Text>
    </Layout>
  )

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <HomeScreen></HomeScreen>
    </ApplicationProvider>
  );
}