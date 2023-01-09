const zipper = require("zip-local");
const axios = require("axios").default;

async function performRelease({ GITHUB_TOKEN, CIRCLE_TAG = "0.0.4" }) {
  let uploadUrl;
  try {
    let { upload_url } = await axios.post(
      "https://api.github.com/repos/tingruchen/card-game/releases",
      {
        tag_name: CIRCLE_TAG,
        target_commitish: "main",
        name: CIRCLE_TAG,
        body: `release of ${CIRCLE_TAG}`,
        draft: false,
        prerelease: false,
        generate_release_notes: false,
      },
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    uploadUrl = upload_url.split("{?name,label}")[0];
  } catch (err) {
    console.error("release err", err);
  }
  // let uploadUrl;
  // try {
  //   const res = await axios.get(
  //     "https://api.github.com/repos/tingruchen/card-game/releases",
  //     {
  //       headers: {
  //         Authorization: `token `,
  //       },
  //     }
  //   );
  //   // releaseId = res.data.find((release) => release.tag_name === "0.0.0").id;
  //   // console.log("releaseId", releaseId, res.data);
  //   uploadUrl = res.data
  //     .find((release) => release.tag_name === "0.0.0")
  //     .upload_url.split("{?name,label}")[0];
  //   console.log("upload_url", uploadUrl);
  // } catch (err) {
  //   console.error("errrrr", err);
  // }

  zipper.zip("./dist", async function (error, zipped) {
    if (!error) {
      zipped.compress(); // compress before exporting

      var buff = zipped.memory(); // get the zipped file as a Buffer

      try {
        await axios.post(`${uploadUrl}?name=dist.zip`, buff, {
          headers: {
            Accept: "application/vnd.github+json",
            "Content-Type": "application/zip",
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });
      } catch (err) {
        console.error("assets err", err);
      }
    }
  });
}

performRelease(process.env);
