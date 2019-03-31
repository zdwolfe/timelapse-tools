const gh = require('gh-pages');

const options = {
    repo: 'git@github.com:zdwolfe/cascade.git'
};
gh.publish('build', options, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Deployed, check out https://zdwolfe.github.io/cascade/#/hello/zach")
    }
});
