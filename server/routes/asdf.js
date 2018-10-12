app.get("/auth/api/posts/:id", function (req, res)
{  
  db.user.findAll(
  { 
    attributes: ['fname','lname','email'],
    include: [
      {
        model: db.post,
        attributes: ['poster_user_id','title','content','status'],
        where: {event_id: req.params.id},
        include: 
        [
              {
                model: db.comment,
                attributes: ['commenter_user_id','title','content','status']
              }
        ]
      }
    ]
  }).then(function (dbpost)
  {
    res.json(dbpost);
  });
});


app.get("/auth/api/posts/:id", function (req, res)
{  
  db.post.findAll(
  { 
    attributes: ['fname','lname','email'],
    include: [
      {
        model: db.post,
        attributes: ['poster_user_id','title','content','status'],
        where: {event_id: req.params.id},
        include: 
        [
              {
                model: db.comment,
                attributes: ['commenter_user_id','title','content','status']
              }
        ]
      }
    ]
  }).then(function (dbpost)
  {
    res.json(dbpost);
  });
});