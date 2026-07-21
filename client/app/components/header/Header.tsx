import Logo from "./Logo";
import Badge24hs from "./Badge24hs";
import StatusBar from "./StatusBar";

export default function Header() {
  return (
    <>
      <div className="bleed border-b border-line">
        <header className="mx-auto flex w-full max-w-[520px] items-center gap-3 px-5 py-4 md:max-w-[760px] lg:max-w-[1040px] lg:px-8 xl:max-w-[1200px] xl:px-14 2xl:max-w-[1320px]">
          <Logo />
          <Badge24hs />
        </header>
      </div>
      <StatusBar />
    </>
  );
}
