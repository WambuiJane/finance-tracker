import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/system";
import { Button, Stack, SvgIcon } from "@mui/material";
// import { signIn } from "next-auth/react";
import FinanceFlowLogo from "../icons/FinanceFlowLogo";

const AppbarContainer = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  height: "72px",
  padding: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
}));

interface NavBarProps {
  children?: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <AppbarContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "right",
            justifyContent: "flex-start",
          }}
        >
          <Stack
            direction="row"
            justifyContent="justify-between"
            alignItems="center"
            spacing={1}
            sx={{
              color: "rgb(63, 63, 63)",
            }}
          >
            {/* Logo Icon */}
            <SvgIcon
              sx={{
                color: "#3E6B8E",
                fontSize: "32px",
                height: "32px",
                width: "32px",
              }}
              viewBox="0 0 48 48"
            >
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" />
            </SvgIcon>
            <FinanceFlowLogo sx={{ height: "32px", width: "125px" }} />
          </Stack>
          <Box />
        </Box>
        <Tooltip title="Click to login">
          <Button
            sx={{
              textTransform: "none",
              color: "#3E6B8E",
              border: "1px solid #3E6B8E",
            }}
            // onClick={() =>
            //   signIn("Safaricom", {
            //     callbackUrl: "/dashboard",
            //   })
            // }
          >
            Sign In
          </Button>
        </Tooltip>
      </AppbarContainer>
      {children}
    </>
  );
}
