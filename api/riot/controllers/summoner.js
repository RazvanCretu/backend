/* eslint-disable no-undef */
"use strict";

module.exports = {
  findSummonerByName: async (ctx) => {
    try {
      const summoner = ctx.params.summoner || ctx.params._summoner;

      const profile = await strapi.services.riot.summoner(summoner);
      const games = await strapi.services.riot.games(profile.puuid);

      return { ...profile, games: games };
    } catch (err) {
      return err;
    }
  },
};
