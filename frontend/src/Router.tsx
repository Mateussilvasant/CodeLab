import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/event/Event";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};
