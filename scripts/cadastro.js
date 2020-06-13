function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      ufSelect.innerHTML = `<option value="1">${(states, "id")}${(states =
        "nome")}</option>`;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", () => {
  consolo.log("mudei");
});
