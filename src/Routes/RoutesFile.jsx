import React from "react";
import AccountCreation from "../Pages/AccountCreation";
import EmailVerified from "../Pages/EmailVerified";
import { Routes, Route } from "react-router-dom";
import MapPreview from "../Components/AccountDetails/MapPreview";
import SliderOffice from "../Components/AccountDetails/SliderOffice";
import ImageCarosel from "../Components/AccountDetails/ImageCarosel";
import InvitePeople from "../Components/AccountDetails/InvitePeople";
import Home from "../Pages/Home";
import Spacecreated from "../Pages/SpaceCreated";
export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<AccountCreation />} />
      <Route path="/emailverified" element={<Spacecreated />} />
      <Route path="/preview" element={<MapPreview />} />
      <Route path="/slider" element={<SliderOffice />} />
      <Route path="/image" element={<ImageCarosel />} />
      <Route path="/invitepeople" element={<InvitePeople />} />
    </Routes>
  );
}
