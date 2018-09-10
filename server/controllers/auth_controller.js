module.exports = {
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('Nice try sucka');
        }
    },

    logout: (req, res ) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}