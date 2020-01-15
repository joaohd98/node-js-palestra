exports.getViewInscricaoSQL = function() {
  return "SELECT * FROM vInscricao;";
};

exports.callSpInscricaoSQL = function(req) {

  const { body } = req;

  const parameters = `${body.CodigoPalestra}, '${body.Nome}', '${body.Email}', '${body.Empresa}', '${body.Cargo}'`;

  return `
    DECLARE @Status smallint
    EXECUTE spInscricao ${parameters}, @Status OUTPUT
    select @Status as status;
  `;

};
