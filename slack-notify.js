const axios = require("axios").default;

async function notify({ CIRCLE_TAG, CIRCLE_BUILD_URL, SLACK_NOTIFY_URL }) {
  const text = CIRCLE_TAG
    ? `CircleCI build completed. <${CIRCLE_BUILD_URL}|See build>\n\`${CIRCLE_TAG}\` released. \nReleased at: https://github.com/tingruchen/card-game/releases/tag/${CIRCLE_TAG}`
    : `CircleCI build completed. <${CIRCLE_BUILD_URL}|See build>\nApp deployed at: https://card-game-97514.web.app`;
  try {
    await axios.post(SLACK_NOTIFY_URL, JSON.stringify({ text }), {
      headers: {
        "Content-type": "application/json"
      }
    });
  } catch (err) {
    console.error("notify failed. ", err);
  }
}

notify(process.env);
