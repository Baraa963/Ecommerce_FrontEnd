import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// eslint-disable-next-line react/prop-types
export default function HeaderLinks({ title }) {
  return (
    <Box
      //   className="border"
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>

      {title != "Home" && title != "Add Product" &&(
        <>
          <ExpandMore />
          <Box
            className="show-when-hover"
            sx={{
              position: "absolute",
              minWidth: "170px",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              display: "none",
              zIndex: 999,
            }}
          >
            <Paper sx={{ mt: 2 }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem
                    disablePadding
                    sx={{ "&:hover .sub-link": { display: "block" } }}
                  >
                    <ListItemButton
                      sx={{ display: "flex", p: 0, px: 1.5, py: 0.5 }}
                    >
                      <ListItemText
                        primary="Dashboard"
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "14px",
                            fontWeight: "300",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem
                    sx={{
                      "&:hover .sub-link": { display: "block" },
                      position: "relative",
                    }}
                    disablePadding
                  >
                    <ListItemButton
                      sx={{ display: "flex", p: 0, px: 1.5, py: 0.5 }}
                    >
                      <ListItemText
                        primary="Products"
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "14px",
                            fontWeight: "300",
                          },
                        }}
                      />
                      <Box flexGrow={1} />
                      {title !== "Vendoor Account" && (
                        <KeyboardArrowRightOutlinedIcon />
                      )}
                    </ListItemButton>
                    {title !== "Vendoor Account" && (
                      <Box
                        className="sub-link"
                        sx={{
                          display: "none",
                          position: "absolute",
                          top: 0,
                          left: "100%",
                        }}
                      >
                        <Paper sx={{ ml: 1, minWidth: 150 }}>
                          <nav aria-label="secondary mailbox folders">
                            <List>
                              <ListItem
                                disablePadding
                                sx={{
                                  "&:hover .sub-link": { display: "block" },
                                }}
                              >
                                <ListItemButton
                                  sx={{
                                    display: "flex",
                                    p: 0,
                                    px: 1.5,
                                    py: 0.5,
                                  }}
                                >
                                  <ListItemText
                                    primary="Add Product"
                                    sx={{
                                      ".MuiTypography-root": {
                                        fontSize: "14px",
                                        fontWeight: "300",
                                      },
                                    }}
                                  />
                                </ListItemButton>
                              </ListItem>

                              <ListItem
                                disablePadding
                                sx={{
                                  "&:hover .sub-link": { display: "block" },
                                }}
                              >
                                <ListItemButton
                                  sx={{
                                    display: "flex",
                                    p: 0,
                                    px: 1.5,
                                    py: 0.5,
                                  }}
                                >
                                  <ListItemText
                                    primary="Edit Product"
                                    sx={{
                                      ".MuiTypography-root": {
                                        fontSize: "14px",
                                        fontWeight: "300",
                                      },
                                    }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Paper>
                      </Box>
                    )}
                  </ListItem>

                  <ListItem
                    disablePadding
                    sx={{ "&:hover .sub-link": { display: "block" } }}
                  >
                    <ListItemButton
                      sx={{ display: "flex", p: 0, px: 1.5, py: 0.5 }}
                    >
                      <ListItemText
                        primary="Orders"
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "14px",
                            fontWeight: "300",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  <ListItem
                    disablePadding
                    sx={{ "&:hover .sub-link": { display: "block" } }}
                  >
                    <ListItemButton
                      sx={{ display: "flex", p: 0, px: 1.5, py: 0.5 }}
                    >
                      <ListItemText
                        primary="Profile"
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "14px",
                            fontWeight: "300",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Paper>
          </Box>
        </>
      )}
    </Box>
  );
}
