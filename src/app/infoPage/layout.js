"use client";

import { use, useEffect, useState } from "react";

function LoadNavbar() {
  const [LoadNavbar, setLoadNavbar] = useState(0);

  useEffect(() => {
    console.log("Ladowanie");
  });
}

export default function InfoPage({ children }) {
  return <>{children}</>;
}
