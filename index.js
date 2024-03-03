const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');

const run = async () => {
    try {
        const setFile = core.getInput('file')
        const content = await fs.readFile(setFile, 'utf8')

        let yamlData = yaml.load(content)

        if (yamlData == null || yamlData == undefined) {
            core.setFailed('yaml파일을 확인하세요')
            return
        }

        let result = keys.reduce((dict, key) => dict[key], yamlData)
        console.log(result)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run()
