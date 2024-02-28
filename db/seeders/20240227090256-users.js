'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
    .insertMany([
      {
        _id: "65dda5e1a7946887e0361a56",
        firstname: "sabin",
        lastname: "wick",
        email: "sw@gmail.com",
        password: "$2a$12$KnQN2//Vv6Rtf8bKv76ENuLA/oNvkw8Ut55.6mRDra6ackhJZhrie",
        phone: "9876543213"
      },
      {
        _id: "65dda705a7946887e0361a57",
        firstname: "john",
        lastname : "rambo",
        email: "jr@gmail.com",
        password: "$2a$12$hQ3WsJA8DJNhuoQENec5heVdEnmSNpnNYi4vXGi/OpYeeEjTET77S",
        phone: "9349157204"
      }
    ])
  },

  down: (models, mongoose) => {
    return models.users
    .deleteMany({
      _id : {
        $in: [
          "65dda5e1a7946887e0361a56",
          "65dda705a7946887e0361a57"
        ],
      },
    })
    .then((res)=>{
      console.log(res.deletedCount);
    })
  }
};
