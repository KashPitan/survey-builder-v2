'use client';

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import surveyReducer from './slices/surveySlice';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSurveySelector: TypedUseSelectorHook<RootState> = useSelector;
