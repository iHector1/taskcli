#!/usr/bin/env node
const { connectDB } = require('./database')
require('./commands')

async function main() {
    await connectDB();
}
main();