module.exports = (sequelize, DataTypes) => {
    const FoodItems = sequelize.define("FoodItems", {
        food_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        energy:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fibre:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return FoodItems;
}