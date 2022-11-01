import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // console.log(project)
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        id="projectName"
        name="projectName"
        value={project.projectName ? project.projectName : ""}
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        id="budget"
        name="budget"
        value={project.budget ? project.budget : ""}
        handleOnChange={handleChange}
      />
      <Select
        name="category_id"
        options={categories}
        text="Selecione a categoria"
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
