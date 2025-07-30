import { Text, TouchableOpacity } from "react-native";

type ButtonComponentType = {
  title: string;
  onPress?: () => void;
}

export function ButtonComponent(props: ButtonComponentType) {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: "#146a6dff",
        borderRadius: 10
      }}
      onPress={props.onPress}
    >
      <Text style={{
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 16,
        paddingVertical: 8
      }}>{props.title}</Text>
    </TouchableOpacity>
  )
}