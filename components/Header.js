import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/">
          <a>
            <HeaderItem title="home" Icon={HomeIcon} />
          </a>
        </Link>
        <Link href="/?genre=fetchTrending">
          <a>
            <HeaderItem title="trending" Icon={LightningBoltIcon} />
          </a>
        </Link>
        <HeaderItem title="verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="collections" Icon={CollectionIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/images/yulu.png"
        width={200}
        height={100}
      />
    </header>
  );
}
