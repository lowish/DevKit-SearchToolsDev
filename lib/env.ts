type AlgoliaClientEnv = {
  appId: string;
  searchApiKey: string;
  indexName: string;
};

type AlgoliaServerEnv = {
  appId: string;
  adminApiKey: string;
  indexName: string;
};

function readEnv(name: string): string | null {
  const value = process.env[name];
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function getAlgoliaClientEnv(): AlgoliaClientEnv | null {
  const appId = readEnv("NEXT_PUBLIC_ALGOLIA_APP_ID");
  const searchApiKey = readEnv("NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY");
  const indexName = readEnv("NEXT_PUBLIC_ALGOLIA_INDEX_NAME") ?? "portfolio_items";

  if (!appId || !searchApiKey) {
    return null;
  }

  return {
    appId,
    searchApiKey,
    indexName,
  };
}

export function getAlgoliaServerEnv(): AlgoliaServerEnv | null {
  const clientEnv = getAlgoliaClientEnv();
  const adminApiKey = readEnv("ALGOLIA_ADMIN_API_KEY");

  if (!clientEnv || !adminApiKey) {
    return null;
  }

  return {
    appId: clientEnv.appId,
    adminApiKey,
    indexName: clientEnv.indexName,
  };
}
