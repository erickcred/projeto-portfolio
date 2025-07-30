import { Button, Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { GetUserGitRepos, GithubReposType } from "../../services/github-api-service";
import { useState } from "react";
import { ButtonComponent } from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";

export function GithubScreen() {
  const [gitRepos, setGitRepos] = useState([] as GithubReposType[]);

  const handleShowRepositories = async () => {
    const data = await GetUserGitRepos() as GithubReposType[];
    setGitRepos(data)
  }

  const handleTargetRepository = async (url: string) => {

    Linking.openURL(url).catch(err => console.error("Erro ao abrir o URL: ", err));
  }
    

  return (
    <View style={styles.container}>
      <ButtonComponent
        title="Pesquisa repositorios"
        onPress={handleShowRepositories}
      />
      <ScrollView style={{gap: 10, height: "80%"}}>
        <View style={{flex: 1, gap: 20}}>
          { gitRepos.length > 0 ?
            gitRepos.map((repo) => (
              <View 
                key={repo.id}
                style={{
                  backgroundColor: "#20657aff",
                  borderRadius: 8,
                  position: "relative",
                  // display: repo.description ? "flex" : "none",
                  minHeight: 100,
                }}>
                <Text
                  style={{
                    color: "white",
                    paddingTop: 10,
                    fontSize: 20,
                    textAlign: "center"
                  }}
                  >{repo.name}
                </Text>

                <Text style={{
                  color: "#ffffff",
                  paddingTop: 10,
                  marginBottom: 20,
                  paddingHorizontal: 20,
                  fontSize: 16,
                  textAlign: "justify"
                }}>{repo.description ?? "Sem Descrição"}</Text>

                <Text style={{
                  color: "#ffffff",
                  paddingTop: 10,
                  marginBottom: 20,
                  paddingHorizontal: 20,
                  fontSize: 16,
                  textAlign: "justify"
                }}><Text>Stack: </Text>{repo.language}</Text>

                <TouchableOpacity
                  style={{
                    position: "relative",
                    bottom: 0,
                    backgroundColor: "#0e4e50ff",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginBottom: 10,
                  }}
                  onPress={() => (handleTargetRepository(repo.html_url))}
                >
                  <Text style={{color: "#ffffff", fontSize: 17, textAlign: "center"}}>Ir para repository</Text>
                </TouchableOpacity>
              </View>
            ))
            :
            <Text style={{fontSize: 16, textAlign: "center"}}>Sem dados para mostrar no momento! Por favor clique em Pesquisa repositorios</Text>
          }

        </View>
      </ScrollView>
    </View>
  )
}