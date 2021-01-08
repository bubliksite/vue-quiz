import firebase from "firebase/app";

export default {
    actions: {
        // eslint-disable-next-line no-unused-vars
        async addPoints({commit, dispatch}, {gameId, commandId, roundNumber, points}) {
            // eslint-disable-next-line no-useless-catch
            try {
                const changeRound = await firebase.database().ref(`/games/${gameId}/`).update({currentRound: roundNumber+1})
                const point = await firebase.database().ref(`/games/${gameId}/commands/${commandId}/points/${roundNumber}/`).set({points})
                return {point, changeRound}
            } catch (e) {
                throw e
            }
        },
        // eslint-disable-next-line no-unused-vars
        async countPoints({commit, dispatch}, {gameId, commandId}) {
            // eslint-disable-next-line no-useless-catch
            try {
                let pointsSum = 0
                const getCountOfRounds = (await firebase.database().ref(`games/${gameId}/currentRound`).once('value')).val()
                for (let i = 1; i <= getCountOfRounds; i++) {
                    let points = Number((await firebase.database().ref(`games/${gameId}/commands/${commandId}/points/${i}/points/`).once('value')).val())
                    pointsSum = pointsSum + points
                }
                const sumOfPoints = await firebase.database().ref(`games/${gameId}/commands/${commandId}/sumPoints/`).set({points: pointsSum})
                return sumOfPoints
            } catch (e) {
                throw e
            }
        }
    }
}