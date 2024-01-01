import { Image, ImageStyle } from "expo-image";
import Animated from "react-native-reanimated";
import { StyleProp } from "react-native";

export interface ImageProps {
  url: string;
  blurHash: string;
  style: StyleProp<ImageStyle>
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

export const ImageComponent = ({ url, blurHash, style }: ImageProps) => {
  return (
    <AnimatedImage
      source={{ uri: url }}
      style={style}
      recyclingKey={url}
      placeholder={blurHash}
      transition={150}
      cachePolicy="memory"
      sharedTransitionTag={`sharedImage-${url}`}
    />
  );
};
