module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "http://localhost:1337",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "688cb0beb29d8c239ed50b1d4330d16a"),
    },
  },
});
// http://localhost:1337/auth/google/callback?id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImNkNDliMmFiMTZlMWU5YTQ5NmM4MjM5ZGFjMGRhZGQwOWQ0NDMwMTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTQzNzY3NzYyNDgyLTBzc2QzNmNuazNuajVua2V1ZHIxcW51cDAzb3NycjN0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTQzNzY3NzYyNDgyLTBzc2QzNmNuazNuajVua2V1ZHIxcW51cDAzb3NycjN0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5MTU2NDczMjIwNzg2NDU2ODc2IiwiZW1haWwiOiJyYXp2YW4uY3JldHU5N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InBKT05ubWNiYzVPNlZfTFk2OFlhN0EiLCJpYXQiOjE2MjE3MjM2NzMsImV4cCI6MTYyMTcyNzI3M30.e0i1KtQ3cmtVP4hjeeqVTMPMWSiYCh073fEtx3KEFRY-3aN61La-c4GH_N14Y_GXFXAuVWSrKLrrgPwo8bNHOaDWLlOqANraMsdFnileoHu3UG9cze5WhQdz6sWTq1v5KdzWZPEkMsknCPpRvbUmZAf0_YTafM_CkP5jvRgPoQ7o4q7tRGx4K94SDp8zjcEOitdQuIK2saaDjdlGfOy6CIA6nYredmQqk9kWc05LQ3y_wWCL6WqLefJidF1UrFjUVji-f4SVcP31X0-HfH_QdY1vpabWzmuxioZhRxftGsv6B_wSilZqPkVW6yNyVWDf7nZphYeW-RASzPyZ2Vwpkw&access_token=ya29.a0AfH6SMC1OTim3R9w60sHl-j2ELAurfeMjWGVpksNlP247MZmkytaQ5cLLDg03Ox_Hk56z1HQ__QgGalq9y7mVgIMK6qgoQcnCZaM8ZAN4lSu_5Mq8Uz_q9mUa1qixgWjGf6UsBcCf6Y8k2MAuzrd5kOlfkf0&raw%5Baccess_token%5D=ya29.a0AfH6SMC1OTim3R9w60sHl-j2ELAurfeMjWGVpksNlP247MZmkytaQ5cLLDg03Ox_Hk56z1HQ__QgGalq9y7mVgIMK6qgoQcnCZaM8ZAN4lSu_5Mq8Uz_q9mUa1qixgWjGf6UsBcCf6Y8k2MAuzrd5kOlfkf0&raw%5Bexpires_in%5D=3599&raw%5Bscope%5D=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20openid&raw%5Btoken_type%5D=Bearer&raw%5Bid_token%5D=eyJhbGciOiJSUzI1NiIsImtpZCI6ImNkNDliMmFiMTZlMWU5YTQ5NmM4MjM5ZGFjMGRhZGQwOWQ0NDMwMTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTQzNzY3NzYyNDgyLTBzc2QzNmNuazNuajVua2V1ZHIxcW51cDAzb3NycjN0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTQzNzY3NzYyNDgyLTBzc2QzNmNuazNuajVua2V1ZHIxcW51cDAzb3NycjN0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5MTU2NDczMjIwNzg2NDU2ODc2IiwiZW1haWwiOiJyYXp2YW4uY3JldHU5N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InBKT05ubWNiYzVPNlZfTFk2OFlhN0EiLCJpYXQiOjE2MjE3MjM2NzMsImV4cCI6MTYyMTcyNzI3M30.e0i1KtQ3cmtVP4hjeeqVTMPMWSiYCh073fEtx3KEFRY-3aN61La-c4GH_N14Y_GXFXAuVWSrKLrrgPwo8bNHOaDWLlOqANraMsdFnileoHu3UG9cze5WhQdz6sWTq1v5KdzWZPEkMsknCPpRvbUmZAf0_YTafM_CkP5jvRgPoQ7o4q7tRGx4K94SDp8zjcEOitdQuIK2saaDjdlGfOy6CIA6nYredmQqk9kWc05LQ3y_wWCL6WqLefJidF1UrFjUVji-f4SVcP31X0-HfH_QdY1vpabWzmuxioZhRxftGsv6B_wSilZqPkVW6yNyVWDf7nZphYeW-RASzPyZ2Vwpkw
