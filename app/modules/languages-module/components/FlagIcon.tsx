import { FC } from "react";

import { LanguageSlug } from "../types/languages";
import React from "react";
// import { cifBr, cifEs, cifUs } from '@coreui/icons'
// import CIcon from '@coreui/icons-react'
import { getLanguageLocalStorage } from "../storages/language-storage";

const FlagIcon: FC<{
  language_slug?: LanguageSlug | undefined;
  width?: number | undefined;
}> = ({ language_slug }) => {
  const _languageSlug =
    language_slug === undefined ? getLanguageLocalStorage() : language_slug;

  if (_languageSlug === "pt_br") {
    return (
      // <CIcon
      //   icon={cifBr}
      //   width={width !== undefined ? width : 30}
      //   style={{ margin: 3, marginBottom: '-3px' }}
      // />
      <></>
    );
  }

  if (_languageSlug === "es_es") {
    return (
      // <CIcon
      //   icon={cifEs}
      //   width={width !== undefined ? width : 30}
      //   style={{ margin: 3, marginBottom: '-3px' }}
      // />
      <></>
    );
  }

  if (_languageSlug === "en_us") {
    return (
      // <CIcon
      //   icon={cifUs}
      //   width={width !== undefined ? width : 30}
      //   style={{ margin: 3, marginBottom: '-3px' }}
      // />
      <></>
    );
  }

  return <></>;
};

export default FlagIcon;
