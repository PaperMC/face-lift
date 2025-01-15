import clsx from "clsx";
import Link from "next/link";

import LogoMarkerDark from "@/assets/brand/logo-marker-dark.svg";
import classes from "@/styles/components/layout/Footer.module.css";

const Footer = () => (
  <footer className={clsx("bg-background-dark-80 py-12 mt-8", classes.footer)}>
    <div className="max-w-7xl m-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm text-white">
        <div>
          <span className="font-semibold">Getting Started</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/downloads">Downloads</Link>
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://docs.papermc.io" target="_blank">
                Documentation
              </a>
            </li>
            <li>
              <Link href="/javadocs">Javadocs</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Community</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/community">Our Community</Link>
            </li>
            <li>
              <a
                href="https://github.com/PaperMC"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/papermc"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://forums.papermc.io/" target="_blank">
                Forums
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/PaperPowered"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">PaperMC</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/contribute">Contribute</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://hangar.papermc.io" target="_blank">
                Hangar
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Terms</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="https://forums.papermc.io/help/terms/">Terms</Link>
            </li>
            <li>
              <Link href="https://forums.papermc.io/help/privacy-policy/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="https://forums.papermc.io/help/legal-notice/">
                Legal Notice
              </Link>
            </li>
            <li>
              <Link href="https://hangar.papermc.io/terms">Hangar Terms</Link>
            </li>
            <li>
              <Link href="https://hangar.papermc.io/privacy">
                Hangar Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/community/guidelines">Community Guidelines</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 border-t border-gray-600/50 mt-8 pt-10">
        <LogoMarkerDark className="h-12 cursor-pointer" alt="PaperMC" />
        <div className="flex-1" />
        <div className={"flex flex-col"}>
          <span className="text-gray-300 text-sm">
            © {new Date().getFullYear()} The PaperMC Team
          </span>
          <span className="text-gray-300 text-sm">
            <Link
              className={"text-blue-800 dark:text-blue-300 text-sm font-medium"}
              href="https://github.com/PaperMC/website/"
            >
              PaperMC/website
            </Link>
            {" @ "}
            <Link
              className={"text-blue-800 dark:text-blue-300 text-sm font-medium"}
              href={`https://github.com/PaperMC/website/commit/${process.env.CURRENT_COMMIT}`}
            >
              {process.env.CURRENT_COMMIT}
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 mt-4 pt-4">
        <span className="text-gray-300 text-sm">
          This website is not an official Minecraft website and is not
          associated with Mojang Studios or Microsoft. All product and company
          names are trademarks or registered trademarks of their respective
          holders. Use of these names does not imply any affiliation or
          endorsement by them.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
