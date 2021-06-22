import React, { FC } from 'react';

import { ITitle } from "../../interface/interface";

export const MainTitleTemplate: FC<ITitle> = ({pref, children}) => (
  <h1 className={`title ${pref}__title`}>{children}</h1>
);
