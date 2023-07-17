const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define ('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'categories',
    timestamps: false,
  });

  return Category;
};

module.exports = CategoryModel;

