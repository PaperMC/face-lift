import type { Project, ProjectsResponse, VersionBuilds, VersionFamilyBuilds } from "@/types/project";

const API_ENDPOINT = "https://api.papermc.io/v2";

export async function fetchProjects(): Promise<ProjectsResponse> {
  const response = await fetch(`${API_ENDPOINT}/projects`);
  return response.json();
}

export async function fetchProject(project: string): Promise<Project> {
  const response = await fetch(`${API_ENDPOINT}/projects/${project}`);
  return response.json();
}

export async function fetchVersionBuilds(project: string, version: string): Promise<VersionBuilds> {
  const response = await fetch(`${API_ENDPOINT}/projects/${project}/versions/${version}/builds`);
  return response.json();
}

export async function fetchVersionFamilyBuilds(project: string, family: string): Promise<VersionFamilyBuilds> {
  const response = await fetch(`${API_ENDPOINT}/projects/${project}/version_group/${family}/builds`);
  return response.json();
}

export const generateVersionBuildDownloadURL = (project: string, version: string, build: number, file: string): string =>
  `${API_ENDPOINT}/projects/${project}/versions/${version}/builds/${build}/downloads/${file}`;
