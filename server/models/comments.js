module.exports = function(sequelize, DataTypes) 
{
    const comment = sequelize.define("comment",
    {
        id:
        {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        post_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        user_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        // commenter_email:
        // {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        title:
        {
            type: DataTypes.TEXT,
            allowNull: true
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

    return comment;
  };