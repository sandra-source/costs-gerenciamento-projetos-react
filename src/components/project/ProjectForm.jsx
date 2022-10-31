import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => setCategories(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        id="projectName"
        name="projectName"
      />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        id="budget"
        name="budget"
      />
      <Select name="category_id" options={categories} text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
