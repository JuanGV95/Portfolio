export const CvDownload = () => {
    const link = document.createElement('a');
    link.href = './JuanGonzalez-CV2023.pdf';
    link.download = 'JuanGonzalez-CV2023.pdf';
    link.click();
};