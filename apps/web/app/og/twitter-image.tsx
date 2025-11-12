import { ImageResponse } from "@vercel/og";

export const alt = "Example College";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 36,
        background: "linear-gradient(to right, #1e40af, #3b82f6)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: 40,
      }}
    >
      <div>
        <div style={{ fontSize: 48, fontWeight: "bold", marginBottom: 10 }}>
          Collège Albert Camus
        </div>
        <div style={{ fontSize: 24 }}>Collège public à Bois-Colombes</div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
