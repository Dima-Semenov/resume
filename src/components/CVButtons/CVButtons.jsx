import { useState } from 'react';
import classNames from 'classnames';
import { MdDownload, MdDownloadDone } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import styles from './styles.module.css';
import cvFile from '../../assets/CV_Semenov.pdf';

const CVButtons = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (!downloaded) {
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'Front-End Developer - Dmytro Semenov - CV.pdf';
      link.click();

      setDownloaded(true);
    }
  };

  const handleOpen = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <div className='flex gap-4 flex-grow mobileSmall:flex-col'>
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
      <button
        onClick={handleOpen}
        className={classNames(
          styles.button,
          'border-primary text-primary hover:bg-primary hover:text-white'
        )}
      >
        Open CV <FaEye size={18} />
      </button>
    </div>
  );
};

export default CVButtons;
