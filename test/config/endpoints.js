module.exports = {
    host : {
        master: 'https://github.com/aimer1124/SuperTestWithGrunt',
        branch: 'https://github.com/aimer1124/SuperTestWithGrunt/tree/differentENV'
    },
    env: process.env.NODE_ENV || 'master'
};
