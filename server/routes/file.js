module.exports = function (app, upload) {

    app.post('/upload', function (req, res) {
        upload(req, res, function (err) {
            if (err) {
                res.json({error_code: 1, err_desc: err});
                return;
            }
            res.json({error_code: 0, err_desc: null});
        })
    });
};
