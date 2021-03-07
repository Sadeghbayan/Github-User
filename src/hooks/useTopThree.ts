import useApi from "./useApi";
import { baseUrl, predefinedUser } from "../utils/config";
import { Ref, ref } from "vue";

export type UsableRepos = Promise<{ userRepos: Ref<Repo[] | undefined> }>;

export default async function useTopThree(): UsableRepos {
  const { response: userRepos, request } = useApi<Repo[]>(
    `${baseUrl}/users/${predefinedUser}/repos`
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { userRepos };
}
