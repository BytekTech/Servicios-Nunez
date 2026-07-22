import Logo from "./Logo";
import Badge24hs from "./Badge24hs";
import StatusBar from "./StatusBar";
import { CONTENT_WIDTH } from "../../lib/container";

export default function Header() {
  return (
    <>
      <div className="bleed border-b border-line">
        <header className={`mx-auto flex w-full items-center gap-3 px-5 py-4 lg:px-8 xl:px-14 ${CONTENT_WIDTH}`}>
          <Logo />
          <Badge24hs />
        </header>
      </div>
      <StatusBar />
    </>
  );
}
