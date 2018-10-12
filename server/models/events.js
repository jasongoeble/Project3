module.exports = function(sequelize, DataTypes) 
{
    const event = sequelize.define("event",
    {
        id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        creator_user_id:
        {
            type: DataTypes.UUID,
            allowNull: true
        },
        event_title:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        summary:
        {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        max_attend:
        {
            type: DataTypes.INTEGER,
            allowNull: true,
            len: [1,100]
        },
        //need some way to update this when max_attend is hit
        is_full:
        {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        age_restrict:
        {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        age_min:
        {
            type: DataTypes.STRING,
            allowNull: true
            
        },
        date:
        {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        time:
        {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location_name:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        addr1:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        addr2:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        addr3:
        {
            type: DataTypes.STRING,
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
        image:
        {
            type: DataTypes.BLOB('long'),
            allowNull: true
        },
        created_at: 
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, 
    {
        underscored: true
    });

    return event;
  };