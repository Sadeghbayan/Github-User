import { Ref, ref } from "vue";

export type ApiRequest = () => Promise<void>;
export interface UsableAPI<T> {
  response: Ref<T | undefined>;
  error: any;
  request: ApiRequest;
}

export default function useApi<T>(
  url: RequestInfo,
  options?: RequestInit
): UsableAPI<T> {
  const response: Ref<T | undefined> = ref();
  const error = ref(false);
  const request: ApiRequest = async () => {
    const res: any = await fetch(url, options);
    if (!res.ok) {
      error.value = res;
    }
    const data = await res.json();
    response.value = data;
  };
  return { response, request, error };
}
