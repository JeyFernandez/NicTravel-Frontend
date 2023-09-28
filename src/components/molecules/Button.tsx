import { Pressable, StyleSheet } from "react-native";

import CustomText from "../atoms/CustomText";

type ButtonProps = {
  type: 'small' | 'meddium' | 'large' | 'link',
  title: string,
  onClick: Function,
}

const Button = ({ type, title, onClick }: ButtonProps): JSX.Element => {

  const textStyle = styles[type];
  const handleClick = () => {
    if(onClick) {
      onClick()
    }
  }

  return(
    <Pressable style={textStyle} onPress={handleClick}>
      <CustomText text={title} type='body2' />
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  small: {

  },
  meddium: {
    width: 180,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0EC6A2',
    borderRadius: 10,
  },
  large: {

  },
  link: {

  }
});