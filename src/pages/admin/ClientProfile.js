import React from "react";

// components

import Sidebar from "components/Sidebar/Sidebar";
import ClientProfileTable from "components/Cards/ClientProfileTable.js";
import AdminNavbar from "components/Navbars/AdminNavbar";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Tables() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <div className="px-4 md:px-10 mx-auto w-full mt-96">
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <ClientProfileTable />
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
