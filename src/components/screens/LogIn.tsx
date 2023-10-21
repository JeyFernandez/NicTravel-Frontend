import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Dimensions, useWindowDimensions, ScaledSize, StatusBar } from "react-native";

import SignInForm from "../organisms/SignInForm";
import Button from "../molecules/Button";
import AvoidKeyboard from "../../hooks/AvoidKeyboard";

interface Props {
  navigation: any
}

const LogIn = ({ navigation }: Props): JSX.Element => {

  //const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState<string>(
    window.height >= window.width ? 'portrait' : 'landscape'
  );

  useEffect(() => {
    const onChange = ( screen: any ) => {
      //setScreenData(screen);
      const newOrientation = screen.height >= screen.width ? 'portrait' : 'landscape';
      if(newOrientation !== orientation) {
        setOrientation(newOrientation);
      }
    }

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, [orientation]);

  useEffect(() => {
    //console.log(orientation);
    if (orientation === 'landscape') {
      StatusBar.setHidden(true);
    } else {
      StatusBar.setHidden(false);
    }
  }, [orientation]);

  return(
    <AvoidKeyboard>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} />
        <SignInForm navigation={navigation} />
        <Button 
          type="link" 
          title="Explora NicTravel"
          onClick={() => navigation.navigate('Tabs')}
        />
      </View>
    </AvoidKeyboard>
  );
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    height: 740, //This sould be % for the devices's different dimensions
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});