const SqlConstants = {
  server: "sql-server-palestra-back-end.database.windows.net",
  dataBase: "SQLServer-back-end",
  user: "SQLServer",
  password: "teste@2019"
};

export  const connStr = `
    Server=${SqlConstants.server};
    Database=${SqlConstants.dataBase};
    User Id=${SqlConstants.user};
    Password=${SqlConstants.password};
`;
