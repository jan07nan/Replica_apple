import React from "react";
import "./Container.css";
import Details from "./Details.js";
import fpro from "../Images/fpro.jpg";
import fourteen from "../Images/fourteen.png";
import watch from "../Images/watch.png";
import trade from "../Images/trade.jpg";
import wwdc from "../Images/wwdc.jpg";
import ipad from "../Images/ipad.jpg";
import ap from "../Images/ap.jpg";
import igift from "../Images/igift.JPG";
import card from "../Images/card.JPG";
import Details2 from "./Details2.js";
import Navbar from "./Navbar.js";
import Text from "./Text.js";
import Footer from "./Footer.js";

function Container() {
  return (
    <div>
      <Navbar />
      <Details
        Name="iPhone 14 Pro"
        Quote="Pro.Beyond."
        Desc="Learn more> Buy>"
        img={fpro}
        color={"white"}
        bg={"black"}
        margintop={"-23px"}
      />

      <Details
        Name="iPhone 14"
        Quote="Wonderfull."
        Desc="Learn more> Buy>"
        img={fourteen}
        color={"black"}
        bg={"white"}
      />
      <Details
        Name="WATCH"
        Quote="A healthy leap ahead"
        Desc="Learn more> Buy>"
        img={watch}
        color={"white"}
        bg={"black"}
      />

      <div className="displayFlex">
        <Details
          Name="Trade In"
          Quote="Upgrade and save.It's that easy."
          Desc="See what your device is worth>"
          img={trade}
          color={"black"}
          bg={"white"}
          width={"670px"}
        />
        <Details2
          img={wwdc}
          Name="Apple WorldWide Developers Conference."
          Quote="Join us Online June 5-9."
          Desc="Learn more>"
          color={"white"}
          bg={"black"}
          margin={"15px"}
          width={"640px"}
        />
      </div>
      <div className="displayFlex">
        <Details
          Name="iPad"
          Quote="Lovable.Drawable.Magical."
          Desc="Learn more> Buy>"
          img={ipad}
          color={"black"}
          bg={"white"}
          width={"680px"}
        />

        <Details
          Name="Apple for Small Business"
          Quote="Easy.Powerful.Ready to run."
          Desc="Learn more>"
          color={"white"}
          img={ap}
          bg={"black"}
          width={"640px"}
        />
      </div>
      <div className="displayFlex">
        <Details
          Name="Take your pick of Mother's Day gifts"
          Quote="So many ways to thank whoever you call Mom."
          Desc="Shop the gift guide>"
          img={igift}
          color={"black"}
          bg={"white"}
          width={"680px"}
        />

        <Details
          Name="Card"
          Quote="Get up to 3% Daily Cash with every purchase ."
          Desc="Learn more> Apply more>"
          img={card}
          color={"black"}
          bg={"white"}
          width={"640px"}
        />
      </div>
      <Text />
      <Footer />
    </div>
  );
}

export default Container;
