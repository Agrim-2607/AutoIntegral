const BASE_URL = "http://localhost:4000";

export async function healthCheck() {
  const res = await fetch(`${BASE_URL}/health`);
  if (!res.ok) {
    throw new Error("Backend not responding");
  }
  return res.json();
}
