import { Text, View } from "react-native";
import { styles } from "../Styles";
import { ButtonComponent } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export function AboutScreen() {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Text>
        Olá, tudo bom? Me chamo Erick teho 39 anos, sou casado tenho 3 filhas lindas.
      </Text>
      
      <Text>
        Adoro cozinhar com as meninas e assitir animes, brincar, e ficar com minha esposa
      </Text>
      
      <Text style={{fontSize: 20, textAlign: "center", paddingTop: 10, borderTopWidth: 1}}>Desenvolvedor Full Stack C# - .NET / Angular</Text>
      
      <Text>
        Sou entusiasta de tecnologia! Sendo assim, aprender algo novo, caracteriza um desafio e crescimento pessoal e profissional.
      </Text>

      <Text>
        Nos últimos anos venho me dedicando a programação, Java, Javascript, NodeJs, .NET, ASP.NET,   C#, MySql, SqlServer, HTML, CSS.
      </Text>
      <Text>
        Estou estudando Front-end com HTML, CSS, JavaScript, SASS, Grunt, tendo uma pequena vertente para NodeJs com Express.
      </Text>
      <Text>
        Há mais de 3 anos utilizando .NET Core/ASP.NET Core e Angular, tenho conhecimento em EntityFramework, Redis, Estrutura MVC, API`s, SqlServer e MySql
      </Text>
      <Text>
        Geralmente soluciono problemas com auxílio da programação em NodeJs c/Electron e/ou Express, .NET.ASP.NET Web/WPF/WinForms básicos.
      </Text>


      <ButtonComponent
        title="Voltar"
        onPress={() => navigator.navigate("Home")}
      />

    </View>
  )
}