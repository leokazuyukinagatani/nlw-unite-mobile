import { ActivityIndicator } from "react-native";
import clsx from "clsx";

type Props = {
  size?: number;
  color?: "green" | "orange" | "white" | "red";
};
export function Loading({ size = 48, color = "orange" }: Props) {
  const indicatorColor = color === "white" ? "white" : color;

  const indicatorClassName = clsx({
    "text-green-500": indicatorColor === "green",
    "text-orange-500": indicatorColor === "orange",
    "text-white": indicatorColor === "white",
    "text-red-500": indicatorColor === "red",
  });
  
  return (
    <ActivityIndicator
      size={size}
      className={clsx(
        "flex-1 bg-transparent items-center justify-center",
        indicatorClassName
      )}
    />
  );
}
