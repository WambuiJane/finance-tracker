import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import HeroImage from "@/../public/images/heroImage.jpg";

export default function HeroContent() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "600px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "40px 20px", md: "80px 40px" },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        zindex: 1,

        // Dark overlay for text readability
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.55)", // Adjust opacity as needed
          zIndex: -1,
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          filter: "blur(2px)  brightness(0.8)",
        }}
      >
        <Image
          src={HeroImage}
          alt="Finance background"
          fill
          priority
          style={{
            objectFit: "cover", // Cover the entire container
            objectPosition: "center", // Center the image
          }}
        />
      </Box>

      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "50px", sm: "36px", md: "48px", lg: "60px" },
              color: "white",
              wordBreak: "break-word",
            }}
          >
            Take Control of Your Finances with{" "}
            <Box
              component="span"
              sx={{ fontSize: "inherit", color: "#BCD4EA" }}
            >
              FinanceFlow
            </Box>
          </Typography>
          <Typography
            variant="body1"
            fontSize="20px"
            mb={3}
            sx={{
              color: "white",
              textShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            Your all-in-one solution for managing your finances. Track your
            spending, set budgets, and achieve your financial goals with ease.
          </Typography>
          <Button
            variant="landingPage"
            size="large"
            sx={{
              borderRadius: "16px",
              fontSize: "18px",
              backgroundColor: "#BCD4EA",
              textTransform: "none",
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
