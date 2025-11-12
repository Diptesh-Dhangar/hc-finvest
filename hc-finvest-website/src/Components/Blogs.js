import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs"); // Replace with your API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Convert backend image (Buffer) to Base64
  const getImageUrl = (image) => {
    if (!image || !image.data) return "Images/default_blog.png"; // fallback image
    const base64String = btoa(
      new Uint8Array(image.data.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return `data:${image.contentType};base64,${base64String}`;
  };

  // Handle blog card click
const handleBlogClick = (blogId) => {
  navigate(`/blogs/${blogId}`);
};

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />

      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          height: "475px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/FundSecurityImages/Newhedgecapitalsimage_security of funds.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600, zIndex: 2 }}>
          The HC Finvest Blog
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500, zIndex: 2 }}>
          All updates in one place
        </Typography>
      </Box>

      {/* Blog Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ padding: "30px", backgroundColor: "#f8f9fa" }}
      >
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  borderRadius: "7px",
                  boxShadow: 3,
                  height: "450px",
                  width: "400px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
                onClick={() => navigate(`/blogs/${blog._id}`)}
              >
                <img
                  src={getImageUrl(blog.image)}
                  alt={blog.title}
                  style={{
                    width: "100%",
                    height: 270,
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
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      marginBottom: "1em",
                      marginTop:'1.5em',
                      color: "#010101ff",
                      textAlign: "left",
                      fontSize: "1.25rem",
                    }}
                  >
                    {blog.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            No blogs found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Blogs;
