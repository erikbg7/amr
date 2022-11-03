import { useEffect, useState } from 'react';
import { getAyobaMethodsInstance } from '../client';
import { onAvatarChanged, onNicknameChanged, onProfileChanged } from '../listeners';

// @ts-ignore
window.onNicknameChanged = onNicknameChanged;
// @ts-ignore
window.onAvatarChanged = onAvatarChanged;
// @ts-ignore
window.onProfileChanged = onProfileChanged;

interface IProfile {
  avatar?: string;
  msisdn: string;
  nickname?: string;
}

const useAyobaProfile = (): IProfile => {
  const ayobaClient = getAyobaMethodsInstance();
  const [profile, setProfile] = useState<IProfile>({ msisdn: ayobaClient.getMsisdn() });

  useEffect(() => {
    const handleProfileUpdate = (evt: any) => setProfile((p) => ({ ...p, ...evt.detail }));

    document.addEventListener('onProfileChanged', handleProfileUpdate as EventListener);
    document.addEventListener('onAvatarChanged', handleProfileUpdate as EventListener);
    document.addEventListener('onNicknameChanged', handleProfileUpdate as EventListener);
    return () => {
      document.removeEventListener('onProfileChanged', handleProfileUpdate as EventListener);
      document.removeEventListener('onAvatarChanged', handleProfileUpdate as EventListener);
      document.removeEventListener('onNicknameChanged', handleProfileUpdate as EventListener);
    };
  }, []);

  return profile;
};

export { useAyobaProfile };
export type { IProfile };
