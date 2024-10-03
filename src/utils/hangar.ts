import type { HangarProjectList } from "@/types/hangar";

export const fetchHangarProjects = async (platform: string): Promise<HangarProjectList> => {
  const res = await fetch(`https://hangar.papermc.io/api/v1/projects?limit=1&offset=0&sort=-stars&platform=${platform.toUpperCase()}`);
  return await res.json();
};

export const fetchHangarFoliaProjects = async (): Promise<HangarProjectList> => {
  const res = await fetch("https://hangar.papermc.io/api/v1/projects?limit=10&offset=0&tag=SUPPORTS_FOLIA&sort=-stars");
  return await res.json();
};
