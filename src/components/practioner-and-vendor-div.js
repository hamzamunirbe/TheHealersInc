import JoinAsPractitioner from "./join-as-practitioner";

const PractionerAndVendorDiv = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center max-w-full text-left text-5xl text-neutral-1 font-web-primary-h3-primary-dm-sans">
      <div className="h-[500px] flex-1 relative max-w-full">
        <JoinAsPractitioner
          paragraph="Join our community of healers and showcase your fitness and wellness services to a wide audience."
          text="Join as practitioner"
        />
        <JoinAsPractitioner
          paragraph="Explore a variety of fitness and wellness services offered by our trusted providers to enhance your well-being."
          text="Explore Services"
          propLeft="720px"
          propBackgroundImage="url('/explore-services@3x.png')"
          propPadding="0px 11px 0px 0px"
          propWidth="147px"
        />
      </div>
    </section>
  );
};

export default PractionerAndVendorDiv;
