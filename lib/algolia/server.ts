import { algoliasearch, type Algoliasearch } from "algoliasearch";

import { getAlgoliaServerEnv } from "@/lib/env";

let cachedAdminClient: Algoliasearch | null = null;
let cachedKey: string | null = null;

export function getAlgoliaAdminClient(): Algoliasearch | null {
  const env = getAlgoliaServerEnv();
  if (!env) {
    return null;
  }

  const nextCacheKey = `${env.appId}:${env.adminApiKey}`;
  if (!cachedAdminClient || cachedKey !== nextCacheKey) {
    cachedAdminClient = algoliasearch(env.appId, env.adminApiKey);
    cachedKey = nextCacheKey;
  }

  return cachedAdminClient;
}

export function isAlgoliaAdminConfigured(): boolean {
  return getAlgoliaServerEnv() !== null;
}
