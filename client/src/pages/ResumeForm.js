import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumeForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/resume", form);
      alert("Resume Saved Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const downloadPDF = () => {
    const input = document.getElementById("resume-preview");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <h2>Create Resume</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />

        <textarea name="skills" placeholder="Skills" onChange={handleChange} />
        <textarea name="education" placeholder="Education" onChange={handleChange} />
        <textarea name="experience" placeholder="Experience" onChange={handleChange} />

        <button type="submit">Save Resume</button>
      </form>

      <button onClick={downloadPDF}>Download PDF</button>

      <div id="resume-preview" style={{ border: "1px solid black", padding: "20px", marginTop: "20px" }}>
        <h1>{form.name}</h1>
        <p>{form.email}</p>
        <p>{form.phone}</p>

        <h3>Skills</h3>
        <p>{form.skills}</p>

        <h3>Education</h3>
        <p>{form.education}</p>

        <h3>Experience</h3>
        <p>{form.experience}</p>
      </div>
    </div>
  );
}

export default ResumeForm;
