const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
        // clientID: '141863658593-t4b28onojsi8h31cuurq65pnoc5m5kag.apps.googleusercontent.com', 
        // clientSecret: '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', 
        // callbackURL: "http://localhost:8000/users/auth/google/callback",
    },

async function(accessToken, refreshToken, profile, done){
        // find a user
        try {
            
            let user = await User.findOne({email: profile.emails[0].value});
            
            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                try {
                    let user = await User.create({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        password: crypto.randomBytes(20).toString('hex')
                    });

                    return done(null, user);
    
                } catch (error) {
                    if(error){
                        console.log("error in creating user",error);
                        return;
                    }
                }                    
                }

        } catch (error) {
            if(error){
                console.log("error in creating user",error);
                return;
            }
        }
            }

));


module.exports = passport;
