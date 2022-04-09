import { saveAs } from 'file-saver';
import { generateFile } from './file-generator.js';
import { generatePreview } from './preview-generator.js';
import calendar from './calendar.json';
import './scss/app.scss';

(function main() {
  window.onload = () => {
    const debug = (import.meta.env.MODE === 'development');
    // Load the terms
    const terms = document.getElementById('terms');
    calendar.terms.forEach((term: any, index: number) => {
      const opt = document.createElement('option');
      opt.setAttribute('value', String(index));
      opt.innerHTML = term.name;
      terms?.appendChild(opt);
    });

    // Form Handler
    const form: HTMLFormElement | null = document.querySelector('form');
    const enableSchedule = document.getElementById('enableSchedule');

    if (form) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        if (!enableSchedule.checked) {
          // data.set('weekday', null);
          data.delete('weekday');
        }
        const blob: Blob = await generateFile(data);
        saveAs(blob, `syllabus${data.get('fileformat') || '.txt'}`);
      };
    }

    // Enable download button when file format selected
    const fileformat = document.getElementById('fileformat');
    function toggleDownloadState(e) {
      const option = e.target.value;
      const download: HTMLElement | null = document.getElementById('download');
      (debug) ? console.log(`File format changed: ${option}`) : null;
      if (option !== 0 && download) {
        download.disabled = false;
      }
      if (option === 0) {
        download.disabled = true;
      }
    }
    fileformat?.addEventListener('change', toggleDownloadState);

    // Update the viewer on form change
    if (form) {
      enableSchedule.onchange = async (e) => {
        (debug && e) ? console.log(`enableSchedule changed: : ${e.target.checked}`) : null;
        if (e.target.checked) {
          document.getElementById('schedule')?.classList.remove('d-none');
        }
        if (!e.target.checked) {
          document.getElementById('schedule')?.classList.add('d-none');
        }
      };

      form.onchange = async (e) => {
        e.preventDefault();
        debug ? console.log(`File format changed: ${e.target.id} : ${e.target.value}`) : null;

        const data = new FormData(form);
        if (!enableSchedule.checked) {
          // data.set('weekday', null);
          data.delete('weekday');
        }
        const response: String = await generatePreview(data);
        const generated: HTMLElement | null = document.getElementById('generated');
        if (generated) {
          generated.innerHTML = response;
        }
      };
    }
    // builder?.addEventListener('change', generatePreview());
    // debug ? console.log(`Options updated: ${e.target.id} : ${e.target.value}`) : null
  };
}());
