var config = require('../config/endpoints'),
    should = require('chai').should(),
    request = require('supertest')(config.host[config.env]);



describe('Test Demo.', function() {
    this.timeout(10000);
    it('Visit https://github.com/aimer1124/SuperTestDemo', function(done) {
        request.get('')
            .expect(200)
            .end(done);
    });
});
