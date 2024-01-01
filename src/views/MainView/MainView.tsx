import { Pressable, View } from "react-native";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { FakeImage, fakeData } from "../../datasets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback } from "react";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { ImageComponent } from "../../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const AnimatedView = Animated.createAnimatedComponent(View);

export const MainView = ({ props }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProps>();

  const renderItem: ListRenderItem<FakeImage> = useCallback(
    ({ item }) => (
      <Pressable
        onPress={() =>
          navigation.navigate("Photo", {
            item,
          })
        }
      >
        <AnimatedView sharedTransitionTag={`sharedContainer-${item.url}`}>
          <ImageComponent
            url={item.url}
            style={{ width: 150, height: 150 }}
            blurHash={item.blurHash}
          />
        </AnimatedView>
      </Pressable>
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: any, i: number) => `${i}-${item.id}`,
    []
  );

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <FlashList
        data={fakeData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={3}
        estimatedItemSize={150}
      />
    </View>
  );
};
