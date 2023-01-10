const axios = require("axios").default;

async function notify({ CIRCLE_TAG, CIRCLE_BUILD_URL, LINE_TOKEN }) {
  const text = CIRCLE_TAG
    ? `\nCircleCI build completed. See build: ${CIRCLE_BUILD_URL}\n\`${CIRCLE_TAG}\` released at: https://github.com/tingruchen/card-game/releases/tag/${CIRCLE_TAG}`
    : `\nCircleCI build completed. See build: ${CIRCLE_BUILD_URL}\nApp deployed at: https://card-game-97514.web.app`;
  try {
    await axios.post(
      "https://notify-api.line.me/api/notify",
      { message: text },
      {
        headers: {
          Authorization: `Bearer ${LINE_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
  } catch (err) {
    console.error("notify failed. ", err);
  }
}

notify(process.env);
