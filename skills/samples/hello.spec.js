const expect = require('chai').expect;
const Hello = require('./hello');

describe('#SKILL : Hello', () => {
  it('Check result', done => {
    let _hello = Hello();
    expect(_hello).to.be.a('object');
    expect(_hello).to.have.property('setup');
    expect(_hello).to.have.property('name');
    expect(_hello).to.have.property('options');
    expect(_hello.options).to.be.a('object');
    expect(_hello.name).to.be.a('string');
    expect(_hello.setup).to.be.a('function');
    expect(_hello.name).to.equal('hello');
    done();
  });

  it('Should use the default Options', done => {
    let _hello = Hello();
    expect(_hello.options).to.deep.equal({
      help: '',
      intents: ['hello'],
      events: ['direct_message', 'direct_mention', 'mention']
    });
    done();
  });

  it('Should override some Options fields', done => {
    let _hello = Hello({
      intents : ['hi','Good Morning'],
    });
    expect(_hello.options).to.deep.equal({
      help: '',
      intents: ['hi','Good Morning'],
      events: ['direct_message', 'direct_mention', 'mention']
    });
    done();
  });

  it('Should override some Options fields', done => {
    let _hello = Hello({
      intents : ['hi','Good Morning'],
    });
    expect(_hello.options).to.deep.equal({
      help: '',
      intents: ['hi','Good Morning'],
      events: ['direct_message', 'direct_mention', 'mention']
    });
    done();
  });

  it('Should setup the skill with the options', done => {
    let _hello = Hello({
      intents : ['hi','Good Morning'],
    });

    controller = {
      hears : (intents, events, cb) => {
        expect(intents).to.deep.equal(['hi','Good Morning']);
        expect(events).to.equal('direct_message,direct_mention,mention');
        done();
      }
    };

    _hello.setup({}, controller);
  });

  it('Should Reply Hi when the skill is triggered', done => {
    let _hello = Hello();

    let message = {
      text : 'Hello',
    };

    let bot = {
      reply : (msg, res) => {
        expect(msg).to.deep.equal(message);
        expect(res).to.be.a('object');
        expect(res).to.have.property('text');
        expect(res.text).to.equal('Hi');
        done();
      }
    };

    let controller = {
      hears : (intents, events, cb) => cb.apply(null, [bot,message])
    };

    _hello.setup({}, controller);
  });

});
