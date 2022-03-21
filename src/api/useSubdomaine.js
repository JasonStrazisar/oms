function useSubdomaine() {
  const domaine = window.location.hostname;
  const subdomaine = domaine.split(".")[0];
  const subdomaine2 = domaine.split(".")[1];

  if (subdomaine === "www") {
    return subdomaine2;
  }

  return subdomaine;
}

export default useSubdomaine;
