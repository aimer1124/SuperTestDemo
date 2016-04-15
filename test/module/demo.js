var config = require('../config/endpoints'),
    request = require('supertest')(config.host[config.env]);

describe('Test Demo.', function() {
    this.timeout(10000);
    xit('Visit ' + config.env, function(done) {
        request.get('/branches/all')
            .expect(200)
            .end(done);
    });
});
