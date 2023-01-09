const zipper = require("zip-local");
const axios = require("axios").default;

async function performRelease({ GITHUB_TOKEN, CIRCLE_TAG }) {
  try {
    // let {
    //   data: { upload_url: uploadUrl }
    // } = await axios.post(
    //   "https://api.github.com/repos/tingruchen/card-game/releases",
    //   {
    //     tag_name: CIRCLE_TAG,
    //     target_commitish: "main",
    //     name: CIRCLE_TAG,
    //     body: `release of ${CIRCLE_TAG}`,
    //     draft: false,
    //     prerelease: false,
    //     generate_release_notes: false
    //   },
    //   {
    //     headers: {
    //       Accept: "application/vnd.github+json",
    //       Authorization: `token ${GITHUB_TOKEN}`
    //     }
    //   }
    // );

    // zipper.zip("./dist", async function (error, zipped) {
    //   if (!error) {
    //     zipped.compress(); // compress before exporting

    //     var buff = zipped.memory(); // get the zipped file as a Buffer

    //     try {
    //       await axios.post(
    //         `${uploadUrl.split("{?name,label}")[0]}?name=dist.zip`,
    //         buff,
    //         {
    //           headers: {
    //             Accept: "application/vnd.github+json",
    //             "Content-Type": "application/zip",
    //             Authorization: `token ${GITHUB_TOKEN}`
    //           }
    //         }
    //       );
    //     } catch (err) {
    //       console.error("assets err", err);
    //     }
    //   }
    // });
    await axios.post(
      "https://hooks.slack.com/services/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",
      JSON.stringify({ text: "test 0" }),
      {
        headers: {
          "Content-type": "application/json"
        }
      }
    );
  } catch (err) {
    console.error("release err", err);
  }
}

performRelease(process.env);
