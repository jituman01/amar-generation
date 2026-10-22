import React from 'react';
import * as ArtIcons from './icons';

export * from './icons';

export const artRegistry = {
  CricketArt: ArtIcons.CricketArt,
  MarblesArt: ArtIcons.MarblesArt,
  LatimArt: ArtIcons.LatimArt,
  KiteArt: ArtIcons.KiteArt,
  HideSeekArt: ArtIcons.HideSeekArt,
  BrickGameArt: ArtIcons.BrickGameArt,
  KanamachiArt: ArtIcons.KanamachiArt,
  GollachutArt: ArtIcons.GollachutArt,
  CarromArt: ArtIcons.CarromArt,
  FootballArt: ArtIcons.FootballArt,

  DoraemonArt: ArtIcons.DoraemonArt,
  PokemonArt: ArtIcons.PokemonArt,
  Ben10Art: ArtIcons.Ben10Art,
  TomJerryArt: ArtIcons.TomJerryArt,
  MotuPatluArt: ArtIcons.MotuPatluArt,
  ChhotaBheemArt: ArtIcons.ChhotaBheemArt,
  ShinchanArt: ArtIcons.ShinchanArt,
  BtvCartoonArt: ArtIcons.BtvCartoonArt,
  AlifLailaArt: ArtIcons.AlifLailaArt,
  MeenaArt: ArtIcons.MeenaArt,

  IceCreamArt: ArtIcons.IceCreamArt,
  AcharArt: ArtIcons.AcharArt,
  FuchkaArt: ArtIcons.FuchkaArt,
  ChanachurArt: ArtIcons.ChanachurArt,
  TiffinBoxArt: ArtIcons.TiffinBoxArt,
  JhalmuriArt: ArtIcons.JhalmuriArt,
  LozensArt: ArtIcons.LozensArt,
  CottonCandyArt: ArtIcons.CottonCandyArt,
  IcePopArt: ArtIcons.IcePopArt,
  KotkotiArt: ArtIcons.KotkotiArt,

  BicycleArt: ArtIcons.BicycleArt,
  CassettePlayerArt: ArtIcons.CassettePlayerArt,
  KeypadPhoneArt: ArtIcons.KeypadPhoneArt,
  CrtTvArt: ArtIcons.CrtTvArt,
  CassetteTapeArt: ArtIcons.CassetteTapeArt,
  SnakeGameArt: ArtIcons.SnakeGameArt,
  CdDiskArt: ArtIcons.CdDiskArt,
  SmartphoneGamesArt: ArtIcons.SmartphoneGamesArt,

  AfternoonFieldArt: ArtIcons.AfternoonFieldArt,
  FriendsHangoutArt: ArtIcons.FriendsHangoutArt,
  RainBathArt: ArtIcons.RainBathArt,
  NanubariArt: ArtIcons.NanubariArt,
  HolidayMorningArt: ArtIcons.HolidayMorningArt,
  PostExamArt: ArtIcons.PostExamArt,
  PaperBoatArt: ArtIcons.PaperBoatArt,
  RooftopStarsArt: ArtIcons.RooftopStarsArt,

  // Stickers
  FieldKingSticker: ArtIcons.FieldKingSticker,
  CartoonBuffSticker: ArtIcons.CartoonBuffSticker,
  TiffinSticker: ArtIcons.TiffinSticker,
  TechWizardSticker: ArtIcons.TechWizardSticker,
  ParaChampionSticker: ArtIcons.ParaChampionSticker,
  MemoryCollectorSticker: ArtIcons.MemoryCollectorSticker,
};

/**
 * Static component to render any art or sticker by name safely.
 * Avoids creating components inside render functions.
 */
export function ArtIcon({ name, size = 32, className = '', ...props }) {
  const Component = (name && artRegistry[name]) || ArtIcons.FallbackArt;
  return <Component size={size} className={className} {...props} />;
}

export function getArtComponent(key) {
  if (key && artRegistry[key]) {
    return artRegistry[key];
  }
  return ArtIcons.FallbackArt;
}
