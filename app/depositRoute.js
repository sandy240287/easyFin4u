var Deposit = require('./models/deposit');

module.exports = function(app, passport) {
  app.get('/api/deposits', function(req, res) {
        var query = {userid: req.user._id };
        // use mongoose to get all deposits in the database
        Deposit.find(query,function(err, deposit) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(deposit); // return all deposits in JSON format
        });
    });

    // create Deposit and send back all deposits after creation
    app.post('/api/deposits', function(req, res) {
        console.log(req.body);
        console.log(req.user._id);
        // create a Deposit, information comes from AJAX request from Angular
        var query = { $and: [ { userid: req.user._id }, { id: req.body.id } ]};
        var options = { upsert: 'true' };

        Deposit.findOneAndUpdate(query, { $set: {
            bank : req.body.bank,
            number : req.body.number,
            amount : req.body.amount,
            createDate : req.body.createDate,
            maturityDate : req.body.maturityDate,
            type : req.body.type,
            maturityAmount : req.body.maturityAmount,
            done : false
        }}, options, function(err, deposit) {
            if (err)
                res.send(err);

            // get and return all the deposits after you create another
            Deposit.find(function(err, deposit) {
                if (err)
                    res.send(err)
                res.json(deposit);
            });
        });


    });

    // delete a Deposit
    app.delete('/api/deposit/:deposit_id', function(req, res) {
        Deposit.remove({
            _id : req.params.Deposit_id
        }, function(err, Deposit) {
            if (err)
                res.send(err);

            // get and return all the deposits after you create another
            Deposit.find(function(err, deposit) {
                if (err)
                    res.send(err)
                res.json(deposit);
            });
        });
    });

}
