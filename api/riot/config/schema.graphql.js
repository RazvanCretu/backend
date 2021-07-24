/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

module.exports = {
  definition: `
      type Game {
        gameCreation: Int!,
        gameDuration: Int!,
        gameId: Int!,
        gameMode: String!,
      }
  
      type Summoner {
        id: String!,
        accountId: String!,
        puuid: String!,
        name: String!,
        profileIconId: Int!,
        revisionDate: Int!,
        summonerLevel: Int!,
        games: [Game]
      }`,
  query: `
        Summoner(summoner: String!): Summoner!
      `,
  resolver: {
    Query: {
      Summoner: {
        description: "Get the Summoner object in the Riot API.",
        resolver: "application::riot.summoner.findSummoner",
      },
    },
    Summoner: {
      games: {
        description: "Get the last five games played by Summoner.",
        resolverOf: "application::riot.summoner.findGamesBySummoner",
        resolver: async (summoner, options, ctx) => {
          return strapi.services.riot.games(summoner.puuid);
        },
      },
    },
  },
};
