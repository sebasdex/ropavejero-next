"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs({
  nameCollection,
}: {
  nameCollection: string;
}) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Inicio
        </Link>
        <Link underline="hover" color="inherit" href="/collection">
          Colecciones
        </Link>
        <Typography color="text.primary">{nameCollection}</Typography>
      </Breadcrumbs>
    </div>
  );
}
