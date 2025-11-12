import { ImageResponse } from "@vercel/og";

export const alt = "Example College";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #3b82f6, #1e40af)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 20 }}>
        Collège Albert Camus
      </div>
      <div style={{ fontSize: 32 }}>Collège public à Bois-Colombes</div>
    </div>,
    {
      ...size,
    },
  );
}
