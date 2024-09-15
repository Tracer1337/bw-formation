import fetch from "node-fetch";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const host = "192.168.0.219:42425";
export const nodeId = "c9433a9c-2311-4b25-9bad-3759936ace83";

export async function invoke(message) {
  const res = await fetch(
    `https://${host}/mesh/node/${nodeId}/channel/com.bowerswilkins.stated.service+provider/message`,
    {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "X-Request-Id": "E82C0EF6-0EA5-4384-B9AE-96D0CE4677AD",
        "Content-Type": "application/json",
      },
    }
  );
  const content = await res.text();
  return content ? JSON.parse(content) : null;
}
