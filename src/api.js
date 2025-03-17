const getPosts = async () => {
  try {
    const response = await fetch("https://blog-api-ewnh.onrender.com/api/v1/posts");

    if (!response.ok) {
      throw new Error("Could not fetch Posts");
    }
    const result = await response.json();

    return result.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getSinglePost = async (postId) => {
  try {
    const response = await fetch(`https://blog-api-ewnh.onrender.com/api/v1/posts/${postId}`);

    if (!response.ok) {
      throw new Error("Could not fetch Post");
    }
    const result = await response.json();

    return result.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export { getPosts, getSinglePost };
