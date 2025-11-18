import React from 'react';

export enum SectionId {
  HOME = 'home',
  WHY = 'why',
  USE_CASES = 'use-cases',
  INVEST = 'invest',
  AI_DEMO = 'ai-demo',
  CONTACT = 'contact'
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}