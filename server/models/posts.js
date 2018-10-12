module.exports = function(sequelize, DataTypes) 
{
    const post = sequelize.define("post",
    {
        id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        user_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        event_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        title:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        content:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status:
        {
            type: DataTypes.ENUM,
            values: ['Approved', 'Rejected', 'In Review']
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

    return post;
  };