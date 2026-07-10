import Logo from "./Logo";
import Badge24hs from "./Badge24hs";
import StatusBar from "./StatusBar";

export default function Header() {
  return (
    <>
      <header className="flex items-center gap-3 border-b border-line px-5 py-4 lg:px-8 xl:px-14">
        <Logo />
        <Badge24hs />
      </header>
      <StatusBar />
    </>
  );
}
