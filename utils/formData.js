export default function createFormData(form) {

  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
  return JSON.stringify(plainFormData)
}
