var ghpages = require("gh-pages");

ghpages.publish(
    "public",
    {
        branch: "gh-pages",
        repo: "https://github.com/kotulaf/fcc-project-estimator-svelte",
        user: {
            name: "Filip Kotula",
            email: "fkotula1121@gmail.com",
        }
    },
    () => {
        console.log("Deploy Complete!")
    }
)