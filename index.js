const core = require('@actions/core');
const github = require('@actions/github');
const http_client = require('@actions/http-client')
const fs = require('fs')

workspace = process.env.GITHUB_WORKSPACE

files = fs.readdirSync(workspace)

files.forEach(f => core.info(f))

