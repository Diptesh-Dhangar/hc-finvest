import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hcfinvest.onrender.com/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const getImageUrl = (image) => {
    if (!image || !image.data) return "Images/default_blog.png";
    const base64String = btoa(
      new Uint8Array(image.data.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return `data:${image.contentType};base64,${base64String}`;
  };

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />

      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "300px", sm: "380px", md: "475px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/FundSecurityImages/Newhedgecapitalsimage_security of funds.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "30px",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            zIndex: 2,
            fontSize: { xs: "28px", sm: "34px", md: "48px" },
            textAlign: "center",
          }}
        >
          The HC Finvest Blog
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            zIndex: 2,
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textAlign: "center",
          }}
        >
          All updates in one place
        </Typography>
      </Box>

      {/* Blog Grid */}
      <Box
        sx={{ padding: { xs: "10px", md: "30px" }, backgroundColor: "#f8f9fa" }}
      >
        <Grid container spacing={3} justifyContent="center">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                width: "100%",
              }}
            >
              <CircularProgress size={50} />
            </Box>
          ) : blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    borderRadius: "7px",
                    boxShadow: 3,
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "scale(1.02)" },

                    // ✨ responsive card width & height
                    width: { xs: "100%", sm: "100%", md: "350px", lg: "400px" },
                    height: { xs: "auto", sm: "450px" },
                  }}
                  onClick={() => navigate(`/blogs/${blog._id}`)}
                >
                  <img
                    src={getImageUrl(blog.image)}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        marginBottom: "8px",
                        textAlign: "left",
                        fontSize: "0.875em",
                        fontWeight: "400",
                      }}
                    >
                      {blog.date
                        ? new Date(blog.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "No date available"}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        marginBottom: "1em",
                        marginTop: "0.5em",
                        color: "#010101ff",
                        textAlign: "left",
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      }}
                    >
                      {blog.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{ marginTop: "20px", textAlign: "center" }}
            >
              No blogs found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blogs;
