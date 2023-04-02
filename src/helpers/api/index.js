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

const getUserWishes = async () => {
  try {
    const response = await fetch(
      "http://api.givemewish.ru/users/514d365b-e9b9-47f7-8960-a707f86f1bc7/wishes"
    );
    const userWishes = await response.json();
    return userWishes;
  } catch (error) {
    return {
      error: {
        type: error,
        message: "Something went wrong",
      },
    };
  }
};

export { getUserProfile, getUserWishes };
