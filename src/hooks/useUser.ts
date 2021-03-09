import useApi from "./useApi";
import { Ref, ref } from "vue";
import { baseUrl } from "../utils/config";

export type UsableUser = Promise<{
  userInfo: Ref<Repo | undefined>;
  error: Ref<any | undefined>;
}>;

export default async function useUser(username: string): UsableUser {
  const { response: userInfo, request, error } = useApi<Repo>(
    `${baseUrl}/users/${username}`
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { userInfo, error };
}
