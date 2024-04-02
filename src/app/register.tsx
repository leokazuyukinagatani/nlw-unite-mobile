import { Input } from "@/components/input";
import { View, Image } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar style="light" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <FontAwesome6
            name="user-circle"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Nome completo" />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            size={24}
            color={colors.green[200]}
          />
          <Input.Field placeholder="E-mail" keyboardType="email-address"/>
        </Input>
        <Button title="Realizar inscrição" />

        <Link
          href="/"
          className="text-gray-100 text-base font-bold text-center"
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
