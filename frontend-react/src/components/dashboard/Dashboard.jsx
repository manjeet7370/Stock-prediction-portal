import React, { useEffect } from "react";
import axiosInstance from "../../axiosInstense";

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view/");
        console.log("SUCCESS:", response.data);
      } catch (error) {
        console.error("ERROR:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  return <div className="text-light">Dashboard</div>;
};

export default Dashboard;
