import { ExtractJwt, Strategy } from 'passport-jwt';
import dotenv from 'dotenv';
import User from '../models/User.js';
dotenv.config({
  path: './src/server/.env',
});
/**
 * Parse headers
 * @type {Object}
 */
const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT
};

export default (passport) => {

	passport.use(
		new Strategy(options, async (payload, done) => {

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
