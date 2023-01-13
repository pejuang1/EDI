import { StyleSheet } from "aphrodite";
import { isMobile } from "../GlobalFunction";

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '5vw'
    },
    containerAddButton:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5vw'
    },
    addButton:{
        padding: '0.6vw',
        paddingRight: '3vw',
        paddingLeft: '3vw',
        backgroundColor: '#4EB79E',
        fontSize: '1vw',
        border: 'unset',
        borderRadius: '0.3vw',
        fontWeight: '600',
        color: 'white',
        [isMobile]:{
            fontSize: '3vw'
        }
    },
    titleInput:{
        fontSize: '1vw',
        color: 'black',
        marginTop: '1vw',
        marginBottom: '0.2vw',
        [isMobile]:{
            fontSize: '4vw',
            marginTop: '2vw'
        }
    },
    buttonSave:{
        padding: '0.6vw',
        paddingLeft: '3vw',
        paddingRight: '3vw',
        backgroundColor: '#4EB79E',
        color: 'white',
        fontSize: '1vw',
        fontWeight: '600',
        [isMobile]:{
            fontSize: '3vw'
        }
    },
    inputData:{
        fontSize: '1vw',
        color: 'black',
        width: '100%',
        [isMobile]:{
            fontSize: '3vw'
        }
    },
    containerTable:{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '5vw'
    },
    editButton:{
        fontSize: '1.5vw',
        color: 'orange',
        marginTop: '0.5vw',
        cursor: 'pointer',
        [isMobile]:{
            fontSize: '4vw',
            marginTop: '2vw'
        }
    },
    deleteButton:{
        fontSize: '1.5vw',
        color: 'red',
        marginLeft: '1vw',
        marginTop: '0.5vw',
        cursor: 'pointer',
        [isMobile]:{
            fontSize: '4vw',
            marginTop: '2vw',
            marginLeft: '5vw'
        }
    }
})