
import React from 'react';
import Routes from './src/routes';
import { View, Text, StatusBar } from 'react-native';



export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Routes/>
    </>
  );
};
