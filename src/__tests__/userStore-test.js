jest.unmock('../redux/userStore.js'); // unmock to use the actual implementation of sum



import {log_in, userStore} from '../redux/userStore';

// import {userStore, log_in} from '../redux/userStore.js';

describe('userStore', () => {
  it('has log_in action creator defined', () => {
  	console.log(log_in())
    expect(log_in).toBeDefined();
  });


  it('has userStore object defined', () => {
    expect(userStore).toBeDefined();
  });


  describe('subscribe', () => {


	it('has userStore.subscribe triggered via dispatch', (done) => {
		expect(userStore.subscribe).toBeDefined();

		userStore.subscribe(() => {
			console.log(userStore.getState());
			done();
		})
		userStore.dispatch(log_in())
	});
  })
});
