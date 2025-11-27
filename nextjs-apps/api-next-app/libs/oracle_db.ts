import oracledb from "oracledb"

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

let connection: oracledb.Connection | null = null

export async function getConnection() {
  if (connection) return connection

  connection = await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT, // host:port/servicename
  })

  return connection
}
