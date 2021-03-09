import useApi from "./useApi";
import { baseUrl } from "../utils/config";
import { Ref, ref } from "vue";

export type UsableRepos = Promise<{
  userRepos: Ref<Repo[] | undefined>;
  error: Ref<any | undefined>;
}>;

export default async function useTopThree(username: string): UsableRepos {
  const userRepos: Ref<Repo[] | undefined> = ref();
  const { response, request, error } = useApi<Repo[]>(
    `${baseUrl}/users/${username}/repos`
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    userRepos.value = response.value;
    loaded.value = true;
  }

  return { userRepos, error };
}
