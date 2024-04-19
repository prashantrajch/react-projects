export default function ShowFormData({ formData }) {
  return (
    <div className="card">
      <div className="card-header">
        <h1>Your Form Data</h1>
      </div>
      <div className="card-body">
        <h2>
          Name:- {formData.fName} {formData.lName}
        </h2>
        <h2>Email:- {formData.email}</h2>
        <h2>Password:- {formData.password}</h2>
        <h2>DOB:- {formData.dob}</h2>
        <h2>Gender:- {formData.gender}</h2>
        <h2>City:- {formData.city}</h2>
        <h2>State:- {formData.state}</h2>
        <h2>Pincode:- {formData.pincode}</h2>
        <h2>Country:- {formData.country}</h2>
        <h2>Contact:- {formData.contact}</h2>
        <h2>Hobbies:- {formData.hobbies.map((hobby) => `${hobby},`)}</h2>
      </div>
    </div>
  );
}
