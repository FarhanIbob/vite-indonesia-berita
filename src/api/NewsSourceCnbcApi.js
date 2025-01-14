import axios from "../constants/axios";

export async function fetchAllNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchLifestyleNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/lifestyle";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchTechNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/tech";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchSyariahNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/syariah";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchEntrepreneurNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/entrepreneur";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchNewsNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/news";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchInvestmentNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/investment";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}

export async function fetchMarketNews({ pageParams }) {
  const controller = new AbortController();
  const endpoint = "/v1/cnbc-news/market";
  try {
    const response = await axios.get(
      `${endpoint}?_page=${pageParams}&_limit=10`,
      {
        method: "get",
        signal: controller.signal,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    return response.data;
  } catch (error) {
    controller.abort();
  }
}
