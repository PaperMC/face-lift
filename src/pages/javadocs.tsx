import type { NextPage, GetStaticProps } from "next";

import FoliaIcon from "@/assets/brand/folia.svg";
import PaperIcon from "@/assets/brand/paper.svg";
import VelocityIcon from "@/assets/brand/velocity.svg";
import WaterfallIcon from "@/assets/brand/waterfall.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";
import { getProject } from "@/lib/service/v2";

interface JavadocProps {
  paperVersion: string;
  foliaVersion: string;
  velocityVersion: string;
  waterfallVersion: string;
}

const Javadocs: NextPage<JavadocProps> = ({
  paperVersion,
  foliaVersion,
  velocityVersion,
  waterfallVersion,
}: JavadocProps) => {
  return (
    <>
      <SEO
        title="Javadocs"
        description="Find javadocs for our software – including Paper, Folia, Velocity, and Waterfall."
        keywords={[
          "papermc",
          "paper",
          "folia",
          "javadocs",
          "velocity",
          "waterfall",
        ]}
        canonical="/javadocs"
      />
      <header className="max-w-7xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          Javadocs
        </h1>
        <p className="text-xl text-center mb-6">
          {"You can find the javadocs for our software below:"}
        </p>
        <div className="grid md:grid-cols-4 lg:mt-6 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="paper"
            name="Paper"
            icon={PaperIcon}
            javadocs={paperVersion}
          />
          <SoftwarePreview
            id="folia"
            name="Folia"
            icon={FoliaIcon}
            javadocs={foliaVersion}
          />
          <SoftwarePreview
            id="velocity"
            name="Velocity"
            icon={VelocityIcon}
            javadocs={velocityVersion}
          />
          <SoftwarePreview
            id="waterfall"
            name="Waterfall"
            icon={WaterfallIcon}
            javadocs={waterfallVersion}
          />
        </div>
      </header>
    </>
  );
};

export default Javadocs;

export const getStaticProps: GetStaticProps<JavadocProps> = async () => {
  const [paper_groups, folia_groups, velocity_groups, waterfall_groups] =
    await Promise.all([
      getProject("paper").then(({ version_groups }) => version_groups),
      getProject("folia").then(({ version_groups }) => version_groups),
      getProject("velocity").then(({ version_groups }) => version_groups),
      getProject("waterfall").then(({ version_groups }) => version_groups),
    ]);

  return {
    props: {
      paperVersion: paper_groups[paper_groups.length - 1],
      foliaVersion: folia_groups[folia_groups.length - 1],
      velocityVersion: velocity_groups[velocity_groups.length - 1],
      waterfallVersion: waterfall_groups[waterfall_groups.length - 1],
    },
    revalidate: 3600, // 1 hour
  };
};
