import JwtStrategy from 'passport-jwt'.Strategy;
import ExtractJwt from 'passport-jwt'.ExtractJwt;

import User from '../models/User.js';

/**
 * Parse headers
 * @type {Object}
 */
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'api359t'
};

export default = passport => {

	passport.use(
		new JwtStrategy(options, async (payload, done) => {

			try {
				const user = await User.findById(payload.userId).select('email id');

				if (user) {
					done(null, user);
				} else {
					done(null, false);
				}
			} catch(e) {
				console.log(e);
			}

		})
	);

};
