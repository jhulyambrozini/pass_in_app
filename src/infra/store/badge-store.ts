import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BadgeModel } from '@/models/badge-model';

type StateProps = {
  badge: BadgeModel | null;
  save: (badge: BadgeModel) => void;
  remove: () => void;
  updateAvatar: (uri: string) => void;
};

export const useBadgeStore = create(
  persist<StateProps>(
    set => ({
      badge: null,
      save: (badge: BadgeModel) => set(() => ({ badge })),
      remove: () => set(() => ({ badge: null })),
      updateAvatar: (uri: string) =>
        set(state => ({
          badge: state.badge ? { ...state.badge, image: uri } : state.badge,
        })),
    }),
    {
      name: 'nlw-unite: badge',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
