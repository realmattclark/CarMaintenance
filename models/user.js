module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 30]
            }
        }
    });
    return User;
};