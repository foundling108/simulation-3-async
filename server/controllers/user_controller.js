module.exports = {
    displayUser: (req, res) => {
       const db = req.app.get('db');
       const { user_id } = req.session.user;
       
       db.users.get_user([ user_id ])
       .then(userInfo => {
           res.status(200).send(userInfo)
       })
       .catch(err => console.log(err))
    },

    displayProfile: (req, res) => {
        const db = req.app.get('db');
        const { first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year, user_id } = req.body

        db.users.update_user([ first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year, user_id ])
        .then(updatedInfo => {
            res.status(200).send(updatedInfo)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Could not update user info"})
            console.log(err)
        })
    },

    mountRec: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;

        db.users.get_everybody([ user_id ])
        .then( everybody => {
            res.status(200).send(everybody)
        })
        .catch(err => console.log(err))
    },

    addFriend: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        console.log(req.body)

        db.friends.add_friend([user_id, req.body.user_id])
        .then(added => {
            res.status(200).send(added)
        })
        .catch(err => console.log(err))
    },

    removeFriend: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;
        console.log(req.body)

        db.friends.remove_friend([user_id, req.body.user_id])
        .then(added => {
            res.status(200).send(added)
        })
        .catch(err => console.log(err))
    },

    getOtherUsers: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;

        db.users.get_all_users([ user_id ])
        .then(allUsers => {
            db.users.get_everybody([ user_id ])
            .then(notYetFriends => {
                for(let i=0; i<allUsers.length; i++){
                    for(let j=0; j<notYetFriends.length; j++){
                        allUsers[i].isFriend = false;
                        if(allUsers[i].user_id == notYetFriends[j].user_id){
                            allUsers[i].isFriend = true;
                            break;
                        }
                    }
                }
                res.send(allUsers)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    },

    getAllUsers: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.session.user;

        db.users.get_all_users([ user_id ])
        .then(allUsers => {
            res.status(200).send(allUsers)
        })
        .catch(err => console.log(err))
    }
}