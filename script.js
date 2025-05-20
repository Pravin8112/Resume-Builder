// script.js
const form = document.getElementById('resume-form');
const previewFields = {
  name: document.getElementById('preview-name'),
  email: document.getElementById('preview-email'),
  phone: document.getElementById('preview-phone'),
  education: document.getElementById('preview-education'),
  experience: document.getElementById('preview-experience'),
  skills: document.getElementById('preview-skills'),
};

form.addEventListener('input', (e) => {
  const { name, value } = e.target;
  if (previewFields[name]) {
    previewFields[name].textContent = value;
  }
});

document.getElementById('download-btn').addEventListener('click', () => {
  const element = document.getElementById('resume-preview');
  html2pdf().from(element).save(`${previewFields.name.textContent}_resume.pdf`);
});
// Extend previewFields
previewFields.projects = document.getElementById('preview-projects');
previewFields.certifications = document.getElementById('preview-certifications');
