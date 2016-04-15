var config = require('../config/endpoints'),
    request = require('supertest')(config.host[config.env]);

describe('Test Demo.', function() {

    this.timeout(10000);

    it('Visit ' + config.env, function(done) {
        request.get('')
            .expect(200)
            .end(done);
    });
});
