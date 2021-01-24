const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const { db, jwt_secret } = require("./config");

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		async (formMail, formPassword, done) => {
			try {
				const [
					sqlRes,
				] = await db.query(
					`SELECT id, email, nom, prenom, password FROM candidats WHERE email=?`,
					[formMail]
				);
				if (!sqlRes.length) return done(null, false);
				const { id, email, nom, prenom, password } = sqlRes[0];
				const isPasswordOK = bcrypt.compareSync(formPassword, password);
				if (!isPasswordOK) return done(null, false, "Wrong password!");

				const user = { id, email, nom, prenom };
				return done(null, user);
			} catch (e) {
				console.log(e);
				return done(e);
			}
		}
	)
);

passport.use(
	new JWTStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwt_secret,
		},
		(jwtPayload, done) => {
			const user = jwtPayload;
			return done(null, user);
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
