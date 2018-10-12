var db = require("../models");

module.exports = function (app) {
  ///////////////////////////////
  //all get routes start here

  // //not sure what this is supposed to be used for though - possibly bring up user profile?
  // app.get("/auth/api/user/:email", function (req, res) 
  // {
  //   db.user.findOne(
  //     {
  //     where: { email: req.params.email }
  //     })
  //   .then(function (dbuser) 
  //   {
  //     res.json(dbuser);
  //   });
  // });

  //list of all events
  app.get("/auth/api/events", function (req, res) {
    db.event.findAll({})
      .then(function (dbevent) {
        res.json(dbevent);
      });
  });

  //get event details by event id
  app.get("/auth/api/events/:id", function (req, res) {
    db.event.findAll(
      {
        where: { id: req.params.id }
      })
      .then(function (dbevent) {
        res.json(dbevent);
      });
  });

  //get user profile information by user id
  app.get("/auth/api/profile/:id", function (req, res) {
    db.profile.findAll(
      {
        where: { user_id: req.params.id }
      }).then(function (dbprofile) {

        res.json(dbprofile);
      });

    // db.user.findAll(
    //   {
    //     where: {id: req.params.id}
    //   }).then(function (dbuser)
    //   {
    //     res.json(dbuser);
    //   });
  });

  //get all posts and associated comments for an event 
  //the id param is for the event id
  //TO ADD: poster username/email
  app.get("/auth/api/posts/:id", function (req, res) {
    db.user.findAll(
      {
        attributes: ['id', 'fname', 'lname', 'email'],
        include: [
          {
            model: db.post,
            attributes: ['id', 'user_id', 'title', 'content', 'status'],
            where: { event_id: req.params.id },
            order: '"created_at" DESC',
            include:
              [
                {
                  model: db.comment,
                  attributes: ['id', 'user_id', 'title', 'content', 'status'],
                  include: [
                    {
                      model: db.user,
                      attributes: ['id', 'fname', 'lname', 'email']
                    }
                  ]
                }
              ]
          }
        ]
      }).then(function (dbpost) {
        res.json(dbpost);
      });
  });

  //get events by location and/or date
  app.get("/auth/api/event_search", function (req, res) {
    db.event.findAll(
      {
        where:
        {
          city: req.body.city,
          event_date:
          {
            between: [req.body.start_date, req.body.end_date]
          }
        },
      }).then(function (dbevent) {
        res.json(dbevent);
      });
  });

  //get list of registered people by event id
  app.get("/auth/api/attendees/:id", function (req, res)
  {
    db.user_event.findAll(
      {
        attributes: [],
        where: {event_id: req.params.id},
        include: [
          {
            model:db.user,
            attributes: ['id', 'fname', 'lname']
          }
        ]
      }
    ).then(function(dbuserevent)
    {
      res.json(dbuserevent);
    });
  });


  //get list of all events registered for by a user id
  app.get("/auth/api/events_for_user/:id", function (req, res)
  {
    db.event.findAll(
      {
        attributes: ['id', 'event_title', 'date'],
        include: [
          {
            model: db.user_event,
            where: {user_id: req.params.id},
            attributes: []
          }
        ]
      }).then(function(dbeventsforusers)
      {
        res.json(dbeventsforusers);
      });
  });

  //all get routes end here
  /////////////////////////////// 


  ///////////////////////////////
  //all post routes start here

  //this code is now in the ../passport/local-signup.js file
  //create a user account and instantiate a profile record for the user
  //this prevents complications of potentially creating multiple profile records per user
  // app.post("/auth/api/user", function (req, res) 
  // {
  //   db.user.create(
  //     {
  //       fname: req.body.fname,
  //       lname: req.body.lname,
  //       email: req.body.email,
  //       password: req.body.password
  //     })
  //     .then(function (dbuser) 
  //     {
  //       //captures the newly created user_id
  //       let new_user_id = dbuser.id;

  //       //creates a profile that is null except for user_id
  //       db.profile.create(
  //         {
  //           user_id: new_user_id
  //         }
  //       )
  //       res.json(dbuser);
  //     });
  // });

  //create a post for an event
  //the id param is for the event id
  //this should be happening from the event details page
  app.post("/auth/api/post/:id", function (req, res) {
    db.post.create(
      {
        //need to make sure this is the way to pull the right user id
        user_id: req.body.user_id,
        event_id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        status: 'In Review'
      })
      .then(function (dbpost) {
        res.json(dbpost);
      });
  });

  //create a comment
  //the id param is for the post id
  //this should be happening from the event details page
  app.post("/auth/api/comment/:post_id", function (req, res) {
    db.comment.create(
      {
        post_id: req.params.post_id,
        user_id: req.body.user_id,
        title: req.body.title,
        content: req.body.content,
        status: 'In Review'
      })
      .then(function (dbcomment) {
        res.json(dbcomment);
      });
  });

  //create event
  app.post("/auth/api/events", function (req, res) {
    db.event.create(
      {
        creator_user_id: req.body.creator_user_id,
        event_title: req.body.event_title,
        summary: req.body.summary,
        max_attend: req.body.max_attend,
        is_full: req.body.is_full,
        age_restrict: req.body.age_restrict,
        age_min: req.body.age_min,
        date: req.body.date,
        time: req.body.time,
        location_name: req.body.location_name,
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        addr3: req.body.addr3,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        skill1: req.body.skill1,
        skill2: req.body.skill2,
        skill3: req.body.skill3,
        skill4: req.body.skill4,
        skill5: req.body.skill5
      })
      .then(function (dbevent) {
        res.json(dbevent);
      });
  });

  //register user for an event
  app.post("/auth/api/user_event_register/:id", function (req, res) {
    db.user_event.create(
      {
        //amir will need to confirm how to get the user id for this kind of process
        user_id: req.body.user_id,
        event_id: req.params.id

      }).then(function (dbuserevent) {
        res.json(dbuserevent);
      });
  });

  //link users to skills
  // app.post("/auth/api/user_skill", function (req, res)
  // {
  //   db.user_skill.create(
  //     {
  //       user_id: req.body.user_id,
  //       skill_id: req.body.skill_id,
  //       skill_name: req.body.skill_name

  //     }).then(function (dbuserskill)
  //     {
  //       res.json(dbuserskill);
  //     });
  // });

  //  //add skills
  //  app.post("/auth/api/skill_add", function (req, res)
  //  {
  //    db.skill.create(
  //      {
  //        name: req.body.name
  //      }
  //    )
  //    .then(function (dbskilladd)
  //    {
  //      res.json(dbskilladd);
  //    });
  //  });

  //all post routes end here
  ///////////////////////////////

  ///////////////////////////////
  //all put routes are here


  //update user profile based on user id
  app.put("/auth/api/profile/:id", function (req, res) {
    db.profile.update(
      {
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        skill1: req.body.skill1,
        skill2: req.body.skill2,
        skill3: req.body.skill3,
        skill4: req.body.skill4,
        skill5: req.body.skill5,
        github: req.body.github,
        linkedin: req.body.linkedin,
        avatar: req.body.avatar,
        status: 'Active',
        user_id: req.body.id
      },
      { /*returning: true, */where: { user_id: req.params.id } }
    )
      //by using the return and array it should return the updated values to the page
      /*      .then(function ([ p_rowsUpdate, [updated_profile] ]) 
           {
             res.json(updated_profile);
           }) */
      // .then(function () {
      //   db.user.update(
      //     {
      //       fname: req.body.fname,
      //       lname: req.body.lname,
      //       email: req.body.email
      //     },
      //     { returning: true, where: { user_id: req.params.id } }
      //   )
          .then(function (updated_user) {
            res.json(updated_user);
          });
      //});
  });

  //update existing event records
  app.put("/auth/api/event/:id", function (req, res) {
    db.event.update(
      {
        creator_user_id: req.body.id,
        event_title: req.body.event_title,
        summary: req.body.summary,
        max_attend: req.body.max_attend,
        is_full: req.body.is_full,
        age_restrict: req.body.age_restrict,
        age_min: req.body.age_min,
        date: req.body.date,
        time: req.body.time,
        location_name: req.body.location_name,
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        addr3: req.body.addr3,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        skill1: req.body.skill1,
        skill2: req.body.skill2,
        skill3: req.body.skill3,
        skill4: req.body.skill4,
        skill5: req.body.skill5
      },
      {
        where: { id: req.params.id }
      }
    )
      .then(function (dbevent) {
        res.json(dbevent);
      })
  });
  //all put routes end here
  ///////////////////////////////

  ///////////////////////////////
  //all destroy routes start here

  //remmove user registration
  app.delete("/auth/api/user_event_deregister/:id", function (req, res) {
    db.user_event.destroy(
      {
        where:
        {
          user_id: req.user.id,
          event_id: req.params.id
        }
      }).then(function (dbuserevent) {
        res.json(dbuserevent);
      });
  });

  // //de-link users to skills
  // app.delete("/auth/api/user_skill_remove", function (req, res)
  // {
  //   db.user_skill.destroy(
  //     {
  //       where:
  //       {
  //         user_id: req.user.id,
  //         skill_id: req.body.skill_id
  //       }
  //     }).then(function (dbuserskill)
  //     {
  //       res.json(dbuserskill);
  //     });
  // });

  //all destroy routes end here
  ///////////////////////////////

};