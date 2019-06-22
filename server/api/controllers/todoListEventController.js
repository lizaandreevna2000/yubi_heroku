'use strict';


var mongoose = require('mongoose'),
Event = mongoose.model('Event');

exports.list_all_event = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.create_a_event = function(req, res) {
  var new_task = new Event(req.body);
  new_task.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.read_a_event = function(req, res) {
  Event.findById(req.params.eventId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.delete_a_event = function(req, res) {


    Event.remove({
      _id: req.params.eventId
    }, function(err, event) {
      if (err)
        res.send(err);
      res.json({ message: 'Event successfully deleted' });
    });
};