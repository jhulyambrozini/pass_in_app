import { BadgeModel } from '@/models/badge-model';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type StateProps = {
  badge: BadgeModel | null;
  save: (badge: BadgeModel) => void;
  remove: () => void;
};

export const useBadgeStore = create(
  persist<StateProps>(
    set => ({
      badge: null,
      save: (badge: BadgeModel) => set(() => ({ badge })),
      remove: () => set(() => ({ badge: null })),
    }),
    {
      name: 'nlw-unite: badge',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
