import NavBar2 from "../components/nav-bar2";
import SearchModule from "../components/search-module";
import Timer from "../components/timer";
import Dropdown from "../components/dropdown";
import TriangleMaker from "../components/triangle-maker";

const SearchResultsServices = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] leading-[normal] tracking-[normal] mq750:gap-[20px]">
      <NavBar2 />
      <SearchModule icon={false} />
      <Timer />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[88px] max-w-full lg:gap-[44px] mq750:gap-[22px]">
          <Dropdown />
          <TriangleMaker />
        </section>
      </main>
    </div>
  );
};

export default SearchResultsServices;
