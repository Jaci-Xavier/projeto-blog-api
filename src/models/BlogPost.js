const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId', as : 'user' });
  };

  return BlogPost;
}

module.exports = BlogPostModel;