import { ImageResponse } from "next/og";

export const alt =
  "Iresha Pharmaceuticals — trusted pharmacy care on Chilaw Road, Wennappuwa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #fffaf1 0%, #eefafb 100%)",
          color: "#073b4c",
          padding: "72px 82px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: 134,
            height: 134,
            borderRadius: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#006d77",
            color: "white",
            fontSize: 100,
            fontWeight: 700,
            marginRight: 46,
          }}
        >
          +
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
            Iresha Pharmaceuticals
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              fontWeight: 600,
              marginTop: 34,
              color: "#0b5265",
            }}
          >
            Trusted care in Wennappuwa.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              marginTop: 30,
              color: "#376775",
            }}
          >
            No. 81/1, Chilaw Road · 071 425 0895
          </div>
        </div>
      </div>
    ),
    size,
  );
}
