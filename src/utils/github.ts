import type { Contributor } from "@/types/github";

export async function fetchAllContributors(): Promise<Contributor[]> {
  const contributors: Contributor[] = [];
  let page = 1;
  let hasMoreContributors = true;

  while (hasMoreContributors) {
    const response = await fetch(`https://api.github.com/repos/PaperMC/Paper/contributors?per_page=100&page=${page}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch page ${page}: ${response.statusText}`);
    }

    const data: Contributor[] = await response.json();

    contributors.push(...data);

    if (data.length < 100) {
      hasMoreContributors = false;
    } else {
      page++;
    }
  }

  return contributors;
}
