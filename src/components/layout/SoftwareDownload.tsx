import clsx from "clsx";
import Link from "next/link";
import type { FunctionComponent, ReactElement } from "react";
import { useState } from "react";

import SoftwareBuilds from "@/components/data/SoftwareBuilds";
import SoftwareDownloadButton from "@/components/input/SoftwareDownloadButton";
import type { ProjectProps } from "@/lib/context/downloads";
import { useVersionBuilds } from "@/lib/service/v2";

export interface SoftwareDownloadProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: FunctionComponent<any>;
  description: ReactElement | string;
  experimentalWarning?: string;
  eol?: boolean;
}

const SoftwareDownload = ({
  id,
  project,
  icon: Icon,
  description,
  experimentalWarning,
  eol,
}: SoftwareDownloadProps & ProjectProps): ReactElement => {
  const [isStable, setStable] = useState(true);
  const version = isStable
    ? project.latestStableVersion
    : (project.latestExperimentalVersion ?? project.latestStableVersion);
  const { data: builds } = useVersionBuilds(id, version);
  const latestBuild = builds && builds.builds[builds.builds.length - 1];

  const toggleStable = () => {
    setStable(!isStable);
  };

  return (
    <>
      <header className="max-w-7xl flex flex-row flex-wrap mx-auto px-4 pt-32 pb-16 lg:(pt-28 pb-12) gap-16">
        {eol && (
          <div className="text-center px-4 py-8 -mt-16 font-bold bg-red-400 dark:bg-red-500 shadow-md rounded-lg w-full">
            {project.name} has reached end of life! It is no longer maintained
            or supported.
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-row mb-6 gap-4 items-center">
            <div className="w-12 h-12 rounded-lg bg-gray-800 p-3">
              {Icon && <Icon />}
            </div>
            <h1 className="font-medium text-xl">Downloads</h1>
          </div>
          <h2 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            Get {project.name}&nbsp;
            <span
              className={isStable && !eol ? "text-blue-600" : "text-red-500"}
            >
              {version}
            </span>
          </h2>
          <p className="text-xl mt-4">
            {isStable ? description : (experimentalWarning ?? description)}
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <SoftwareDownloadButton
              projectId={id}
              project={project}
              build={latestBuild}
              version={version}
              stable={!latestBuild || latestBuild?.channel === "default"}
              eol={eol}
            />
            {project.latestExperimentalVersion && (
              <button
                className={clsx(
                  "rounded-lg flex flex-row w-full md:w-100 border text-white transition-border pl-5 py-3",
                  isStable
                    ? "dark:border-red-500 dark:text-red-400 border-red-900 text-red-700"
                    : "dark:border-blue-600 dark:text-blue-400 border-blue-900 text-blue-700",
                )}
                onClick={toggleStable}
              >
                {isStable
                  ? "Toggle experimental builds for "
                  : "Back to stable builds for "}
                {isStable
                  ? project.latestExperimentalVersion
                  : project.latestStableVersion}
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      <section id="builds" className="max-w-7xl mx-auto py-8">
        <h2 className="text-center text-xl font-medium">Older builds</h2>
        <p className="text-center text-gray-800 dark:text-gray-200 text-lg mt-2 mb-8 px-4">
          Looking for older builds - or changelogs? We got you!&nbsp;
          <br />
          <span className="text-gray-700 dark:text-gray-400">
            Even older builds are available in our&nbsp;
            <Link
              href="/downloads/all"
              className="text-gray-700 dark:text-gray-400 underline"
            >
              build explorer
            </Link>
            .
          </span>
        </p>
        <SoftwareBuilds
          project={id}
          version={version}
          builds={builds?.builds}
          eol={eol}
        />
      </section>
    </>
  );
};

export default SoftwareDownload;
