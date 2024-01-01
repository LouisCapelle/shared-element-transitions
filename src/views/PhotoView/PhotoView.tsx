import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { ImageComponent } from "../../components/Image";

const AnimatedView = Animated.createAnimatedComponent(View);

export const PhotoView = ({ route }) => {
  const { item } = route.params;

  const insets = useSafeAreaInsets();

  return (
    <AnimatedView
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      sharedTransitionTag={`sharedContainer-${item.url}`}
    >
      <ImageComponent
        url={item.url}
        blurHash={item.blurHash}
        style={{ width: "100%", height: 300}}
      />
    </AnimatedView>
  );
};
