import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams(); // get the blog id from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      console.log("ID from the Blog Details: " + id);
      try {
        // Fetch single blog by id from backend
        const response = await axios.get(
          `https://hcfinvest.onrender.com/api/blogs/${id}`
        );
        setBlog(response.data);
        console.log("Blog Data: ", response.data);
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
      <Box sx={{ textAlign: "left", marginBottom: "20px" }}>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {new Date(blog.date).toLocaleDateString("en-GB")}
        </Typography>
      </Box>

      {/* Blog Image */}
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

      {/* Blog Description */}
      <Typography
        variant="body1"
        sx={{ textAlign: "justify", fontSize: "1.1rem", marginBottom: "30px" }}
      >
        {blog.description}
      </Typography>

      {/* ---------------------------------------------- */}
      {/*             DISPLAY BLOG SECTIONS              */}
      {/* ---------------------------------------------- */}

      {blog.sections && blog.sections.length > 0 && (
        <Box sx={{ marginTop: "20px" }}>
          {blog.sections.map((section, index) => (
            <Box key={index} sx={{ marginBottom: "20px" }}>
              {/* Section Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#0f5e9b",
                  textAlign: "left",
                }}
              >
                {section.heading}
              </Typography>

              {/* Section Content (HTML from Quill) */}
              <div
                dangerouslySetInnerHTML={{ __html: section.content }}
                style={{
                  fontSize: "1.05rem",
                  color: "#333",
                  lineHeight: "1.7",
                  textAlign: "justify",
                }}
              ></div>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default BlogDetails;