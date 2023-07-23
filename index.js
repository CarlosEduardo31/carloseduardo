let peso1 = 78
let peso2 = 80


if (peso1 < 55){
    return "categoriaPesoL "
} else if (peso1 >= 55 && peso1 < 65){
  peso1 = "categoriaPesoMM"
} else if (peso1 >= 65 && peso1 < 75){
  peso1 = "categoriaPesoM"
} else if (peso1 >= 75 && peso1 < 85){
    return "categoriaPesoMP"
} else {
  return "categoriaPesoP"
}