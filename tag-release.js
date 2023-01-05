const zipper = require("zip-local");
const axios = require("axios").default;

async function performRelease() {
  // try {
  //   await axios.post("https://api.github.com/repos/tingruchen/card-game/releases", {
  //     tag_name: "0.0.1",
  //     target_commitish: "main",
  //     name: "0.0.1",
  //     body: "release of 0.0.1",
  //     draft: false,
  //     prerelease: false,
  //     generate_release_notes: false
  //   },
  //   {
  //     headers: {
  //       Accept: "application/vnd.github+json",
  //       Authorization: `token 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`
  //     }
  //   })
  // } catch(err) {
  //   console.error('release err', err)
  // }
  let releaseId;
  try {
    const res = await axios.get(
      "https://api.github.com/repos/tingruchen/card-game/releases",
      {
        headers: {
          Authorization: `token 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`,
        },
      }
    );
    releaseId = res.data.find((release) => release.tag_name === "0.0.0").id;
    console.log("releaseId", releaseId);
  } catch (err) {
    console.error("errrrr", err);
  }

  zipper.zip("./dist", async function (error, zipped) {
    if (!error) {
      zipped.compress(); // compress before exporting

      var buff = zipped.memory(); // get the zipped file as a Buffer

      try {
        // `https://uploads.github.com/repos/tingruchen/card-game/${releaseId}/55262011/assets?name=dist.zip`
        // `https://api.github.com/repos/tingruchen/card-game/releases/${releaseId}/assets?name=dist.zip`
        await axios.post(
          `https://uploads.github.com/repos/tingruchen/card-game/${releaseId}/55262011/assets?name=dist.zip`,
          buff,
          {
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `token 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`,
            },
          }
        );
      } catch (err) {
        console.error("assets err", err);
      }

      // or save the zipped file to disk
      // zipped.save("./assets.zip", function (error) {
      //   if (!error) {
      //     console.log("saved successfully !");
      //   }
      // });
    }
  });
}

performRelease();
