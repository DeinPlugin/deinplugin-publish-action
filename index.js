const core = require('@actions/core');
const github = require('@actions/github');
const http_client = require('@actions/http-client')
const fs = require('fs')
const path = require('path')

workspace = process.env.GITHUB_WORKSPACE

const run = async () => {


    console.log("Started action")
    console.log("Workspace: " + workspace)
    var posts = await fs.readdir(
        path.join(process.env.GITHUB_WORKSPACE)
    )

    console.log(posts)
    console.log("Workspace: ")
    posts = await fs.readFile("deinplugin.yaml")

    console.log(posts)
}

run().catch(err => core.setFailed(err.message))
