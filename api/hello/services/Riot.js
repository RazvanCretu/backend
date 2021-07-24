const axios = require("axios");

const RIOT_KEY = process.env.RIOT_KEY;

module.exports = {
  summoner: async (name) => {
    // Setup e-mail data.
    try {
      const { data } = await axios.get(
        `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
        {
          headers: { "X-Riot-Token": RIOT_KEY },
        }
      );
      return data;
    } catch (err) {
      return err;
    }
  },
  games: async (puuid) => {
    try {
      const { data } = await axios.get(
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`,
        {
          headers: { "X-Riot-Token": RIOT_KEY },
        }
      );

      const games = await Promise.all(
        data.map(async (id) => {
          const {
            data: {
              info: { gameCreation, gameDuration, gameId, gameMode },
            },
          } = await axios.get(
            `https://europe.api.riotgames.com/lol/match/v5/matches/${id}`,
            {
              headers: { "X-Riot-Token": RIOT_KEY },
            }
          );

          return {
            gameCreation: gameCreation / 1000,
            gameDuration: gameDuration,
            gameId: gameId,
            gameMode: gameMode,
          };
        })
      );

      return games;
    } catch (err) {
      return err;
    }
  },
};
