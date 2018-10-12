module.exports = function(sequelize, DataTypes) 
{
    const user_event = sequelize.define("user_event",
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
  
        attend_status:
        {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
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

    return user_event;
  };