import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/event/Event";
import { Subscribe } from "./pages/Subscribe/Subscribe";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};
