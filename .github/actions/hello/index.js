const core = require('@actions/core'); // npm install @actions/core
const github = require('@actions/github'); // npm install @actions/github

try {
    // throw new Error("some error message");

    core.debug('debug log');
    core.warning('warning log');
    core.error('error log');

    const name = core.getInput('who-to-greet');
    core.setSecret(name); // makes this variable hidden from log
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup('Logging github object'); // Log that can be expanded in github console
    console.log(JSON.stringify(github, null, '\t'));
    core.endGroup();

    core.exportVariable('HELLO', 'hello'); // setup an environment variable accesssible in the workflow step
}
catch (error) {
    core.setFailed(error.message);
}
