export const getTopStarsRepos = (
  repos: Repo[] | undefined,
  limit = 3
): Repo[] | undefined => {
  const filtered =
    repos &&
    repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .splice(0, limit);
  return filtered;
};

export const emailChecker = (email: string): boolean => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};
