import React from 'react';
import { LogBox } from 'react-native';
import MainStack from './src/navigation/MainStack';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <MainStack />
  );
}