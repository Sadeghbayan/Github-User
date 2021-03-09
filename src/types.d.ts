interface Repo {
  html_url: string;
  name: string;
  full_name: string;
  description: string;
  language: string;
  homepage: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  watchers: number;
  updated_at: string;
  default_branch: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
  license?: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
}

interface Store {
  state: State;
  methods?: any;
  getters?: any;
}

interface State {
  fullName: string;
  githubUsername: string;
  email: string;
  hasAcceptedTerms: boolean;
  preDefinedUser: string;
}
