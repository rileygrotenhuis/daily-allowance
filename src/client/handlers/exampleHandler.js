export const getAllExamples = async (token) => {
  const res = await fetch('http://localhost:3000/api/example', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const getExample = async (token, id) => {
  const res = await fetch(`http://localhost:3000/api/example/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const createExample = async (token, payload) => {
  const res = await fetch('http://localhost:3000/api/example', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return res;
};

export const updateExample = async (token, id, payload) => {
  const res = await fetch(`http://localhost:3000/api/example/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return res;
};

export const deleteExample = async (token, id) => {
  const res = await fetch(`http://localhost:3000/api/example/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
