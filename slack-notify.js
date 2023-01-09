const axios = require("axios").default;

async function notify({ CIRCLE_TAG, CIRCLE_BUILD_URL }) {
  const text = CIRCLE_TAG
    ? `CircleCI build completed. <${CIRCLE_BUILD_URL}|See build>\n\`${CIRCLE_TAG}\` released. \nReleased at: https://github.com/tingruchen/card-game/releases/tag/${CIRCLE_TAG}`
    : `CircleCI build completed. <${CIRCLE_BUILD_URL}|See build>\nApp deployed at: https://card-game-97514.web.app`;
  try {
    await axios.post(
      "https://hooks.slack.com/services/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",
      JSON.stringify({ text }),
      {
        headers: {
          "Content-type": "application/json"
        }
      }
    );
  } catch (err) {
    console.error("notify failed. ", err);
  }
}

notify(process.env);
