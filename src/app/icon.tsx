import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F2AFC2 0%, #C9AEE0 55%, #A8DFC9 100%)",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#3A2C36",
            fontWeight: 700,
          }}
        >
          U
        </div>
      </div>
    ),
    { ...size }
  );
}
