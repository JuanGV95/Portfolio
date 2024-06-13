export const CvDownload = () => {
    const link = document.createElement('a');
    link.href = './JuanGonzalez-CV2024.pdf';
    link.download = 'JuanGonzalez-CV2024.pdf';
    link.click();
};