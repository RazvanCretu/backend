/* eslint-disable no-undef */
"use strict";
require("dotenv").config();
const axios = require("axios");
/**
 * A set of functions called "actions" for `hello`
 */

module.exports = {
  findSummoner: async (ctx) => {
    try {
      const summoner = ctx.params.summoner || ctx.params._summoner;

      return strapi.services.riot.summoner(summoner);
    } catch (err) {
      return err;
    }
  },
  findGamesBySummoner: async (ctx) => {
    try {
      const puuid = ctx.params.puuid || ctx.params._puuid;

      return strapi.services.riot.summonerGames(puuid);
    } catch (err) {
      return err;
    }
  },
};
