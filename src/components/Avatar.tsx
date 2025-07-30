import { Image, StyleProp, Text, View, ViewStyle } from "react-native";

type AvatarType = {
  uri: string;
  name: string;
  login: string;
  style?: StyleProp<ViewStyle>
}

export function AvatarComponent(props: AvatarType) {
  return (
    <View style={{alignItems: "center"}}>
        <View style={{
          borderWidth: 4,
          borderColor: "gray",
          borderRadius: 100,
          padding: 4
        }}>
          <Image
            source={{ uri: props.uri }}
            width={150} height={150}
            style={{
              borderRadius: 100,
            }}
          />
        </View>
          <Text style={{
            fontSize: 24,
            fontWeight: 500
          }}>{props.name}</Text>
          <Text style={{
            fontSize: 17,
            fontWeight: 500
          }}>@{props.login}</Text>
      </View>



)
}