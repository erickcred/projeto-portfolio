import { Alert, Button, Image, Linking, Text, View } from "react-native";
import { useState } from "react";

import { styles } from "../Styles";
import { GetUserGit, GithubType } from "../services/github-api-service";
import { AvatarComponent } from "../components/Avatar";
import { ButtonComponent } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export function DashboardScreen() {
  const navigator = useNavigation();
  const [github, setGithub] = useState({} as GithubType);
  const maxTentativas = 3;
  let tentativa = 1;

  const buscarDados = async () => {
    for (tentativa = 1; tentativa <= maxTentativas; tentativa++) {
      try {
        const response = await GetUserGit()
        setGithub(response)
        return;
      } catch (error) {
        if (tentativa < maxTentativas) 
          await new Promise(res => setTimeout(res, 2000));
        else {
          Alert.alert("Erro!", `${error}`);
          return;
        }

      }
    } 
  }

  (async () => await buscarDados())();

  const handleTargetLinkedin = async () => {
    const url = "https://br.linkedin.com/in/erick-rick-de-oliveira";

    Linking.openURL(url).catch(err => console.error("Erro ao abrir o URL: ", err));
  }

  const handleTargetEmail = async () => {
    Linking
      .openURL('mailto:erickcredjes@gmail.com?subject=Enviado do App Portfólio&body=Corpo do Email')
      .catch(err => console.error("Erro ao abrir o URL: ", err));
  }

  return (
    <View style={styles.container}>

      <AvatarComponent
        uri={github?.avatar_url ?? ""}
        name={github?.name ?? ""}
        login={github?.login ?? ""}
      />

      <ButtonComponent
        title="Linkedin"
        onPress={handleTargetLinkedin}
      />

      <ButtonComponent
        title="Github"
        onPress={() => navigator.navigate("github")}
      />

      <ButtonComponent
        title="E-mail"
        onPress={handleTargetEmail}
      />
      
    </View>
  )
}