import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";

import App from "./App";

import "dayjs/locale/ru";
import "./css/index.css";

WebFontLoader.load({
    google: {
        families: ["Open Sans:300,400,700"],
    },
});

dayjs.locale("ru");

ReactDom.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);