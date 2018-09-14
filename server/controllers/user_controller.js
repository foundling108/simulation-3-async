module.exports = {
    displayUser: (req, res) => {
       const db = req.app.get('db');
       let info = req.session.user.user_id
       
       db.users.get_user([info])
       .then(userInfo => {
           res.status(200).send(userInfo)
       })
       .catch(err => console.log(err))
    },

    displayProfile: (req, res) => {
        const db = req.app.get('db');
        const { first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year } = req.body

        db.users.update_user([ first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year ])
        .then(updatedInfo => {
            res.status(200).send(updatedInfo)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Could not update user info"})
        })
        console.log(err)
    }
}