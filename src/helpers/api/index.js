const getUserProfile = async () => {
  try {
    const response = await fetch("http://api.givemewish.ru/users/i/info/my");
    const userProfile = await response.json();
    return userProfile;
  } catch (error) {
    return {
      error: {
        type: error,
        message: "Something went wrong",
      },
    };
  }
};

export { getUserProfile };
