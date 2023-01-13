import { StyleSheet } from "aphrodite";

import { isMobile } from "../GlobalFunction";

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    containerLogin:{
        boxShadow: '0px 10px 21px -9px rgba(0,0,0,0.38)',
        paddingTop: '2vw',
        paddingBottom: '5vw',
        paddingLeft: '8vw',
        paddingRight: '8vw',
    },
    loginTitle:{
        fontSize: '2vw',
        textAlign: 'center',
        [isMobile]:{
            fontSize: '5vw'
        }
    },
    input:{
        width: '15vw',
        padding: '1vw',
        marginTop: '1vw',
        borderRadius: '0.3vw',
        fontSize: '1vw',
        [isMobile]:{
            fontSize: '3vw',
            width: '40vw',
            marginTop: '2vw',
            borderRadius: '1vw'
        }
    },
    containerInput:{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    button:{
        backgroundColor: '#4EB79E',
        border: 'unset',
        marginTop: '1vw',
        padding: '0.6vw',
        borderRadius: '0.3vw',
        fontSize: '1vw',
        color: 'white',
        fontWeight: '600',
        [isMobile]:{
            fontSize: '3vw',
            marginTop: '5vw',
            borderRadius: '1vw'
        }
    }
})