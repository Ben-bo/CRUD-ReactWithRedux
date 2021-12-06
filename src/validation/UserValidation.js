const UserValidation = (values) => {
  const errors = {};
  if (!values.nama || values.nama === "") {
    errors.nama = "nama harus diisi";
  }
  return errors;
};

export default UserValidation;
