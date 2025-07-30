import axios from "axios"


export type GithubType = {
  name: string;
  login: string;
  avatar_url: string;
}

const urlBase = "https://api.github.com/users/erickcred"

export async function GetUserGit(): Promise<GithubType> {
  return axios.get(urlBase)
    .then((response) => {
      const data = response.data as GithubType;
      return data;
    })
    .catch((error) => {
      console.log(error);
      return {} as GithubType;
    });
}

export type GithubReposType = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

export async function GetUserGitRepos(): Promise<GithubReposType[]> {
  return axios.get(`${urlBase}/repos`)
    .then((response) => {
      const data = response.data as GithubReposType[];
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}