async function lsGitHub(owner, repo, dir = "", depth = 1) {
    const targetURL = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=${depth}`
    var ret = await fetch(targetURL)
        .then((r) => r.json())
        .then((r) => { return r.tree });

    ret = ret.filter((n) => 
    {
        return n.type === "blob";
    });

    if (dir.length === 0) {
        return ret;
    }
    else {
        return ret.filter((n) => {
            let s = n.path.substring(0, dir.length) + "/";
            return s === (dir + "/");
        });
    }

}


lsGitHub("tommyvct", "BikeGuard", "img", 1).then((l) => {
    document.getElementById("main").innerText = l;
});

