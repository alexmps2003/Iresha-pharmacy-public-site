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
          padding: "72px 82px",
          display: "flex",
          alignItems: "center",
          background: "#063b42",
          color: "#f8ffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: 180,
            height: 486,
            marginRight: 58,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid #c5d7d9",
            borderRadius: 16,
            color: "#f8ffff",
          }}
        >
          <div style={{ display: "flex", fontSize: 78, fontWeight: 800 }}>A3</div>
          <div
            style={{
              width: 88,
              height: 2,
              margin: "24px 0",
              display: "flex",
              background: "#c5d7d9",
            }}
          />
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700 }}>+</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              marginBottom: 26,
              color: "#c5d7d9",
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            No. 81/1 · Chilaw Road · Wennappuwa
          </div>
          <div style={{ display: "flex", fontSize: 67, fontWeight: 750 }}>
            Iresha Pharmaceuticals
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              color: "#f8ffff",
              fontSize: 44,
              fontWeight: 600,
            }}
          >
            Trusted care in Wennappuwa.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              color: "#c5d7d9",
              fontSize: 27,
            }}
          >
            Call 071 425 0895 before you travel
          </div>
        </div>
      </div>
    ),
    size,
  );
}
