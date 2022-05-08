import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";

interface Props {
  /** See `GlobalWorkerOptionsType`. */
  url: string;
  beforeLoad: JSX.Element;
  workerSrc?: string;
  errorMessage?: JSX.Element;
  children: (pdfDocument: PDFDocumentProxy) => JSX.Element;
  onError?: (error: Error) => void;
  cMapUrl?: string;
  cMapPacked?: boolean;
}

GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js";

enum PdfState {
  LOADING,
  ERROR,
  SUCCESS,
}

export const PdfLoader: FC<Props> = ({
  url,
  beforeLoad,
  errorMessage = "Something went wrong",
  children,
  onError,
  cMapUrl,
  cMapPacked,
  ...props
}) => {
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [pdfState, setPdfState] = useState<PdfState>(PdfState.LOADING);
  const documentRef = useRef(null);

  useEffect(() => {
    load();
    return () => {
      Boolean(pdfDocument) && pdfDocument.destroy();
    };
  }, [url]);

  const load = async () => {
    setPdfState(PdfState.LOADING);
    const { document: ownerDocument } = documentRef.current || {};
    Boolean(pdfDocument) && pdfDocument?.destroy();
    setPdfDocument(null);
    setError(null);

    try {
      const documentRes = getDocument({
        ...props,
        ownerDocument,
        cMapUrl,
        cMapPacked,
        url,
      });
      const pdfDocument = await documentRes.promise;
      setPdfDocument(pdfDocument);
      setPdfState(PdfState.SUCCESS);
    } catch (error) {
      console.log({ error, url });
      setError(error);
      setPdfState(PdfState.ERROR);
    }
  };

  return (
    <>
      <span ref={documentRef} />
      {error ? (
        <>{errorMessage}</>
      ) : !pdfDocument || !children ? (
        beforeLoad
      ) : (
        children(pdfDocument)
      )}
    </>
  );
};
