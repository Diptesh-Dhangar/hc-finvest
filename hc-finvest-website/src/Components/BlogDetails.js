import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";

const BlogDetails = () => {
  const { id } = useParams(); // get the blog id from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      console.log("ID from the Blog Detials" + id);
      try {
        // Fetch single blog by id from backend
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <Typography>Loading...</Typography>;

  // Convert image buffer to base64
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
    <Container sx={{ padding: "30px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h3" sx={{ fontWeight: 600, textAlign: "left" }}>
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", textAlign: "left" }}>
          {new Date(blog.date).toLocaleDateString("en-GB")}
        </Typography>
      </Box>

      <img
        src={getImageUrl(blog.image)}
        alt={blog.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <Typography
        variant="body1"
        sx={{ textAlign: "justify", fontSize: "1.1rem" }}
      >
        {blog.description}
      </Typography>
    </Container>
  );
};

export default BlogDetails;
