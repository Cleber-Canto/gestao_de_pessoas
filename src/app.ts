import express = require("express");
import * as bodyParser from "body-parser";
import cors = require("cors");
import logger = require("morgan");
import { conectarServidorNoBD } from "./config/db";
import { router } from "./routes/routes";

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger("dev"));

/**
 * Conecta no BD
 */
conectarServidorNoBD();

/**
 * Configuração de rotas
 */

app.use(router);



