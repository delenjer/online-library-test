import React from 'react';

import Icon from '@mui/material/Icon';
import { IFavoriteButton } from "../../interface/interface";

export const FavoriteButton = ({ handleFavorite }:IFavoriteButton) => {

  return (
    <button
      className="favorite-button"
      onClick={handleFavorite}
    >
      <Icon
        className="favorite-button-icon"
        sx={{
          fontSize: 24,
          color: '#fff',
        }}
      >
        favorite_border
      </Icon>
    </button>
  );
}
