export interface Project {
  project_id: string;
  project_name: string;
  version_groups: string[];
  versions: string[];
}

export interface ProjectVersion {
  project_id: string;
  project_name: string;
  version: string;
  builds: number[];
}

export interface VersionBuilds {
  project_id: string;
  project_name: string;
  version: string;
  builds: Build[];
}

export interface VersionFamilyBuilds {
  project_id: string;
  project_name: string;
  version_group: string;
  versions: string[];
  builds: VersionFamilyBuild[];
}

export interface VersionFamilyBuild extends Build {
  project_id: string;
  project_name: string;
  version: string;
}

export interface Build {
  build: number;
  time: string;
  channel: "default" | "experimental";
  promoted: boolean;
  changes: BuildChange[];
  downloads: Record<string, BuildDownload>;
}

export interface BuildChange {
  commit: string;
  summary: string;
  message: string;
}

export interface BuildDownload {
  name: string;
  sha256: string;
}

export interface ProjectsResponse {
  projects: string[];
}
