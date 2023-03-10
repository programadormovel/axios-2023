import { StyleSheet } from "react-native";
 
const Estilo = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    texto: {
        fontSize: 32,
        color: 'red',
    },
    caixa: {
        borderWidth: 1,
        borderRadius: 100,
        minWidth: 300,
        textAlign: 'center',
        padding: 16,
    },
    botao: {
        backgroundColor: 'blue',
        margin: 48,
        padding: 16,
        borderRadius: 100,
    },
    textoBotao: {
        color: 'yellow',
    },
    }
)

export default Estilo;