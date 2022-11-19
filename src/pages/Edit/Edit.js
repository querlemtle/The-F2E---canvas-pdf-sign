/* eslint-disable */
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import samplePDF from "../../assets/sample-pdf.pdf";
import Toolbar from "../../components/Toolbar/Toolbar";
// import SignModal from "../../components/SignModal/SignModal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Edit() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <section className="bg-gray-2 flex justify-around">
      <div className="overflow-auto w-screen h-screen flex justify-center pt-[72px]">
      {/* <SignModal /> */}
      <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      </div>
      <Toolbar />
    </section>
  );
}
