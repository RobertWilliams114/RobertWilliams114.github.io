import React from "react";
import ReactPDF, { PDFViewer, Document } from "@react-pdf/renderer";

function Resume() {
  return <Document file="../../../public/Robert Williams Resume.pdf" />;
}

export default Resume;
