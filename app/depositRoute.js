var Deposit = require('./models/deposit');

module.exports = function(app, passport) {
  app.get('/api/deposits', function(req, res) {
        var query = {userid: req.user._id};
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
        if(req.body.oper === 'add'){
            // create a Deposit, information comes from AJAX request from Angular
            var query = { $and: [ { userid: req.user._id }, { number: req.body.number } ]};
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
        }else if(req.body.oper === 'del'){
            var query = { $and: [ { userid: req.user._id }, { number: req.body.id } ]};
            Deposit.remove(query, function(err, deposit) {
                if (err)
                    res.send(err);

                // get and return all the deposits after you create another
                Deposit.find(function(err, deposit) {
                    if (err)
                        res.send(err)
                    res.json(deposit);
                });
            });
        }
    });

    // delete a Deposit
    app.post('/api/delDeposits/', function(req, res) {
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
