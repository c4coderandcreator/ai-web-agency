import React from "react";
import { useTranslation } from "react-i18next";
import WhiteButton from "../../components/WhiteButton";

export default function CallToAction() {
  const [t] = useTranslation("global");

  return (
    <div
      style={{
        margin: "300px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          gap: "32px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "18px",
            borderRadius: "32px",
            padding: "8px 18px",
            background:
              "linear-gradient(to right,rgba(97, 11, 217, 0.52),rgba(66, 122, 212, 0.43))",
          }}
        >
          {t("call_to_action.tag")}
        </div>
        <h1
          style={{
            fontWeight: "300",
            fontSize: "70px",
            height: "fit-content",
            margin: "0px",
            textAlign: "center",
            color: "white",
          }}
        >
          {t("call_to_action.title")}
        </h1>
        <div
          style={{
            maxWidth: "600px",
            textAlign: "center",
            fontSize: "18px",
            color: "#F7F7F7",
            lineHeight: "1.6",
          }}
        >
          {t("call_to_action.description")}
        </div>

        <WhiteButton />
      </div>
    </div>
  );
}
