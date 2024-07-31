import type { FunctionComponent, ReactElement } from "react";

import ArchiveIcon from "@/assets/icons/fontawesome/box-archive.svg";
import Button from "@/components/input/Button";

export interface SoftwareHeaderProps {
  id: string;
  name: string;
  versionGroup: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: FunctionComponent<any>;
  header: ReactElement;
  description: ReactElement | string;
  github?: string;
  eol?: boolean;
}

const SoftwareHeader = ({
  id,
  name,
  versionGroup,
  icon: Icon,
  header,
  description,
  github,
  eol,
}: SoftwareHeaderProps): ReactElement => (
  <header className="max-w-7xl flex flex-row flex-wrap mx-auto px-4 pt-32 pb-26 lg:(pt-28 pb-14) gap-16">
    {eol && (
      <div className="text-center px-4 py-8 -mt-16 font-bold bg-red-400 dark:bg-red-500 shadow-md rounded-lg w-full">
        {name} has reached end of life! It is no longer maintained or supported.
      </div>
    )}
    <div className="flex-1">
      <div className="flex flex-row mb-6 gap-4 items-center">
        <div className="w-12 h-12 rounded-lg bg-gray-800 p-3">
          {Icon && <Icon />}
        </div>
        <h1 className="font-medium text-xl flex gap-4 items-center">
          {name} {eol && <ArchiveIcon className="fill-current h-6" />}
        </h1>
      </div>
      <h2 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
        {header}
      </h2>
      <p className="text-xl mt-4">{description}</p>
      <div className="flex flex-row gap-4 mt-8">
        <Button
          variant="filled"
          href={github ?? `/downloads/${id}`}
          external={Boolean(github)}
          className={eol ? "!bg-red-500 !hover:bg-red-400" : ""}
        >
          {github ? "GitHub" : "Downloads"}
        </Button>
        <Button
          variant="outlined"
          href={`https://docs.papermc.io/${id}`}
          external
        >
          Documentation
        </Button>
        <Button
          variant="outlined"
          href={`https://jd.papermc.io/${id}/${versionGroup}`}
          className="hidden md:block"
          external
        >
          Javadoc
        </Button>
      </div>
    </div>
    <div className="flex-1 lg:flex hidden justify-end"></div>
  </header>
);

export default SoftwareHeader;
