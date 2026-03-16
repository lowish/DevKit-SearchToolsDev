import { liteClient, type LiteClient } from "algoliasearch/lite";

import { getAlgoliaClientEnv } from "@/lib/env";

let cachedClient: LiteClient | null = null;
let cachedKey: string | null = null;

export function getAlgoliaSearchClient(): LiteClient | null {
  const env = getAlgoliaClientEnv();
  if (!env) {
    return null;
  }

  const nextCacheKey = `${env.appId}:${env.searchApiKey}`;
  if (!cachedClient || cachedKey !== nextCacheKey) {
    cachedClient = liteClient(env.appId, env.searchApiKey);
    cachedKey = nextCacheKey;
  }

  return cachedClient;
}

export function getAlgoliaIndexName(): string | null {
  return getAlgoliaClientEnv()?.indexName ?? null;
}

export function isAlgoliaClientConfigured(): boolean {
  return getAlgoliaClientEnv() !== null;
}
