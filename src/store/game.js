import firebase from "firebase/app";

export default {
    actions: {
        // eslint-disable-next-line no-unused-vars
        async createGame({dispatch, commit}, {gameName, status}) {
            // eslint-disable-next-line no-useless-catch
            try {
                const game = await firebase.database().ref('/games').push({gameName, status});
                return {gameName, status, id: game.key}
                // eslint-disable-next-line no-empty
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async addCommand({dispatch, commit}, {commandName, id}) {
            // eslint-disable-next-line no-useless-catch
            try {
                const command = await firebase.database().ref(`/games/${id}/commands`).push({commandName});
                return {commandName, id: command.key}
                // eslint-disable-next-line no-empty
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getCommands({commit, dispatch}, {id}) {
            // eslint-disable-next-line no-useless-catch
            try {
                const commands = (await firebase.database().ref(`/games/${id}/commands`).once('value')).val() || {}
                return Object.keys(commands).map(key => ({
                    ...commands[key],
                    id: key
                }))
            } catch (e) {
                throw e
            }
        }
    }
}