export default function createFormData(form) {

  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
  console.log(plainFormData)
  return JSON.stringify(plainFormData)
}
