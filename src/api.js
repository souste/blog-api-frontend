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

const createPost = async (postData) => {
  try {
    const response = await fetch("https://blog-api-ewnh.onrender.com/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    const result = await response.json;
    return result.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getComments = async (postId) => {
  try {
    const response = await fetch(`https://blog-api-ewnh.onrender.com/api/v1/posts/${postId}/comments`);

    if (!response.ok) {
      throw new Error("Could not fetch Comments");
    }
    const result = await response.json();

    return result.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Will need option of adding this by user in admin version of website
const createComment = async (postId, commentData) => {
  try {
    const response = await fetch(`https://blog-api-ewnh.onrender.com/api/v1/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    const result = await response.json();

    return result.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch(`https://blog-api-ewnh.onrender.com/api/v1/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    console.log("API response", result);

    if (!response.ok) {
      return { errors: result.errors || [{ msg: "Unknown error occurred" }] };
    }

    return result;
  } catch (err) {
    console.error("Failed API request", err);
    return { errors: [{ msg: err.message }] };
  }
};

const loginUser = async (userData) => {
  try {
    const response = await fetch(`https://blog-api-ewnh.onrender.com/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    console.log("API Login Response", result);

    if (!response.ok) {
      return { errors: result.errors || [{ msg: "Unknown error occurred" }] };
    }
    return result;
  } catch (err) {
    console.error("Failed API request", err);
    return { errors: [{ msg: err.message }] };
  }
};

export { getPosts, getSinglePost, createPost, getComments, createComment, createUser, loginUser };
