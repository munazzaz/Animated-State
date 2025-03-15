import EvenInTheRoom from "./components/EverInTheRoom";
import HaveNoPower from "./components/HaveNoPower";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InYourTown from "./components/InYourTown";
import IsNotJustApp from "./components/IsNotJustApp";
import WhatWillYouState from "./components/WhatWillYouState";

export default function Home() {
  return (
    <>
      {/* Sticky Header*/}
      <Header />

      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      <div>
        <HaveNoPower />
      </div>

      <div>
        <InYourTown />
      </div>

      <div >
        <EvenInTheRoom/>
      </div>

      <div>
        <IsNotJustApp/>
      </div>

      <div>
        <WhatWillYouState/>
      </div>
    </>
  );
}
