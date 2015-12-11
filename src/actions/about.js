'use strict';
export const SET_ABOUT_TECH = 'SET_ABOUT_TECH';
export const SET_ABOUT_STATS = 'SET_ABOUT_STATS';

export function setAboutTech(tech) {
  return {
    type: SET_ABOUT_TECH,
    tech
  };
}

export function setAboutStats(stats) {
  return {
    type: SET_ABOUT_STATS,
    stats
  };
}