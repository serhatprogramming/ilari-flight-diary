/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import diaries from "../../data/entries";

import {
  DiaryEntry,
  NonSensitiveDiaryEntry,
  Visibility,
  Weather,
} from "../types";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const findById = (id: number): DiaryEntry | undefined => {
  const diary = diaries.find((d) => d.id === id);
  return diary;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = (
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    date,
    weather,
    visibility,
    comment,
  };

  diaries.push(newDiaryEntry);

  return newDiaryEntry;
};

export default { getEntries, addDiary, getNonSensitiveEntries, findById };
