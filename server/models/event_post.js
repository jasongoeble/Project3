module.exports = function(sequelize, DataTypes) 
{
    const event_post = sequelize.define("event_post",
    {
        id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        event_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        post_id:
        {
            type: DataTypes.UUID,
            allowNull: false
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

    return event_post;
  };