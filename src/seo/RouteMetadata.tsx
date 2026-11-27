import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyMetadata, clearMetadata } from "./head";
import { getUnavailableMetadata, resolveMetadata } from "./metadata";

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyMetadata(resolveMetadata(pathname) ?? getUnavailableMetadata(pathname));
    return () => clearMetadata();
  }, [pathname]);

  return null;
}
