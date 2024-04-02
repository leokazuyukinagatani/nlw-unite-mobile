import { ActivityIndicator } from "react-native";

export function Loading({size = 48}) {
  return (
    <ActivityIndicator size={size} className="flex-1 bg-green-500 items-center justify-center text-orange-500" />
  );
}
