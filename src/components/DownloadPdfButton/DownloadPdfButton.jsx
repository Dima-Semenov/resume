import { useState } from 'react';
import classNames from 'classnames';
import { MdDownload, MdDownloadDone } from 'react-icons/md';
import styles from './styles.module.css';

const DownloadPdfButton = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (!downloaded) {
      // const link = document.createElement('a');
      // link.href = '/my-cv.pdf';
      // link.download = 'CV.pdf';
      // link.click();
  
      setDownloaded(true);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloaded}
      className={classNames(styles.button, {
        'border-green-600 text-green-600 cursor-not-allowed bg-green-100':
          downloaded,
        'border-primary text-primary hover:bg-primary hover:text-white':
          !downloaded,
      })}
    >
      {downloaded ? 'CV Downloaded' : 'Download CV'}
      {downloaded ? <MdDownloadDone size={18} /> : <MdDownload size={18} />}
    </button>
  );
};

export default DownloadPdfButton;
