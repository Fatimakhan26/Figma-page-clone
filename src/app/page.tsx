import Image from "next/image";
import Hero from "./component/Hero";
import Client from "./component/Client";
import Community from "./component/Community";
import Body from "./component/Body";
import Achievement from "./component/Achievement";
import Calendar from "./component/Calendar";
import Customer from "./component/Customers";
import Communityupdates from "./component/Communityupdates";
import Frame from "./component/Frame";
import Footer from "./component/Footer";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Client/>
    <Community/>
    <Body/>
    <Achievement/>
    <Calendar/>
    <Customer/>
    <Communityupdates/>
    <Frame/>
    <Footer/>

   </div>
  );
}