import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

let userLocale = navigator.language || navigator.userLanguage;
if (userLocale.startsWith('es')) {
    userLocale = 'es-ES';
}
else {
    userLocale = 'en-US';
}

ReactDOM.render(
    <IntlProvider locale={userLocale} messages={userLocale === 'es-ES' ? localeEsMessages : localeEnMessages}>
    <JobsList />
    </IntlProvider>,
    document.getElementById("root")
);