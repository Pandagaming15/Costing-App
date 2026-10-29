import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function exportWorksheetToPdf(
  element: HTMLElement,
  productName: string = 'Cooked_Product'
): Promise<void> {
  const safeName = (productName.trim() || 'Cooked_Product')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .substring(0, 30);
  const fileName = `${safeName}_Costing_Worksheet.pdf`;

  // Temporarily force white background and standard text colors for clean render
  const originalBackground = element.style.background;
  const originalColor = element.style.color;
  element.style.background = '#ffffff';
  element.style.color = '#000000';

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1024,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const totalPdfHeight = (canvasHeight * pdfWidth) / canvasWidth;

    let heightLeft = totalPdfHeight;
    let position = 0;

    // First Page
    pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, totalPdfHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Subsequent Pages if content extends beyond one page
    while (heightLeft > 5) {
      position = -(totalPdfHeight - heightLeft);
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, totalPdfHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    pdf.save(fileName);
  } finally {
    element.style.background = originalBackground;
    element.style.color = originalColor;
  }
}
