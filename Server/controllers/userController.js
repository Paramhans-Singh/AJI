const User = require('../models/user');

// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        title: "Sign-up | AJI"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Sign-In | AJI"
    })
}

// get the sign up data
module.exports.create = async function(req, res){

    try {
        if (req.body.password != req.body.confirm_password){
            // req.flash('error', 'Passwords do not match');
            return res.redirect('back');
        }
    
        let user = await User.findOne({email: req.body.email})
    
            if (!user){
                await User.create(req.body);
    
                    return res.redirect('/users/sign-in');
                
            }else{
                // req.flash('success', 'You have signed up, login to continue!');
                return res.redirect('back');
            }
    } catch (error) {
        if(error){
            console.log("error in creating user",error);
            return;
        }
    }
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout(function(err){
        if(err){
            console.log("Error in LogOut",error);
            return
        }

        // req.flash('success', 'You have logged out!');
        return res.redirect('/');
    });  
}