import { Text, TouchableOpacity } from "react-native";
import { Loading } from "./loading";

type Props = {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
    >
      {isLoading ? (
        <Loading color="green" size={24}/>
      ) : (
        <Text className="text-green-500 text-base font-bold uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
