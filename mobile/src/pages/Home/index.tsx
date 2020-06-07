import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// import RNPickerSelect from "react-native-picker-select";
// import axios from "axios";

// interface IBGEUFResponse {
//   sigla: string;
// }

// interface IBGECityResponse {
//   nome: string;
// }

// interface UFs {
//   sigla: string;
// }

const Home: React.FC = () => {
  // const [ufs, setUfs] = useState<string[]>([]);
  // const [cities, setCities] = useState<string[]>([]);

  // const [selectedUf, setSelectedUf] = useState("0");
  // const [selectedCity, setSelectedCity] = useState("0");

  const navigation = useNavigation();

  // useEffect(() => {
  //   axios
  //     .get<IBGEUFResponse[]>(
  //       "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
  //     )
  //     .then((response) => {
  //       const ufInitials = response.data.map((uf) => uf.sigla);

  //       setUfs(ufInitials);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (selectedUf === "0") {
  //     return;
  //   }

  //   axios
  //     .get<IBGECityResponse[]>(
  //       `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`
  //     )
  //     .then((response) => {
  //       const cityNames = response.data.map((city) => city.nome);

  //       setCities(cityNames);
  //     });
  // }, [selectedUf]);

  function handleNavigateToPoints() {
    navigation.navigate("Points");
  }

  // function handleSelectUf(e: ChangeEvent<HTMLSelectElement>) {
  //   const uf = e.target.value;

  //   setSelectedUf(uf);
  // }

  // function handleSelectCity(e: ChangeEvent<HTMLSelectElement>) {
  //   const city = e.target.value;

  //   setSelectedCity(city);
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <Text style={styles.title}>
            Seu marketplace de coleta de resíduos.
          </Text>
          <Text style={styles.description}>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </Text>
        </View>

        <View style={styles.footer}>
          {/* <RNPickerSelect
            onValueChange={(uf) => setSelectedUf(uf)}
            style={formStyles}
            value={selectedUf}
            items={ label: ufs. }
            
          />

          <RNPickerSelect
            onValueChange={(city) => setSelectedCity(city)}
            style={formStyles}
            value={selectedCity}
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" },
            ]}
          /> */}

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const formStyles = StyleSheet.create({
  inputAndroid: {
    height: 60,
    backgroundColor: "#fff",
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    marginBottom: 8,
    paddingHorizontal: 24,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Home;
