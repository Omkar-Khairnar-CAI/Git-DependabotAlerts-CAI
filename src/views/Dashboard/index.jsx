import React from "react";
import { MainDashboardContainer, TopBar } from "../../containers";

export const Dashboard = ({
  currentActiveRepo,
        setCurrentActiveRepo
}) => {
  return (
    <>
      <TopBar />
      <MainDashboardContainer/>
    </>
  );
};