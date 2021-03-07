import useApi from "./useApi";
import { Ref, ref } from "vue";
import { baseUrl } from "../utils/config";

export type UsableRepo = Promise<{ userRepo: Ref<Repo | undefined> }>;

export default async function useRepo(
  username: string,
  reponame: string
): UsableRepo {
  const { response: userRepo, request } = useApi<Repo>(
    `${baseUrl}/repos/${username}/${reponame}`
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { userRepo };
}
