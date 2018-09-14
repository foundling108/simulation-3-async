module.exports = {
    displayUser: (req, res) => {
       const db = req.app.get('db');
       let info = req.session.user.user_id
       
       db.users.get_user([info])
       .then(userInfo => {
           res.status(200).send(userInfo)
       })
       .catch(err => cosole.log(err))
    }
}