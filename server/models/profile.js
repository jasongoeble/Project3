module.exports = function(sequelize, DataTypes) 
{
    const profile = sequelize.define("profile",
    {
        id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        age:
        {
            type: DataTypes.INTEGER,
            validate:
            {
                len: [1,2]
            },
            allowNull: true
        },
        gender:
        {
            type: DataTypes.STRING
        },
        phone:
        {
            //would like front end validation for this value
            //need to decide how to store, likely need to normalize
            //thinking (xxx) xxx-xxxx
            type: DataTypes.STRING,
            validate:
            {
                len: [10,20]
            },
            allowNull: true
        },
        city:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        state:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        zip_code:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        country:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        skill1:
        {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        skill2:
        {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        skill3:
        {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        skill4:
        {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        skill5:
        {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        github:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        linkedin:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        image:
        {
            type: DataTypes.BLOB('long'),
            allowNull: true
        },
        //need query to place averaged value of entries from reputation into this field
        rating:
        {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        status:
        {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Active', 'Inactive']
        },
        created_at: 
        {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
      },
      {
        underscored: true
      });
   

    return profile;
  };

