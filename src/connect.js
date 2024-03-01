import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db01", "root", "1234", {
    host: "localhost",
    port: "3306",
    dialect: "mysql"
})

try{
    await sequelize.authenticate()
    console.log('ok')
}catch(e){
    console.log(e)
}

export default sequelize