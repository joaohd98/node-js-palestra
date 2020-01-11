exports.getViewInscricaoSQL = function() {
  return "SELECT * FROM vInscricao;";
};

exports.callSpInscricaoSQL = function(req) {

  const { body } = req;

  const parameters = `${body.codigoPalestra}, '${body.nome}', '${body.email}', '${body.empresa}', '${body.cargo}'`;

  return `
    DECLARE @Status smallint
    EXECUTE spInscricao ${parameters}, @Status OUTPUT
    select @Status as status;
  `;

};
