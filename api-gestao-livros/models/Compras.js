// models/Compras.js
module.exports = (sequelize, DataTypes) => {
    const Compras = sequelize.define('Compra', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dataCompra: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      livroId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Livros',
          key: 'id',
        },
      },
    });
  
    Compras.associate = (models) => {
      Compras.belongsTo(models.Livros, {
        foreignKey: 'livroId',
        as: 'livro',
      });
    };
  
    return Compras;
  };
  