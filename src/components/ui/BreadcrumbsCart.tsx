"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BreadcrumbsCart() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Incio
        </Link>
        <Typography color="text.primary">Tu carrito de compras</Typography>
      </Breadcrumbs>
    </div>
  );
}
