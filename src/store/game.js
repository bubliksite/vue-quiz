import firebase from 'firebase/app'

export default {
    actions: {
        // eslint-disable-next-line no-unused-vars
        async createGame({dispatch, commit}, {gameName, status, currentRound, created}) {
            // eslint-disable-next-line no-useless-catch
            try {
                const game = await firebase.database().ref('/games').push({gameName, status, currentRound, created});
                return {gameName, status, currentRound, created, id: game.key}
                // eslint-disable-next-line no-empty
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getGame({commit, dispatch}, {id}) {
            // eslint-disable-next-line no-useless-catch
            try {
                return (await firebase.database().ref(`/games/${id}`).once('value')).val()
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async getGames({commit, dispatch}) {
            // eslint-disable-next-line no-useless-catch
            try {
                return (await firebase.database().ref(`/games`).once('value')).val()
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async deleteGame({commit, dispatch}, {gameId}) {
            // eslint-disable-next-line no-useless-catch
          try {
              await firebase.database().ref(`/games/${gameId}/`).remove()
          }  catch (e) {
              throw e
          }
        },
        // eslint-disable-next-line no-unused-vars
        async changeStatus({commit, dispatch}, {gameId, status}) {
            // eslint-disable-next-line no-useless-catch
            try {
                await firebase.database().ref(`/games/${gameId}/`).update({status})
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async changeRound({commit, dispatch}, {gameId, currentRound}) {
            // eslint-disable-next-line no-useless-catch
            try {
                await firebase.database().ref(`/games/${gameId}/`).update({currentRound})
            } catch (e) {
                throw e
            }
        }
    }
}