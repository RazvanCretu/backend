const axios = require("axios");

const fetchRiot = async (uri) => {
  const { data } = await axios.get(uri, {
    headers: { "X-Riot-Token": process.env.RIOT_KEY },
  });

  return data;
};

module.exports = {
  summoner: async (name) => {
    // Setup e-mail data.
    try {
      const data = await fetchRiot(
        `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`
      );
      return data;
    } catch (err) {
      return err;
    }
  },
  games: async (puuid) => {
    try {
      const data = await fetchRiot(
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`
      );

      const games = await Promise.all(
        data.map(async (id) => {
          const {
            info: {
              gameCreation,
              gameDuration,
              gameId,
              gameMode,
              participants,
            },
          } = await fetchRiot(
            `https://europe.api.riotgames.com/lol/match/v5/matches/${id}`
          );

          return {
            gameCreation: gameCreation,
            gameDuration: gameDuration,
            gameId: gameId,
            gameMode: gameMode,
            ...participants.filter((item) => {
              return item.puuid == puuid;
            })[0],
          };
        })
      );

      return games;
    } catch (err) {
      return err;
    }
  },
};
