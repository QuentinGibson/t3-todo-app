import clsx from "clsx";
import { eczar } from "../fonts";
import Link from "next/link";
import Image from "next/image";

const menuItem = "hover:underline hover:underline-offset-2";

export default function Navigation() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-base text-white">
      <div className="flex items-center gap-8">
        <Image
          src="/wolf-logo.webp"
          alt="Bravo Beast Website Logo"
          width={80}
          height={140}
        />
        <h1 className={clsx([eczar.className, "text-5xl text-white"])}>
          Bravo Beasts
        </h1>
      </div>
      <div className="flex">
        <ul className="flex gap-8">
          <li className={clsx(menuItem)}>
            <Link href="/phaseguide">Phase Guide</Link>
          </li>
          <li className={clsx(menuItem)}>
            <Link href="/coc">Chain of Command</Link>
          </li>
          <li className={clsx(menuItem)}>
            <Link href="/links">Usefull Links</Link>
          </li>
          <li className={clsx(menuItem)}>
            <Link href="payissues">Pay Issues</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
