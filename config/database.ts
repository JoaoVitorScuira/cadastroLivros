import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://dbUser:123@provatopicos.sqldc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao BD!");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar com o BD`);
  });

export { mongoose };
