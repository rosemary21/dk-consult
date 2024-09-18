import { LogoIcon } from "@/assets/icons";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className=" h-screen flex items-center justify-center">
      <nav className="px-6 bg-white h-16 z-50 w-full absolute top-0 flex items-center justify-between">
        <LogoIcon />
      </nav>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Go back to Home</Link>
      </div>
    </section>
  );
}

Custom404.hideNav = true;
