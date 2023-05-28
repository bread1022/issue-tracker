export const fetchData = async (path) => {
  const response = await fetch(path);
  const resData = await response.json();
  return resData;
};

export const fetchAll = async (...url) => {
  const response = await Promise.all(url.map((path) => fetchData(path)));
  return response;
};

export const fetchPost = async (url, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    quries: { code: queryCode }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
};
